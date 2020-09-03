/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Animated, Easing, Button,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: { HermesInternal: null | {} };

if(!__DEV__){
    var Smartlook = require('smartlook-react-native-wrapper');
    Smartlook.setupAndStartRecording("MY_KEY_HERE");

}


export function useDelayUnmount(isMounted: boolean, delayTime: number) {
    const [shouldRender, setShouldRender] = useState(isMounted)

    useEffect(
        function EffectUseDelayUnmount() {
            let timeoutId: ReturnType<typeof setTimeout>
            if (isMounted && !shouldRender) {
                setShouldRender(true)
            } else if (!isMounted && shouldRender) {
                timeoutId = setTimeout(function TimeoutUseDelayUnmount() {
                    setShouldRender(false)
                }, delayTime)
            }
            return () => clearTimeout(timeoutId)
        },
        [isMounted, delayTime, shouldRender]
    )
    return shouldRender
}


function useFlyFadeInOut(shown: boolean, speed: number = 200, animationId?: string) {
    const shouldRender = useDelayUnmount(shown, speed)
    const animVal = useRef(new Animated.Value(0))


    useEffect(() => {
        const anim = Animated.timing(animVal.current, {
            useNativeDriver: true,
            duration: speed,
            toValue: shown ? 1 : 0,
            easing: Easing.linear
        })
        anim.start()

        return () => anim.stop()
    }, [shown])

    const interpolatedOpacity = animVal.current.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0.5, 1],
    })
    const interpolatedScale = animVal.current.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [8, 4, 1],
    })

    return [shouldRender, interpolatedOpacity, interpolatedScale] as const
}


function Dialog({text, shown, onRequestClose}: { text: string, shown: boolean, onRequestClose: () => void }) {
    const [render, opacity, scale] = useFlyFadeInOut(shown)

    if(!render){
        return null
    }

    return (
        <Animated.View style={{
            opacity,
            ...StyleSheet.absoluteFillObject,
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <View style={{...StyleSheet.absoluteFillObject, backgroundColor: "black", opacity: 0.3, zIndex: -1}}/>
            <Animated.View style={{
                transform: [{scale}],
                width: "80%",
                height: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 4,
                backgroundColor: "white",
                padding: 20
            }}>
                <View style={{display: "flex", flex: 1, flexDirection: "column", justifyContent: "center"}}>
                    <Text style={{fontSize: 22}}>{text}</Text>

                </View>
                <View>
                    <Button onPress={onRequestClose} title={"OK"}/>
                </View>
            </Animated.View>

        </Animated.View>
    )
}

const App = () => {
    const [showDialog1, setShowDialog1] = useState(false)
    const [showDialog2, setShowDialog2] = useState(false)

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={{position: "absolute", zIndex: 0, width: "100%", height: "100%",display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center"}}>

                <Dialog text={"Dialog one"} shown={showDialog1} onRequestClose={() => setShowDialog1(false)} />
                <Dialog text={"Dialog two"} shown={showDialog2} onRequestClose={() => setShowDialog2(false)} />

                <View style={{padding: 40, zIndex: 0}}>
                    <Button title={"Show dialog 1"} onPress={() => setShowDialog1(true)} />
                </View>

                <View style={{padding: 40, zIndex: 0,}}>
                    <Button title={"Show dialog 2"} onPress={() => setShowDialog2(true)} />
                </View>


            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
