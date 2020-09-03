### Repo illustrating smartlook issue on react-native

This repo reproduces the "Invalid ID" log spam.

This is essentially an empty react-native 0.63.2 project.

Run on Android Studio emulator, API 30 x86_64 google play services image. Log output is as follows:


```
2020-09-03 14:18:31.239 23290-23290/? W/estsmartlookbu: Unexpected CPU variant for X86 using defaults: x86_64
2020-09-03 14:18:31.266 23290-23290/com.testsmartlookbug D/ApplicationLoaders: Returning zygote-cached class loader: /system/framework/android.test.base.jar
2020-09-03 14:18:31.274 23290-23290/com.testsmartlookbug D/NetworkSecurityConfig: No Network Security Config specified, using platform default
2020-09-03 14:18:31.275 23290-23290/com.testsmartlookbug D/NetworkSecurityConfig: No Network Security Config specified, using platform default
2020-09-03 14:18:31.276 23290-23290/com.testsmartlookbug D/SoLoader: init start
2020-09-03 14:18:31.276 23290-23290/com.testsmartlookbug D/SoLoader: adding system library source: /vendor/lib
2020-09-03 14:18:31.276 23290-23290/com.testsmartlookbug D/SoLoader: adding system library source: /system/lib
2020-09-03 14:18:31.281 23290-23290/com.testsmartlookbug D/SoLoader: adding application source: com.facebook.soloader.DirectorySoSource[root = /data/app/~~IvwNn0Fq_bv5hxFYAMgArg==/com.testsmartlookbug-ELDqtAH0p7btFQOyzkJrXw==/lib/x86_64 flags = 0]
2020-09-03 14:18:31.283 23290-23290/com.testsmartlookbug D/SoLoader: adding backup source from : com.facebook.soloader.ApkSoSource[root = /data/user/0/com.testsmartlookbug/lib-main flags = 1]
2020-09-03 14:18:31.283 23290-23290/com.testsmartlookbug D/SoLoader: Preparing SO source: com.facebook.soloader.DirectorySoSource[root = /system/lib flags = 2]
2020-09-03 14:18:31.283 23290-23290/com.testsmartlookbug D/SoLoader: Preparing SO source: com.facebook.soloader.DirectorySoSource[root = /vendor/lib flags = 2]
2020-09-03 14:18:31.283 23290-23290/com.testsmartlookbug D/SoLoader: Preparing SO source: com.facebook.soloader.DirectorySoSource[root = /data/app/~~IvwNn0Fq_bv5hxFYAMgArg==/com.testsmartlookbug-ELDqtAH0p7btFQOyzkJrXw==/lib/x86_64 flags = 0]
2020-09-03 14:18:31.283 23290-23290/com.testsmartlookbug D/SoLoader: Preparing SO source: com.facebook.soloader.ApkSoSource[root = /data/user/0/com.testsmartlookbug/lib-main flags = 1]
2020-09-03 14:18:31.284 23290-23290/com.testsmartlookbug V/fb-UnpackingSoSource: locked dso store /data/user/0/com.testsmartlookbug/lib-main
2020-09-03 14:18:31.285 23290-23290/com.testsmartlookbug V/fb-UnpackingSoSource: deps mismatch on deps store: regenerating
2020-09-03 14:18:31.285 23290-23290/com.testsmartlookbug V/fb-UnpackingSoSource: so store dirty: regenerating
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libc++_shared.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libfb.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libfbjni.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libfolly_futures.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libfolly_json.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libglog.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libglog_init.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libhermes-executor-debug.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libhermes-executor-release.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libhermes-inspector.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libimagepipeline.so: deferring to libdir
2020-09-03 14:18:31.300 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libjsc.so: deferring to libdir
2020-09-03 14:18:31.301 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libjscexecutor.so: deferring to libdir
2020-09-03 14:18:31.301 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libjsijniprofiler.so: deferring to libdir
2020-09-03 14:18:31.301 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libjsinspector.so: deferring to libdir
2020-09-03 14:18:31.301 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libnative-filters.so: deferring to libdir
2020-09-03 14:18:31.301 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libnative-imagetranscoder.so: deferring to libdir
2020-09-03 14:18:31.302 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libreactnativeblob.so: deferring to libdir
2020-09-03 14:18:31.302 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libreactnativejni.so: deferring to libdir
2020-09-03 14:18:31.302 23290-23290/com.testsmartlookbug D/ApkSoSource: not allowing consideration of lib/x86_64/libyoga.so: deferring to libdir
2020-09-03 14:18:31.302 23290-23290/com.testsmartlookbug V/fb-UnpackingSoSource: regenerating DSO store com.facebook.soloader.ApkSoSource
2020-09-03 14:18:31.302 23290-23290/com.testsmartlookbug V/fb-UnpackingSoSource: Finished regenerating DSO store com.facebook.soloader.ApkSoSource
2020-09-03 14:18:31.303 23290-23290/com.testsmartlookbug V/fb-UnpackingSoSource: starting syncer worker
2020-09-03 14:18:31.309 23290-23290/com.testsmartlookbug V/fb-UnpackingSoSource: releasing dso store lock for /data/user/0/com.testsmartlookbug/lib-main (from syncer thread)
2020-09-03 14:18:31.309 23290-23290/com.testsmartlookbug V/fb-UnpackingSoSource: not releasing dso store lock for /data/user/0/com.testsmartlookbug/lib-main (syncer thread started)
2020-09-03 14:18:31.309 23290-23290/com.testsmartlookbug D/SoLoader: init finish: 4 SO sources prepared
2020-09-03 14:18:31.309 23290-23290/com.testsmartlookbug D/SoLoader: init exiting
2020-09-03 14:18:31.311 23290-23290/com.testsmartlookbug D/SoLoader: init exiting
2020-09-03 14:18:31.311 23290-23290/com.testsmartlookbug D/SoLoader: About to load: libjscexecutor.so
2020-09-03 14:18:31.311 23290-23290/com.testsmartlookbug D/SoLoader: libjscexecutor.so not found on /data/user/0/com.testsmartlookbug/lib-main
2020-09-03 14:18:31.311 23290-23290/com.testsmartlookbug D/SoLoader: libjscexecutor.so found on /data/app/~~IvwNn0Fq_bv5hxFYAMgArg==/com.testsmartlookbug-ELDqtAH0p7btFQOyzkJrXw==/lib/x86_64
2020-09-03 14:18:31.311 23290-23290/com.testsmartlookbug D/SoLoader: Not resolving dependencies for libjscexecutor.so
2020-09-03 14:18:31.317 23290-23290/com.testsmartlookbug D/JavaScriptCore.Version: 245459.0.0
2020-09-03 14:18:31.317 23290-23290/com.testsmartlookbug D/SoLoader: Loaded: libjscexecutor.so
2020-09-03 14:18:31.318 23290-23290/com.testsmartlookbug D/SoLoader: init exiting
2020-09-03 14:18:31.330 23290-23314/com.testsmartlookbug D/libEGL: loaded /vendor/lib64/egl/libEGL_emulation.so
2020-09-03 14:18:31.331 23290-23314/com.testsmartlookbug D/libEGL: loaded /vendor/lib64/egl/libGLESv1_CM_emulation.so
2020-09-03 14:18:31.332 23290-23314/com.testsmartlookbug D/libEGL: loaded /vendor/lib64/egl/libGLESv2_emulation.so
2020-09-03 14:18:31.342 23290-23290/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000000.
2020-09-03 14:18:31.345 23290-23315/com.testsmartlookbug D/SoLoader: About to load: libreactnativejni.so
2020-09-03 14:18:31.346 23290-23315/com.testsmartlookbug D/SoLoader: libreactnativejni.so not found on /data/user/0/com.testsmartlookbug/lib-main
2020-09-03 14:18:31.346 23290-23315/com.testsmartlookbug D/SoLoader: libreactnativejni.so found on /data/app/~~IvwNn0Fq_bv5hxFYAMgArg==/com.testsmartlookbug-ELDqtAH0p7btFQOyzkJrXw==/lib/x86_64
2020-09-03 14:18:31.346 23290-23315/com.testsmartlookbug D/SoLoader: Not resolving dependencies for libreactnativejni.so
2020-09-03 14:18:31.347 23290-23315/com.testsmartlookbug D/SoLoader: Loaded: libreactnativejni.so
2020-09-03 14:18:31.347 23290-23315/com.testsmartlookbug D/SoLoader: About to load: libfbjni.so
2020-09-03 14:18:31.347 23290-23315/com.testsmartlookbug D/SoLoader: libfbjni.so not found on /data/user/0/com.testsmartlookbug/lib-main
2020-09-03 14:18:31.347 23290-23315/com.testsmartlookbug D/SoLoader: libfbjni.so found on /data/app/~~IvwNn0Fq_bv5hxFYAMgArg==/com.testsmartlookbug-ELDqtAH0p7btFQOyzkJrXw==/lib/x86_64
2020-09-03 14:18:31.347 23290-23315/com.testsmartlookbug D/SoLoader: Not resolving dependencies for libfbjni.so
2020-09-03 14:18:31.350 23290-23315/com.testsmartlookbug D/SoLoader: Loaded: libfbjni.so
2020-09-03 14:18:31.368 23290-23317/com.testsmartlookbug E/ReactNativeJNI: logMarker CREATE_REACT_CONTEXT_END
2020-09-03 14:18:31.368 23290-23315/com.testsmartlookbug E/unknown:ReactNative: ReactInstanceManager.createReactContext: mJSIModulePackage null
2020-09-03 14:18:31.374 23290-23317/com.testsmartlookbug E/ReactNativeJNI: logMarker RUN_JS_BUNDLE_START
2020-09-03 14:18:31.375 23290-23318/com.testsmartlookbug E/unknown:ReactNative: ReactInstanceManager.attachRootViewToInstance()
2020-09-03 14:18:31.385 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.art.ARTGroupViewManager
2020-09-03 14:18:31.385 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.art.ARTGroupShadowNode
2020-09-03 14:18:31.387 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.art.ARTShapeViewManager
2020-09-03 14:18:31.387 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.art.ARTShapeShadowNode
2020-09-03 14:18:31.388 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.art.ARTTextViewManager
2020-09-03 14:18:31.388 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.art.ARTTextShadowNode
2020-09-03 14:18:31.389 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.checkbox.ReactCheckBoxManager
2020-09-03 14:18:31.391 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
2020-09-03 14:18:31.393 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.picker.ReactDialogPickerManager
2020-09-03 14:18:31.394 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
2020-09-03 14:18:31.396 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.picker.ReactDropdownPickerManager
2020-09-03 14:18:31.396 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
2020-09-03 14:18:31.399 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
2020-09-03 14:18:31.401 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
2020-09-03 14:18:31.402 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ProgressBarShadowNode
2020-09-03 14:18:31.403 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
2020-09-03 14:18:31.405 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.slider.ReactSliderManager
2020-09-03 14:18:31.405 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.slider.ReactSliderManager$ReactSliderShadowNode
2020-09-03 14:18:31.406 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
2020-09-03 14:18:31.407 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager$ReactSwitchShadowNode
2020-09-03 14:18:31.407 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
2020-09-03 14:18:31.408 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.art.ARTSurfaceViewManager
2020-09-03 14:18:31.408 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.art.ARTSurfaceViewShadowNode
2020-09-03 14:18:31.409 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager
2020-09-03 14:18:31.409 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageShadowNode
2020-09-03 14:18:31.410 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
2020-09-03 14:18:31.411 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
2020-09-03 14:18:31.412 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ModalHostShadowNode
2020-09-03 14:18:31.413 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextManager
2020-09-03 14:18:31.414 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextShadowNode
2020-09-03 14:18:31.415 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
2020-09-03 14:18:31.418 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputShadowNode
2020-09-03 14:18:31.419 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
2020-09-03 14:18:31.420 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextShadowNode
2020-09-03 14:18:31.420 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
2020-09-03 14:18:31.421 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.viewpager.ReactViewPagerManager
2020-09-03 14:18:31.422 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextViewManager
2020-09-03 14:18:31.422 23290-23318/com.testsmartlookbug W/unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextShadowNode
2020-09-03 14:18:31.424 23290-23318/com.testsmartlookbug D/SoLoader: About to load: libyoga.so
2020-09-03 14:18:31.425 23290-23318/com.testsmartlookbug D/SoLoader: libyoga.so not found on /data/user/0/com.testsmartlookbug/lib-main
2020-09-03 14:18:31.425 23290-23318/com.testsmartlookbug D/SoLoader: libyoga.so found on /data/app/~~IvwNn0Fq_bv5hxFYAMgArg==/com.testsmartlookbug-ELDqtAH0p7btFQOyzkJrXw==/lib/x86_64
2020-09-03 14:18:31.425 23290-23318/com.testsmartlookbug D/SoLoader: Not resolving dependencies for libyoga.so
2020-09-03 14:18:31.428 23290-23318/com.testsmartlookbug D/SoLoader: Loaded: libyoga.so
2020-09-03 14:18:31.433 23290-23318/com.testsmartlookbug E/unknown:ReactRootView: runApplication: call AppRegistry.runApplication
2020-09-03 14:18:31.439 23290-23312/com.testsmartlookbug D/HostConnection: HostConnection::get() New Host Connection established 0x790da105fd00, tid 23312
2020-09-03 14:18:31.441 23290-23312/com.testsmartlookbug D/HostConnection: HostComposition ext ANDROID_EMU_CHECKSUM_HELPER_v1 ANDROID_EMU_native_sync_v2 ANDROID_EMU_native_sync_v3 ANDROID_EMU_native_sync_v4 ANDROID_EMU_dma_v1 ANDROID_EMU_direct_mem ANDROID_EMU_host_composition_v1 ANDROID_EMU_host_composition_v2 ANDROID_EMU_vulkan ANDROID_EMU_deferred_vulkan_commands ANDROID_EMU_vulkan_null_optional_strings ANDROID_EMU_vulkan_create_resources_with_requirements ANDROID_EMU_YUV_Cache ANDROID_EMU_async_unmap_buffer ANDROID_EMU_vulkan_ignored_handles ANDROID_EMU_vulkan_free_memory_sync ANDROID_EMU_vulkan_shader_float16_int8 ANDROID_EMU_vulkan_async_queue_submit GL_OES_EGL_image_external_essl3 GL_OES_vertex_array_object GL_KHR_texture_compression_astc_ldr ANDROID_EMU_gles_max_version_3_0 
2020-09-03 14:18:31.472 23290-23318/com.testsmartlookbug D/SoLoader: init exiting
2020-09-03 14:18:31.473 23290-23312/com.testsmartlookbug W/OpenGLRenderer: Failed to choose config with EGL_SWAP_BEHAVIOR_PRESERVED, retrying without...
2020-09-03 14:18:31.479 23290-23318/com.testsmartlookbug W/unknown:ReactNative: Tried to update non-existent root tag: 0
2020-09-03 14:18:31.481 23290-23312/com.testsmartlookbug D/EGL_emulation: eglCreateContext: 0x790da105ea70: maj 3 min 0 rcv 3
2020-09-03 14:18:31.502 23290-23312/com.testsmartlookbug D/EGL_emulation: eglMakeCurrent: 0x790da105ea70: ver 3 0 (tinfo 0x790d41036ba0) (first time)
2020-09-03 14:18:31.514 23290-23312/com.testsmartlookbug I/Gralloc4: mapper 4.x is not supported
2020-09-03 14:18:31.515 23290-23312/com.testsmartlookbug D/HostConnection: createUnique: call
2020-09-03 14:18:31.515 23290-23312/com.testsmartlookbug D/HostConnection: HostConnection::get() New Host Connection established 0x790da105e180, tid 23312
2020-09-03 14:18:31.516 23290-23312/com.testsmartlookbug D/goldfish-address-space: allocate: Ask for block of size 0x100
2020-09-03 14:18:31.516 23290-23312/com.testsmartlookbug D/goldfish-address-space: allocate: ioctl allocate returned offset 0x3fb0d9000 size 0x2000
2020-09-03 14:18:31.520 23290-23312/com.testsmartlookbug D/HostConnection: HostComposition ext ANDROID_EMU_CHECKSUM_HELPER_v1 ANDROID_EMU_native_sync_v2 ANDROID_EMU_native_sync_v3 ANDROID_EMU_native_sync_v4 ANDROID_EMU_dma_v1 ANDROID_EMU_direct_mem ANDROID_EMU_host_composition_v1 ANDROID_EMU_host_composition_v2 ANDROID_EMU_vulkan ANDROID_EMU_deferred_vulkan_commands ANDROID_EMU_vulkan_null_optional_strings ANDROID_EMU_vulkan_create_resources_with_requirements ANDROID_EMU_YUV_Cache ANDROID_EMU_async_unmap_buffer ANDROID_EMU_vulkan_ignored_handles ANDROID_EMU_vulkan_free_memory_sync ANDROID_EMU_vulkan_shader_float16_int8 ANDROID_EMU_vulkan_async_queue_submit GL_OES_EGL_image_external_essl3 GL_OES_vertex_array_object GL_KHR_texture_compression_astc_ldr ANDROID_EMU_gles_max_version_3_0 
2020-09-03 14:18:31.563 23290-23290/com.testsmartlookbug E/unknown:ReactNative: Unable to launch logbox because react was unable to create the root view
2020-09-03 14:18:31.599 23290-23318/com.testsmartlookbug I/TetheringManager: registerTetheringEventCallback:com.testsmartlookbug
2020-09-03 14:18:31.636 23290-23317/com.testsmartlookbug E/ReactNativeJNI: logMarker RUN_JS_BUNDLE_END
2020-09-03 14:18:31.637 23290-23317/com.testsmartlookbug I/ReactNativeJS: Running "TestSmartlookBug" with {"rootTag":1}
2020-09-03 14:18:31.692 23290-23339/com.testsmartlookbug I/VideoCapabilities: Unsupported profile 4 for video/mp4v-es
2020-09-03 14:18:32.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:32.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:32.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:32.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:32.700 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:32.700 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:32.700 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:32.700 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:33.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:33.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:33.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:33.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:33.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:33.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:33.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:33.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:34.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:34.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:34.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:34.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:34.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:34.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:34.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:34.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:35.196 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:35.196 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:35.196 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:35.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:35.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:35.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:35.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:35.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:36.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:36.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:36.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:36.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:36.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:36.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:36.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:36.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:37.196 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:37.196 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:37.196 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:37.196 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:37.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:37.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:37.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:37.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:38.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:38.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:38.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:38.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:38.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:38.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:38.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:38.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:39.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:39.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:39.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:39.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:39.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:39.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:39.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:39.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:40.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:40.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000035.
2020-09-03 14:18:40.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000001d.
2020-09-03 14:18:40.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000031.
2020-09-03 14:18:40.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000023.
2020-09-03 14:18:40.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000002d.
2020-09-03 14:18:40.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000002b.
2020-09-03 14:18:40.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:40.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:40.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:40.696 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:40.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000035.
2020-09-03 14:18:40.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000001d.
2020-09-03 14:18:40.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000031.
2020-09-03 14:18:40.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000023.
2020-09-03 14:18:40.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000002d.
2020-09-03 14:18:40.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000002b.
2020-09-03 14:18:40.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:40.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:40.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:41.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:41.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000035.
2020-09-03 14:18:41.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000001d.
2020-09-03 14:18:41.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000031.
2020-09-03 14:18:41.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000023.
2020-09-03 14:18:41.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000002d.
2020-09-03 14:18:41.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000002b.
2020-09-03 14:18:41.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:41.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:41.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:41.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:41.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000035.
2020-09-03 14:18:41.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000001d.
2020-09-03 14:18:41.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000031.
2020-09-03 14:18:41.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000023.
2020-09-03 14:18:41.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000002d.
2020-09-03 14:18:41.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000002b.
2020-09-03 14:18:41.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:41.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:41.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:41.724 23290-23290/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000002d.
2020-09-03 14:18:42.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:42.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:42.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:42.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:42.592 23290-23290/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:42.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:42.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000004d.
2020-09-03 14:18:42.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000037.
2020-09-03 14:18:42.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000004b.
2020-09-03 14:18:42.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000003b.
2020-09-03 14:18:42.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000045.
2020-09-03 14:18:42.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000043.
2020-09-03 14:18:42.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:42.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:42.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:43.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:43.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000004d.
2020-09-03 14:18:43.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000037.
2020-09-03 14:18:43.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000004b.
2020-09-03 14:18:43.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000003b.
2020-09-03 14:18:43.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000045.
2020-09-03 14:18:43.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000043.
2020-09-03 14:18:43.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:43.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:43.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:43.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:43.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000004d.
2020-09-03 14:18:43.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000037.
2020-09-03 14:18:43.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000004b.
2020-09-03 14:18:43.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000003b.
2020-09-03 14:18:43.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000045.
2020-09-03 14:18:43.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000043.
2020-09-03 14:18:43.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:43.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:43.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:44.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:44.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000004d.
2020-09-03 14:18:44.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000037.
2020-09-03 14:18:44.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000004b.
2020-09-03 14:18:44.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000003b.
2020-09-03 14:18:44.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000045.
2020-09-03 14:18:44.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000043.
2020-09-03 14:18:44.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:44.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:44.197 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:44.296 23290-23290/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000045.
2020-09-03 14:18:44.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:44.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:44.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:44.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:45.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:45.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000067.
2020-09-03 14:18:45.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000004f.
2020-09-03 14:18:45.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000063.
2020-09-03 14:18:45.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000055.
2020-09-03 14:18:45.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000005f.
2020-09-03 14:18:45.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000005d.
2020-09-03 14:18:45.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:45.199 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:45.199 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:45.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:45.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000067.
2020-09-03 14:18:45.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000004f.
2020-09-03 14:18:45.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000063.
2020-09-03 14:18:45.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000055.
2020-09-03 14:18:45.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000005f.
2020-09-03 14:18:45.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000005d.
2020-09-03 14:18:45.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:45.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:45.697 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:45.918 23290-23290/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000005f.
2020-09-03 14:18:46.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:46.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:46.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:46.198 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:46.634 23290-23290/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:46.698 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:46.699 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000007f.
2020-09-03 14:18:46.699 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000069.
2020-09-03 14:18:46.699 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000007d.
2020-09-03 14:18:46.699 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000006d.
2020-09-03 14:18:46.699 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000077.
2020-09-03 14:18:46.699 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000075.
2020-09-03 14:18:46.699 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:46.699 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:46.699 23290-23342/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:46.744 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:46.744 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000007f.
2020-09-03 14:18:46.745 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000069.
2020-09-03 14:18:46.745 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000007d.
2020-09-03 14:18:46.746 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000006d.
2020-09-03 14:18:46.746 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000077.
2020-09-03 14:18:46.746 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000075.
2020-09-03 14:18:46.746 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:46.746 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:46.746 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:46.749 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:18:46.755 23290-23389/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:18:46.766 23290-23389/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:18:46.770 23290-23389/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:18:46.771 23290-23389/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:18:46.771 23290-23389/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:18:46.771 23290-23389/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:18:46.772 23290-23389/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:18:46.849 23290-23389/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:18:46.851 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:18:46.852 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:18:46.852 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:18:46.852 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:18:46.853 23290-23395/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:18:46.885 23290-23396/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:18:46.885 23290-23396/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:18:47.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:47.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000007f.
2020-09-03 14:18:47.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000069.
2020-09-03 14:18:47.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000007d.
2020-09-03 14:18:47.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000006d.
2020-09-03 14:18:47.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000077.
2020-09-03 14:18:47.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000075.
2020-09-03 14:18:47.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:47.244 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:47.244 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:47.487 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:18:47.487 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:18:47.487 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:18:47.487 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:18:47.487 23290-23396/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:18:47.487 23290-23396/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:18:47.487 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:18:47.488 23290-23394/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:18:47.488 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:18:47.488 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:18:47.488 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:18:47.488 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:18:47.488 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:111857 mOffset:1182 mMdatEndOffset:110057 diff:1800
2020-09-03 14:18:47.492 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:18:47.492 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:32 #2:44 #3:47 #4:137 #5:150
2020-09-03 14:18:47.492 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:18:47.492 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:18:47.492 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:18:47.526 23290-23290/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000077.
2020-09-03 14:18:47.741 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:47.741 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000007f.
2020-09-03 14:18:47.741 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000069.
2020-09-03 14:18:47.741 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000007d.
2020-09-03 14:18:47.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000006d.
2020-09-03 14:18:47.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000077.
2020-09-03 14:18:47.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000075.
2020-09-03 14:18:47.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:47.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:47.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:48.241 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:48.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:48.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:48.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:48.300 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:18:48.302 23290-23507/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:18:48.307 23290-23507/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:18:48.310 23290-23507/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:18:48.311 23290-23507/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:18:48.311 23290-23507/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:18:48.311 23290-23507/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:18:48.312 23290-23507/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:18:48.346 23290-23507/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:18:48.349 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:18:48.349 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:18:48.349 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:18:48.350 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:18:48.350 23290-23511/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:18:48.377 23290-23512/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:18:48.377 23290-23512/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:18:48.388 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:18:48.389 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:18:48.389 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:18:48.389 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:18:48.389 23290-23512/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:18:48.389 23290-23512/com.testsmartlookbug W/MPEG4Writer: 0-duration samples found: 1
2020-09-03 14:18:48.390 23290-23512/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (1/0) buffers and encoded 1 frames. - Video
2020-09-03 14:18:48.390 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:18:48.391 23290-23510/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:18:48.392 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:18:48.392 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:18:48.392 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:18:48.392 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:18:48.392 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:29521 mOffset:822 mMdatEndOffset:28101 diff:1420
2020-09-03 14:18:48.394 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:18:48.394 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:26 #2:29 #3:30 #4:30 #5:31
2020-09-03 14:18:48.394 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:18:48.394 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:18:48.394 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:18:48.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:48.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:48.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:48.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:49.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:49.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:49.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:49.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:49.263 23290-23306/com.testsmartlookbug W/System: A resource failed to call release. 
2020-09-03 14:18:49.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:49.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:49.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:49.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:50.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:50.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:50.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:50.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:50.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:50.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:50.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:50.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:51.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:51.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:51.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:51.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:51.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:51.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:51.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:51.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:52.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:52.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:52.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:52.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:52.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:52.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:52.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:52.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:53.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:53.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:53.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:53.243 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:53.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:53.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:53.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:53.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:54.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:54.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:54.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:54.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:54.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:54.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:54.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:54.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:55.245 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:55.245 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:55.245 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:55.245 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:55.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:55.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:55.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:55.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:56.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:56.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:56.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:56.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:56.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:56.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:56.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:56.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:57.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:57.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:57.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:57.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:57.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:57.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:57.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:57.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:58.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:58.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:58.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:58.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:58.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:58.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:58.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:58.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:59.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:59.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:59.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:59.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:18:59.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:18:59.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:18:59.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:18:59.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:00.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:00.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:00.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:00.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:00.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:00.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:00.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:00.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:01.241 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:01.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:01.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:01.242 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:01.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:01.742 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:01.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:01.743 23290-23385/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:01.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:01.782 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:01.782 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:01.782 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:01.783 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:19:01.786 23290-23551/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:19:01.792 23290-23551/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:19:01.794 23290-23551/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:19:01.796 23290-23551/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:19:01.796 23290-23551/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:19:01.796 23290-23551/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:19:01.797 23290-23551/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:19:01.831 23290-23551/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:19:01.833 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:19:01.833 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:19:01.833 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:19:01.833 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:19:01.834 23290-23556/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:19:01.856 23290-23557/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:19:01.856 23290-23557/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:19:02.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:02.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:02.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:02.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:02.435 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:19:02.435 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:19:02.435 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:19:02.435 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:19:02.435 23290-23557/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:19:02.435 23290-23557/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:19:02.435 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:19:02.436 23290-23555/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:19:02.436 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:19:02.436 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:19:02.436 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:19:02.436 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:19:02.436 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:40037 mOffset:1190 mMdatEndOffset:38229 diff:1808
2020-09-03 14:19:02.439 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:19:02.439 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:33 #2:40 #3:63 #4:64 #5:187
2020-09-03 14:19:02.439 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:19:02.439 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:19:02.439 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:19:02.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:02.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:02.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:02.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:03.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:03.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:03.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:03.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:03.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:03.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:03.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:03.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:04.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:04.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:04.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:04.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:04.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:04.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:04.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:04.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:05.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:05.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:05.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:05.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:05.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:05.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:05.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:05.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:06.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:06.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:06.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:06.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:06.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:06.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:06.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:06.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:07.282 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:07.282 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:07.282 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:07.282 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:07.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:07.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:07.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:07.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:08.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:08.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:08.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:08.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:08.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:08.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:08.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:08.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:09.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:09.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:09.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:09.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:09.780 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:09.782 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:09.782 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:09.782 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:10.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:10.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:10.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:10.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:10.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:10.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:10.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:10.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:11.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:11.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:11.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:11.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:11.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:11.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:11.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:11.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:12.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:12.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:12.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:12.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:12.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:12.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:12.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:12.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:13.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:13.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:13.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:13.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:13.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:13.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:13.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:13.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:14.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:14.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:14.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:14.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:14.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:14.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:14.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:14.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:15.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:15.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:15.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:15.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:15.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:15.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:15.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:15.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:16.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:16.280 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:16.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:16.281 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:16.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:16.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:16.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:16.781 23290-23547/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:16.836 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:16.836 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:16.836 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:16.837 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:16.838 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:19:16.843 23290-23706/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:19:16.850 23290-23706/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:19:16.853 23290-23706/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:19:16.854 23290-23706/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:19:16.854 23290-23706/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:19:16.854 23290-23706/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:19:16.856 23290-23706/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:19:16.904 23290-23706/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:19:16.906 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:19:16.906 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:19:16.907 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:19:16.907 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:19:16.908 23290-23711/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:19:16.937 23290-23712/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:19:16.937 23290-23712/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:19:17.338 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:17.338 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:17.338 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:17.338 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:17.536 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:19:17.536 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:19:17.536 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:19:17.536 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:19:17.536 23290-23712/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:19:17.536 23290-23712/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:19:17.536 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:19:17.537 23290-23710/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:19:17.537 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:19:17.537 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:19:17.537 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:19:17.537 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:19:17.537 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33148 mOffset:1174 mMdatEndOffset:31356 diff:1792
2020-09-03 14:19:17.541 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:19:17.541 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:64 #2:111 #3:169 #4:170 #5:226
2020-09-03 14:19:17.541 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:19:17.541 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:19:17.541 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:19:17.836 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:17.837 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:17.837 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:17.837 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:18.337 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:18.337 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:18.337 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:18.337 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:18.836 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:18.837 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:18.837 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:18.837 23290-23703/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:19.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:19.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:19.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:19.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:19.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:19.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:19.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:19.838 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:20.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:20.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:20.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:20.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:20.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:20.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:20.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:20.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:21.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:21.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:21.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:21.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:21.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:21.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:21.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:21.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:22.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:22.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:22.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:22.338 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:22.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:22.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:22.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:22.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:23.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:23.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:23.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:23.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:23.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:23.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:23.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:23.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:24.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:24.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:24.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:24.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:24.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:24.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:24.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:24.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:25.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:25.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:25.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:25.338 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:25.836 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:25.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:25.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:25.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:26.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:26.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:26.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:26.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:26.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:26.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:26.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:26.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:27.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:27.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:27.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:27.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:27.836 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:27.836 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:27.836 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:27.836 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:28.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:28.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:28.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:28.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:28.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:28.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:28.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:28.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:29.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:29.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:29.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:29.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:29.836 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:29.836 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:29.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:29.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:30.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:30.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:30.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:30.336 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:30.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:30.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:30.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:30.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:31.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:31.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:31.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:31.337 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:31.836 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:31.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:31.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:31.837 23290-23709/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:31.883 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:31.883 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:31.883 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:31.883 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:31.883 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:19:31.887 23290-23853/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:19:31.896 23290-23853/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:19:31.899 23290-23853/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:19:31.900 23290-23853/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:19:31.901 23290-23853/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:19:31.901 23290-23853/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:19:31.902 23290-23853/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:19:31.934 23290-23853/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:19:31.935 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:19:31.935 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:19:31.935 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:19:31.936 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:19:31.936 23290-23858/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:19:31.956 23290-23859/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:19:31.956 23290-23859/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:19:32.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:32.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:32.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:32.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:32.504 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:19:32.504 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:19:32.504 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:19:32.504 23290-23859/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:19:32.504 23290-23859/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:19:32.504 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:19:32.504 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:19:32.504 23290-23857/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:19:32.504 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:19:32.505 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:19:32.505 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:19:32.505 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:19:32.505 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33156 mOffset:1182 mMdatEndOffset:31356 diff:1800
2020-09-03 14:19:32.508 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:19:32.508 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:36 #2:46 #3:74 #4:178 #5:326
2020-09-03 14:19:32.508 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:19:32.508 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:19:32.508 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:19:32.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:32.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:32.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:32.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:33.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:33.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:33.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:33.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:33.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:33.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:33.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:33.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:34.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:34.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:34.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:34.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:34.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:34.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:34.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:34.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:35.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:35.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:35.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:35.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:35.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:35.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:35.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:35.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:36.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:36.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:36.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:36.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:36.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:36.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:36.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:36.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:37.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:37.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:37.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:37.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:37.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:37.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:37.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:37.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:38.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:38.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:38.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:38.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:38.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:38.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:38.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:38.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:39.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:39.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:39.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:39.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:39.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:39.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:39.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:39.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:40.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:40.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:40.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:40.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:40.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:40.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:40.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:40.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:41.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:41.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:41.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:41.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:41.885 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:41.885 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:41.885 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:41.885 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:42.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:42.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:42.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:42.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:42.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:42.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:42.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:42.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:43.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:43.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:43.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:43.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:43.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:43.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:43.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:43.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:44.381 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:44.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:44.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:44.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:44.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:44.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:44.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:44.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:45.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:45.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:45.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:45.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:45.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:45.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:45.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:45.882 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:46.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:46.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:46.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:46.382 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:46.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:46.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:46.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:46.881 23290-23850/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:46.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:46.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:46.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:46.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:46.922 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:19:46.926 23290-23999/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:19:46.933 23290-23999/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:19:46.936 23290-23999/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:19:46.937 23290-23999/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:19:46.937 23290-23999/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:19:46.937 23290-23999/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:19:46.938 23290-23999/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:19:46.968 23290-23999/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:19:46.970 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:19:46.970 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:19:46.970 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:19:46.970 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:19:46.971 23290-24004/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:19:46.991 23290-24005/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:19:46.991 23290-24005/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:19:47.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:47.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:47.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:47.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:47.525 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:19:47.525 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:19:47.525 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:19:47.525 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:19:47.525 23290-24005/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:19:47.526 23290-24005/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:19:47.526 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:19:47.526 23290-24003/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:19:47.527 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:19:47.527 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:19:47.528 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:19:47.528 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:19:47.528 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33164 mOffset:1190 mMdatEndOffset:31356 diff:1808
2020-09-03 14:19:47.530 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:19:47.530 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:34 #2:34 #3:37 #4:41 #5:185
2020-09-03 14:19:47.530 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:19:47.530 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:19:47.530 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:19:47.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:47.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:47.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:47.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:48.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:48.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:48.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:48.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:48.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:48.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:48.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:48.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:49.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:49.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:49.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:49.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:49.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:49.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:49.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:49.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:50.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:50.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:50.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:50.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:50.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:50.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:50.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:50.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:51.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:51.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:51.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:51.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:51.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:51.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:51.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:51.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:52.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:52.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:52.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:52.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:52.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:52.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:52.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:52.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:53.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:53.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:53.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:53.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:53.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:53.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:53.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:53.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:54.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:54.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:54.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:54.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:54.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:54.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:54.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:54.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:55.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:55.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:55.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:55.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:55.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:55.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:55.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:55.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:56.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:56.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:56.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:56.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:56.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:56.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:56.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:56.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:57.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:57.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:57.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:57.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:57.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:57.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:57.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:57.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:58.419 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:58.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:58.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:58.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:58.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:58.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:58.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:58.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:59.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:59.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:59.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:59.420 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:19:59.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:19:59.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:19:59.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:19:59.921 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:00.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:00.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:00.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:00.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:00.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:00.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:00.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:00.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:01.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:01.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:01.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:01.421 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:01.919 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:01.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:01.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:01.920 23290-23995/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:01.969 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:01.969 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:01.969 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:01.969 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:01.971 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:20:01.974 23290-24145/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:20:01.981 23290-24145/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:20:01.983 23290-24145/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:20:01.985 23290-24145/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:20:01.985 23290-24145/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:20:01.985 23290-24145/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:20:01.986 23290-24145/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:20:02.020 23290-24145/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:20:02.021 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:20:02.021 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:20:02.022 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:20:02.022 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:20:02.023 23290-24150/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:20:02.043 23290-24151/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:20:02.043 23290-24151/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:20:02.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:02.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:02.468 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:02.468 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:02.675 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:20:02.675 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:20:02.675 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:20:02.675 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:20:02.676 23290-24151/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:20:02.676 23290-24151/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:20:02.676 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:20:02.677 23290-24149/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:20:02.677 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:20:02.677 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:20:02.677 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:20:02.677 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:20:02.677 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33164 mOffset:1190 mMdatEndOffset:31356 diff:1808
2020-09-03 14:20:02.680 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:20:02.680 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:36 #2:36 #3:36 #4:41 #5:188
2020-09-03 14:20:02.680 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:20:02.680 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:20:02.680 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:20:02.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:02.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:02.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:02.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:03.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:03.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:03.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:03.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:03.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:03.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:03.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:03.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:04.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:04.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:04.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:04.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:04.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:04.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:04.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:04.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:05.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:05.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:05.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:05.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:05.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:05.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:05.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:05.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:06.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:06.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:06.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:06.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:06.966 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:06.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:06.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:06.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:07.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:07.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:07.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:07.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:07.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:07.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:07.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:07.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:08.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:08.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:08.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:08.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:08.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:08.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:08.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:08.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:09.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:09.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:09.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:09.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:09.966 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:09.966 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:09.966 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:09.966 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:10.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:10.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:10.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:10.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:10.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:10.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:10.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:10.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:11.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:11.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:11.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:11.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:11.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:11.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:11.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:11.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:12.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:12.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:12.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:12.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:12.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:12.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:12.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:12.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:13.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:13.468 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:13.468 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:13.468 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:13.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:13.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:13.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:13.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:14.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:14.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:14.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:14.466 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:14.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:14.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:14.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:14.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:15.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:15.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:15.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:15.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:15.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:15.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:15.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:15.968 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:16.467 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:16.468 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:16.468 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:16.468 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:16.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:16.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:16.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:16.967 23290-24142/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:17.004 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:20:17.005 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:17.005 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:17.005 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:17.005 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:17.008 23290-24295/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:20:17.015 23290-24295/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:20:17.017 23290-24295/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:20:17.018 23290-24295/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:20:17.019 23290-24295/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:20:17.019 23290-24295/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:20:17.020 23290-24295/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:20:17.051 23290-24295/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:20:17.055 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:20:17.055 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:20:17.055 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:20:17.056 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:20:17.057 23290-24300/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:20:17.079 23290-24301/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:20:17.080 23290-24301/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:20:17.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:17.506 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:17.506 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:17.506 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:17.591 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:20:17.592 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:20:17.592 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:20:17.592 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:20:17.592 23290-24301/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:20:17.592 23290-24301/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:20:17.593 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:20:17.593 23290-24299/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:20:17.593 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:20:17.593 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:20:17.594 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:20:17.594 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:20:17.594 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33148 mOffset:1174 mMdatEndOffset:31356 diff:1792
2020-09-03 14:20:17.596 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:20:17.596 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:55 #2:73 #3:89 #4:185 #5:362
2020-09-03 14:20:17.596 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:20:17.596 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:20:17.596 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:20:18.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:18.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:18.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:18.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:18.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:18.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:18.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:18.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:19.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:19.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:19.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:19.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:19.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:19.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:19.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:19.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:20.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:20.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:20.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:20.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:20.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:20.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:20.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:20.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:21.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:21.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:21.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:21.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:21.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:21.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:21.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:21.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:22.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:22.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:22.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:22.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:22.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:22.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:22.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:22.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:23.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:23.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:23.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:23.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:23.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:23.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:23.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:23.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:24.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:24.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:24.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:24.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:24.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:24.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:24.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:24.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:25.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:25.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:25.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:25.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:25.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:25.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:25.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:25.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:26.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:26.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:26.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:26.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:26.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:26.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:26.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:26.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:27.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:27.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:27.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:27.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:27.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:27.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:27.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:27.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:28.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:28.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:28.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:28.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:28.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:28.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:28.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:28.506 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:29.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:29.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:29.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:29.004 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:29.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:29.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:29.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:29.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:30.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:30.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:30.006 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:30.006 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:30.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:30.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:30.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:30.504 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:31.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:31.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:31.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:31.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:31.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:31.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:31.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:31.505 23290-24292/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:32.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:32.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:32.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:32.005 23290-24298/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:32.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:32.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:32.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:32.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:32.045 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:20:32.048 23290-24441/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:20:32.055 23290-24441/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:20:32.057 23290-24441/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:20:32.058 23290-24441/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:20:32.058 23290-24441/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:20:32.058 23290-24441/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:20:32.059 23290-24441/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:20:32.089 23290-24441/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:20:32.093 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:20:32.093 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:20:32.094 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:20:32.095 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:20:32.096 23290-24446/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:20:32.117 23290-24447/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:20:32.117 23290-24447/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:20:32.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:32.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:32.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:32.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:32.644 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:20:32.644 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:20:32.644 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:20:32.644 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:20:32.644 23290-24447/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:20:32.644 23290-24447/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:20:32.645 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:20:32.645 23290-24445/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:20:32.645 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:20:32.645 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:20:32.645 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:20:32.645 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:20:32.645 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33164 mOffset:1190 mMdatEndOffset:31356 diff:1808
2020-09-03 14:20:32.648 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:20:32.648 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:35 #2:41 #3:45 #4:62 #5:81
2020-09-03 14:20:32.648 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:20:32.648 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:20:32.648 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:20:33.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:33.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:33.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:33.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:33.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:33.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:33.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:33.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:34.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:34.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:34.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:34.044 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:34.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:34.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:34.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:34.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:35.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:35.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:35.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:35.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:35.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:35.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:35.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:35.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:36.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:36.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:36.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:36.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:36.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:36.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:36.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:36.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:37.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:37.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:37.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:37.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:37.543 23290-24444/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:37.543 23290-24444/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:37.543 23290-24444/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:37.543 23290-24444/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:38.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:38.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:38.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:38.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:38.542 23290-24444/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:38.542 23290-24444/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:38.542 23290-24444/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:38.542 23290-24444/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:39.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:39.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:39.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:39.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:39.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:39.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:39.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:39.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:40.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:40.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:40.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:40.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:40.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:40.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:40.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:40.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:41.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:41.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:41.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:41.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:41.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:41.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:41.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:41.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:42.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:42.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:42.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:42.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:42.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:42.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:42.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:42.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:43.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:43.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:43.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:43.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:43.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:43.544 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:43.544 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:43.544 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:44.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:44.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:44.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:44.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:44.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:44.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:44.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:44.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:45.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:45.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:45.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:45.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:45.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:45.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:45.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:45.543 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:46.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:46.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:46.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:46.043 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:46.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:46.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:46.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:46.542 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:47.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:47.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:47.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:47.042 23290-24438/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:47.085 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:20:47.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:47.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:47.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:47.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:47.089 23290-24592/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:20:47.095 23290-24592/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:20:47.098 23290-24592/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:20:47.100 23290-24592/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:20:47.100 23290-24592/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:20:47.100 23290-24592/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:20:47.100 23290-24592/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:20:47.128 23290-24592/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:20:47.129 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:20:47.129 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:20:47.130 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:20:47.130 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:20:47.130 23290-24598/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:20:47.154 23290-24599/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:20:47.154 23290-24599/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:20:47.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:47.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:47.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:47.587 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:47.673 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:20:47.673 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:20:47.673 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:20:47.673 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:20:47.673 23290-24599/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:20:47.673 23290-24599/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:20:47.673 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:20:47.673 23290-24597/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:20:47.674 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:20:47.674 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:20:47.674 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:20:47.674 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:20:47.674 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33148 mOffset:1174 mMdatEndOffset:31356 diff:1792
2020-09-03 14:20:47.676 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:20:47.676 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:55 #2:74 #3:83 #4:87 #5:143
2020-09-03 14:20:47.676 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:20:47.676 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:20:47.676 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:20:48.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:48.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:48.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:48.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:48.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:48.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:48.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:48.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:49.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:49.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:49.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:49.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:49.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:49.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:49.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:49.587 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:50.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:50.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:50.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:50.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:50.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:50.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:50.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:50.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:51.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:51.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:51.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:51.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:51.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:51.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:51.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:51.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:52.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:52.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:52.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:52.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:52.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:52.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:52.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:52.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:53.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:53.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:53.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:53.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:53.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:53.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:53.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:53.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:54.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:54.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:54.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:54.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:54.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:54.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:54.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:54.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:55.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:55.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:55.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:55.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:55.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:55.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:55.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:55.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:56.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:56.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:56.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:56.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:56.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:56.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:56.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:56.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:57.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:57.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:57.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:57.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:57.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:57.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:57.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:57.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:58.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:58.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:58.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:58.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:58.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:58.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:58.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:58.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:59.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:59.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:59.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:59.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:20:59.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:20:59.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:20:59.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:20:59.585 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:00.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:00.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:00.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:00.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:00.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:00.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:00.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:00.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:01.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:01.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:01.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:01.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:01.586 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:01.587 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:01.587 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:01.587 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:02.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:02.085 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:02.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:02.086 23290-24590/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:02.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:02.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:02.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:02.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:02.139 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:21:02.142 23290-24739/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:21:02.145 23290-24739/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:21:02.146 23290-24739/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:21:02.146 23290-24739/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:21:02.146 23290-24739/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:21:02.146 23290-24739/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:21:02.148 23290-24739/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:21:02.185 23290-24739/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:21:02.186 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:21:02.186 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:21:02.186 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:21:02.187 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:21:02.187 23290-24744/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:21:02.211 23290-24745/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:21:02.211 23290-24745/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:21:02.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:02.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:02.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:02.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:02.856 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:21:02.856 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:21:02.856 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:21:02.856 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:21:02.856 23290-24745/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:21:02.856 23290-24745/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:21:02.857 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:21:02.857 23290-24743/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:21:02.857 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:21:02.858 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:21:02.858 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:21:02.858 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:21:02.858 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33156 mOffset:1182 mMdatEndOffset:31356 diff:1800
2020-09-03 14:21:02.860 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:21:02.860 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:24 #2:26 #3:26 #4:27 #5:39
2020-09-03 14:21:02.861 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:21:02.861 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:21:02.861 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:21:03.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:03.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:03.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:03.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:03.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:03.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:03.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:03.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:04.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:04.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:04.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:04.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:04.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:04.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:04.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:04.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:05.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:05.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:05.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:05.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:05.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:05.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:05.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:05.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:06.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:06.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:06.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:06.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:06.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:06.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:06.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:06.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:07.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:07.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:07.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:07.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:07.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:07.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:07.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:07.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:08.139 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:08.140 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:08.140 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:08.140 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:08.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:08.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:08.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:08.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:09.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:09.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:09.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:09.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:09.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:09.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:09.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:09.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:10.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:10.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:10.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:10.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:10.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:10.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:10.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:10.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:11.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:11.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:11.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:11.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:11.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:11.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:11.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:11.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:12.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:12.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:12.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:12.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:12.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:12.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:12.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:12.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:13.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:13.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:13.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:13.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:13.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:13.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:13.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:13.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:14.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:14.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:14.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:14.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:14.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:14.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:14.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:14.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:15.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:15.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:15.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:15.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:15.637 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:15.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:15.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:15.638 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:16.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:16.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:16.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:16.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:16.639 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:16.639 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:16.639 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:16.639 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:17.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:17.137 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:17.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:17.138 23290-24735/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:17.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:17.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:17.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:17.190 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:17.190 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:21:17.193 23290-24890/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:21:17.200 23290-24890/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:21:17.202 23290-24890/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:21:17.204 23290-24890/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:21:17.204 23290-24890/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:21:17.204 23290-24890/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:21:17.206 23290-24890/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:21:17.237 23290-24890/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:21:17.239 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:21:17.239 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:21:17.239 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:21:17.240 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:21:17.240 23290-24895/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:21:17.265 23290-24896/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:21:17.265 23290-24896/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:21:17.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:17.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:17.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:17.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:17.895 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:21:17.895 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:21:17.895 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:21:17.895 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:21:17.895 23290-24896/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:21:17.895 23290-24896/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:21:17.896 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:21:17.896 23290-24894/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:21:17.897 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:21:17.897 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:21:17.897 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:21:17.897 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:21:17.897 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33156 mOffset:1182 mMdatEndOffset:31356 diff:1800
2020-09-03 14:21:17.900 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:21:17.900 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:36 #2:41 #3:42 #4:67 #5:85
2020-09-03 14:21:17.900 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:21:17.900 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:21:17.900 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:21:18.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:18.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:18.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:18.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:18.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:18.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:18.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:18.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:19.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:19.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:19.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:19.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:19.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:19.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:19.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:19.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:20.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:20.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:20.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:20.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:20.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:20.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:20.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:20.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:21.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:21.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:21.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:21.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:21.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:21.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:21.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:21.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:22.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:22.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:22.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:22.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:22.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:22.690 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:22.690 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:22.690 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:23.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:23.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:23.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:23.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:23.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:23.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:23.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:23.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:24.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:24.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:24.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:24.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:24.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:24.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:24.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:24.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:25.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:25.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:25.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:25.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:25.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:25.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:25.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:25.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:26.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:26.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:26.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:26.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:26.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:26.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:26.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:26.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:27.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:27.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:27.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:27.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:27.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:27.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:27.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:27.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:28.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:28.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:28.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:28.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:28.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:28.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:28.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:28.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:29.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:29.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:29.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:29.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:29.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:29.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:29.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:29.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:30.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:30.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:30.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:30.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:30.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:30.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:30.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:30.689 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:31.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:31.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:31.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:31.189 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:31.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:31.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:31.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:31.688 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:32.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:32.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:32.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:32.188 23290-24887/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:32.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:32.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:32.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:32.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:32.226 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:21:32.233 23290-25037/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:21:32.239 23290-25037/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:21:32.241 23290-25037/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:21:32.242 23290-25037/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:21:32.242 23290-25037/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:21:32.242 23290-25037/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:21:32.243 23290-25037/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:21:32.270 23290-25037/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:21:32.272 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:21:32.272 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:21:32.272 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:21:32.273 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:21:32.273 23290-25042/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:21:32.292 23290-25043/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:21:32.292 23290-25043/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:21:32.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:32.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:32.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:32.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:32.835 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:21:32.835 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:21:32.835 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:21:32.835 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:21:32.835 23290-25043/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:21:32.835 23290-25043/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:21:32.835 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:21:32.835 23290-25041/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:21:32.836 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:21:32.836 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:21:32.836 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:21:32.836 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:21:32.836 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33156 mOffset:1182 mMdatEndOffset:31356 diff:1800
2020-09-03 14:21:32.839 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:21:32.839 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:35 #2:36 #3:38 #4:65 #5:71
2020-09-03 14:21:32.839 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:21:32.839 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:21:32.839 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:21:33.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:33.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:33.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:33.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:33.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:33.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:33.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:33.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:34.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:34.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:34.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:34.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:34.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:34.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:34.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:34.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:35.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:35.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:35.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:35.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:35.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:35.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:35.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:35.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:36.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:36.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:36.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:36.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:36.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:36.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:36.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:36.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:37.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:37.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:37.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:37.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:37.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:37.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:37.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:37.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:38.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:38.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:38.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:38.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:38.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:38.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:38.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:38.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:39.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:39.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:39.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:39.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:39.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:39.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:39.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:39.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:40.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:40.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:40.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:40.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:40.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:40.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:40.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:40.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:41.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:41.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:41.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:41.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:41.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:41.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:41.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:41.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:42.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:42.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:42.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:42.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:42.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:42.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:42.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:42.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:43.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:43.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:43.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:43.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:43.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:43.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:43.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:43.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:44.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:44.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:44.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:44.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:44.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:44.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:44.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:44.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:45.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:45.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:45.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:45.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:45.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:45.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:45.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:45.726 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:46.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:46.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:46.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:46.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:46.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:46.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:46.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:46.725 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:47.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:47.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:47.225 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:47.226 23290-25033/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:47.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:47.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:47.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:47.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:47.272 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:21:47.276 23290-25183/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:21:47.283 23290-25183/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:21:47.286 23290-25183/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:21:47.287 23290-25183/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:21:47.287 23290-25183/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:21:47.287 23290-25183/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:21:47.288 23290-25183/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:21:47.317 23290-25183/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:21:47.319 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:21:47.319 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:21:47.319 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:21:47.320 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:21:47.320 23290-25188/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:21:47.342 23290-25189/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:21:47.342 23290-25189/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:21:47.770 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:47.771 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:47.771 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:47.771 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:47.866 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:21:47.866 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:21:47.866 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:21:47.866 23290-25189/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:21:47.866 23290-25189/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:21:47.866 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:21:47.866 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:21:47.867 23290-25187/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:21:47.867 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:21:47.868 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:21:47.868 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:21:47.868 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:21:47.868 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33156 mOffset:1182 mMdatEndOffset:31356 diff:1800
2020-09-03 14:21:47.871 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:21:47.871 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:33 #2:38 #3:59 #4:72 #5:215
2020-09-03 14:21:47.871 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:21:47.871 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:21:47.871 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:21:48.268 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:48.268 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:48.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:48.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:48.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:48.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:48.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:48.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:49.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:49.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:49.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:49.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:49.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:49.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:49.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:49.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:50.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:50.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:50.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:50.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:50.770 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:50.770 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:50.770 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:50.770 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:51.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:51.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:51.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:51.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:51.771 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:51.771 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:51.771 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:51.771 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:52.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:52.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:52.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:52.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:52.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:52.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:52.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:52.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:53.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:53.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:53.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:53.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:53.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:53.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:53.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:53.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:54.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:54.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:54.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:54.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:54.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:54.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:54.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:54.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:55.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:55.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:55.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:55.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:55.770 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:55.770 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:55.770 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:55.770 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:56.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:56.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:56.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:56.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:56.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:56.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:56.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:56.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:57.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:57.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:57.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:57.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:57.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:57.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:57.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:57.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:58.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:58.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:58.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:58.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:58.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:58.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:58.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:58.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:59.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:59.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:59.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:59.270 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:21:59.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:21:59.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:21:59.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:21:59.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:00.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:00.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:00.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:00.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:00.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:00.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:00.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:00.770 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:01.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:01.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:01.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:01.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:01.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:01.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:01.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:01.769 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:02.268 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:02.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:02.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:02.269 23290-25180/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:02.313 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:02.313 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:02.313 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:02.313 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:02.314 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:22:02.317 23290-25329/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:22:02.324 23290-25329/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:22:02.327 23290-25329/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:22:02.328 23290-25329/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:22:02.328 23290-25329/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:22:02.328 23290-25329/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:22:02.329 23290-25329/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:22:02.359 23290-25329/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:22:02.361 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:22:02.361 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:22:02.361 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:22:02.362 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:22:02.362 23290-25334/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:22:02.382 23290-25335/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:22:02.382 23290-25335/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:22:02.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:02.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:02.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:02.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:02.910 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:22:02.910 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:22:02.910 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:22:02.910 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:22:02.910 23290-25335/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:22:02.910 23290-25335/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:22:02.911 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:22:02.911 23290-25333/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:22:02.912 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:22:02.912 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:22:02.912 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:22:02.912 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:22:02.912 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33156 mOffset:1182 mMdatEndOffset:31356 diff:1800
2020-09-03 14:22:02.914 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:22:02.914 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:25 #2:30 #3:36 #4:46 #5:58
2020-09-03 14:22:02.914 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:22:02.914 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:22:02.914 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:22:03.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:03.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:03.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:03.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:03.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:03.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:03.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:03.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:04.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:04.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:04.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:04.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:04.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:04.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:04.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:04.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:05.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:05.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:05.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:05.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:05.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:05.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:05.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:05.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:06.310 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:06.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:06.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:06.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:06.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:06.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:06.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:06.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:07.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:07.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:07.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:07.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:07.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:07.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:07.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:07.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:08.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:08.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:08.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:08.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:08.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:08.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:08.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:08.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:09.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:09.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:09.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:09.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:09.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:09.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:09.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:09.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:10.310 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:10.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:10.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:10.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:10.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:10.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:10.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:10.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:11.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:11.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:11.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:11.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:11.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:11.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:11.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:11.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:12.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:12.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:12.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:12.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:12.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:12.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:12.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:12.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:13.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:13.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:13.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:13.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:13.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:13.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:13.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:13.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:14.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:14.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:14.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:14.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:14.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:14.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:14.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:14.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:15.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:15.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:15.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:15.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:15.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:15.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:15.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:15.812 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:16.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:16.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:16.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:16.312 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:16.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:16.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:16.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:16.811 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:17.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:17.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:17.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:17.311 23290-25325/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:17.354 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:17.354 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:22:17.354 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:17.355 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:17.355 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:17.357 23290-25478/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:22:17.363 23290-25478/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:22:17.366 23290-25478/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:22:17.367 23290-25478/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:22:17.367 23290-25478/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:22:17.367 23290-25478/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:22:17.368 23290-25478/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:22:17.399 23290-25478/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:22:17.401 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:22:17.401 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:22:17.402 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:22:17.402 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:22:17.402 23290-25484/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:22:17.426 23290-25485/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:22:17.426 23290-25485/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:22:17.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:17.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:17.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:17.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:17.982 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:22:17.982 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:22:17.982 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:22:17.982 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:22:17.982 23290-25485/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:22:17.982 23290-25485/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:22:17.982 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:22:17.982 23290-25483/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:22:17.983 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:22:17.983 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:22:17.983 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:22:17.983 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:22:17.983 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33164 mOffset:1190 mMdatEndOffset:31356 diff:1808
2020-09-03 14:22:17.986 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:22:17.986 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:31 #2:32 #3:42 #4:52 #5:56
2020-09-03 14:22:17.986 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:22:17.986 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:22:17.986 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:22:18.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:18.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:18.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:18.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:18.852 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:18.852 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:18.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:18.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:19.352 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:19.352 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:19.352 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:19.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:19.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:19.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:19.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:19.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:20.352 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:20.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:20.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:20.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:20.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:20.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:20.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:20.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:21.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:21.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:21.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:21.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:21.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:21.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:21.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:21.854 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:22.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:22.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:22.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:22.353 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:22.852 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:22.852 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:22.852 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:22.852 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:23.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:23.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:23.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:23.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:23.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:23.854 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:23.854 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:23.854 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:24.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:24.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:24.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:24.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:24.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:24.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:24.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:24.854 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:25.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:25.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:25.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:25.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:25.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:25.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:25.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:25.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:26.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:26.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:26.354 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:26.354 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:26.852 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:26.852 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:26.852 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:26.852 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:27.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:27.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:27.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:27.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:27.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:27.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:27.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:27.853 23290-25475/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:28.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:28.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:28.354 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:28.354 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:28.853 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:28.853 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:28.853 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:28.853 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:29.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:29.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:29.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:29.354 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:29.852 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:29.852 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:29.852 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:29.852 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:30.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:30.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:30.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:30.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:30.854 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:30.854 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:30.854 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:30.854 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:31.352 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:31.352 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:31.352 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:31.352 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:31.853 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:31.853 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:31.853 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:31.853 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:32.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:32.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:32.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:32.353 23290-25482/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:32.400 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:32.400 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:32.400 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:32.400 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:32.402 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:22:32.405 23290-25625/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:22:32.413 23290-25625/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:22:32.415 23290-25625/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:22:32.416 23290-25625/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:22:32.417 23290-25625/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:22:32.417 23290-25625/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:22:32.418 23290-25625/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:22:32.449 23290-25625/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:22:32.451 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:22:32.451 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:22:32.451 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:22:32.451 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:22:32.451 23290-25630/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:22:32.473 23290-25631/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:22:32.473 23290-25631/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:22:32.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:32.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:32.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:32.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:33.018 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:22:33.018 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:22:33.018 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:22:33.018 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:22:33.018 23290-25631/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:22:33.018 23290-25631/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:22:33.019 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:22:33.019 23290-25629/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:22:33.020 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:22:33.020 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:22:33.021 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:22:33.021 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:22:33.021 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33140 mOffset:1166 mMdatEndOffset:31356 diff:1784
2020-09-03 14:22:33.023 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:22:33.024 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:33 #2:34 #3:36 #4:77 #5:207
2020-09-03 14:22:33.024 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:22:33.024 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:22:33.024 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:22:33.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:33.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:33.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:33.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:33.897 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:33.897 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:33.897 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:33.897 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:34.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:34.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:34.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:34.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:34.897 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:34.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:34.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:34.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:35.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:35.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:35.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:35.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:35.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:35.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:35.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:35.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:36.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:36.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:36.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:36.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:36.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:36.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:36.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:36.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:37.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:37.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:37.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:37.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:37.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:37.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:37.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:37.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:38.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:38.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:38.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:38.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:38.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:38.899 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:38.899 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:38.899 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:39.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:39.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:39.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:39.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:39.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:39.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:39.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:39.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:40.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:40.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:40.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:40.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:40.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:40.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:40.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:40.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:41.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:41.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:41.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:41.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:41.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:41.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:41.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:41.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:42.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:42.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:42.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:42.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:42.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:42.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:42.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:42.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:43.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:43.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:43.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:43.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:43.899 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:43.899 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:43.899 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:43.899 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:44.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:44.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:44.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:44.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:44.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:44.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:44.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:44.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:45.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:45.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:45.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:45.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:45.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:45.899 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:45.899 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:45.899 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:46.397 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:46.397 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:46.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:46.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:46.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:46.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:46.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:46.898 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:47.398 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:47.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:47.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:47.399 23290-25622/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:47.451 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:22:47.451 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:47.452 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:47.452 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:47.452 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:47.453 23290-25771/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:22:47.459 23290-25771/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:22:47.461 23290-25771/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:22:47.463 23290-25771/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:22:47.463 23290-25771/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:22:47.463 23290-25771/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:22:47.464 23290-25771/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:22:47.499 23290-25771/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:22:47.501 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:22:47.502 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:22:47.502 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:22:47.502 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:22:47.503 23290-25776/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:22:47.527 23290-25777/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:22:47.527 23290-25777/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:22:47.948 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:47.948 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:47.948 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:47.948 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:48.203 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:22:48.203 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:22:48.204 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:22:48.204 23290-25777/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:22:48.204 23290-25777/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:22:48.204 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:22:48.204 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:22:48.204 23290-25775/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:22:48.205 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:22:48.205 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:22:48.205 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:22:48.205 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:22:48.205 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33164 mOffset:1190 mMdatEndOffset:31356 diff:1808
2020-09-03 14:22:48.207 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:22:48.207 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:31 #2:32 #3:61 #4:64 #5:69
2020-09-03 14:22:48.207 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:22:48.207 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:22:48.207 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:22:48.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:48.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:48.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:48.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:48.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:48.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:48.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:48.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:49.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:49.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:49.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:49.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:49.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:49.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:49.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:49.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:50.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:50.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:50.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:50.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:50.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:50.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:50.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:50.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:51.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:51.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:51.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:51.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:51.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:51.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:51.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:51.950 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:52.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:52.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:52.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:52.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:52.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:52.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:52.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:52.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:53.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:53.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:53.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:53.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:53.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:53.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:53.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:53.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:54.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:54.450 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:54.450 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:54.450 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:54.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:54.950 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:54.950 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:54.950 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:55.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:55.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:55.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:55.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:55.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:55.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:55.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:55.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:56.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:56.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:56.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:56.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:56.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:56.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:56.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:56.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:57.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:57.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:57.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:57.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:57.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:57.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:57.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:57.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:58.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:58.450 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:58.450 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:58.450 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:58.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:58.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:58.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:58.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:59.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:59.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:59.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:59.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:22:59.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:22:59.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:22:59.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:22:59.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:00.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:00.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:00.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:00.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:00.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:00.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:00.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:00.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:01.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:01.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:01.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:01.450 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:01.949 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:01.950 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:01.950 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:01.950 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:02.448 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:02.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:02.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:02.449 23290-25768/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:02.496 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:02.496 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:02.496 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:02.496 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:02.496 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:23:02.500 23290-25918/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:23:02.507 23290-25918/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:23:02.511 23290-25918/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:23:02.513 23290-25918/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:23:02.514 23290-25918/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:23:02.514 23290-25918/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:23:02.515 23290-25918/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:23:02.545 23290-25918/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:23:02.547 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:23:02.547 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:23:02.548 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:23:02.548 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:23:02.548 23290-25923/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:23:02.570 23290-25924/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:23:02.570 23290-25924/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:23:02.994 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:02.994 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:02.994 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:02.994 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:03.115 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:23:03.115 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:23:03.115 23290-25924/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:23:03.115 23290-25924/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:23:03.115 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:23:03.115 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:23:03.116 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:23:03.116 23290-25922/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:23:03.116 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:23:03.116 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:23:03.118 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:23:03.118 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:23:03.118 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33164 mOffset:1190 mMdatEndOffset:31356 diff:1808
2020-09-03 14:23:03.120 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:23:03.120 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:52 #2:60 #3:74 #4:76 #5:130
2020-09-03 14:23:03.120 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:23:03.120 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:23:03.120 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:23:03.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:03.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:03.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:03.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:03.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:03.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:03.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:03.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:04.493 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:04.493 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:04.493 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:04.493 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:04.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:04.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:04.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:04.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:05.493 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:05.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:05.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:05.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:05.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:05.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:05.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:05.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:06.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:06.495 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:06.495 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:06.495 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:06.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:06.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:06.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:06.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:07.493 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:07.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:07.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:07.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:07.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:07.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:07.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:07.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:08.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:08.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:08.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:08.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:08.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:08.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:08.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:08.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:09.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:09.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:09.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:09.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:09.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:09.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:09.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:09.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:10.493 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:10.493 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:10.493 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:10.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:10.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:10.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:10.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:10.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:11.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:11.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:11.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:11.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:11.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:11.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:11.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:11.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:12.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:12.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:12.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:12.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:12.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:12.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:12.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:12.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:13.493 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:13.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:13.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:13.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:13.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:13.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:13.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:13.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:14.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:14.495 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:14.495 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:14.495 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:14.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:14.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:14.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:14.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:15.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:15.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:15.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:15.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:15.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:15.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:15.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:15.995 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:16.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:16.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:16.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:16.494 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:16.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:16.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:16.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:16.994 23290-25921/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:17.494 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:17.494 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:17.494 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:17.494 23290-25915/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:17.534 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:23:17.535 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:17.535 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:17.535 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:17.535 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:17.537 23290-26068/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:23:17.543 23290-26068/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:23:17.546 23290-26068/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:23:17.548 23290-26068/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:23:17.548 23290-26068/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:23:17.548 23290-26068/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:23:17.550 23290-26068/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:23:17.584 23290-26068/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:23:17.585 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:23:17.585 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:23:17.586 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:23:17.586 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:23:17.586 23290-26073/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:23:17.607 23290-26074/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:23:17.607 23290-26074/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:23:18.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:18.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:18.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:18.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:18.135 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:23:18.135 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:23:18.135 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:23:18.135 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:23:18.135 23290-26074/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:23:18.135 23290-26074/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:23:18.136 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:23:18.136 23290-26072/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:23:18.137 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:23:18.137 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:23:18.137 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:23:18.137 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:23:18.137 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33164 mOffset:1190 mMdatEndOffset:31356 diff:1808
2020-09-03 14:23:18.139 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:23:18.139 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:43 #2:49 #3:59 #4:62 #5:64
2020-09-03 14:23:18.139 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:23:18.139 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:23:18.139 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:23:18.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:18.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:18.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:18.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:19.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:19.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:19.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:19.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:19.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:19.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:19.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:19.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:20.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:20.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:20.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:20.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:20.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:20.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:20.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:20.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:21.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:21.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:21.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:21.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:21.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:21.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:21.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:21.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:22.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:22.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:22.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:22.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:22.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:22.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:22.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:22.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:23.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:23.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:23.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:23.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:23.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:23.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:23.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:23.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:24.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:24.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:24.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:24.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:24.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:24.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:24.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:24.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:25.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:25.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:25.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:25.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:25.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:25.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:25.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:25.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:26.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:26.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:26.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:26.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:26.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:26.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:26.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:26.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:27.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:27.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:27.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:27.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:27.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:27.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:27.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:27.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:28.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:28.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:28.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:28.033 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:28.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:28.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:28.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:28.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:29.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:29.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:29.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:29.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:29.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:29.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:29.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:29.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:30.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:30.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:30.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:30.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:30.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:30.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:30.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:30.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:31.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:31.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:31.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:31.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:31.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:31.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:31.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:31.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:32.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:32.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:32.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:32.032 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:32.532 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:32.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:32.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:32.533 23290-26065/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:32.578 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:23:32.581 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:32.581 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:32.581 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:32.581 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:32.581 23290-26213/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:23:32.588 23290-26213/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:23:32.591 23290-26213/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:23:32.593 23290-26213/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:23:32.593 23290-26213/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:23:32.593 23290-26213/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:23:32.594 23290-26213/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:23:32.624 23290-26213/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:23:32.626 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:23:32.626 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:23:32.626 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:23:32.626 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:23:32.627 23290-26219/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:23:32.646 23290-26220/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:23:32.646 23290-26220/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:23:33.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:33.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:33.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:33.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:33.184 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:23:33.184 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:23:33.184 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:23:33.184 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:23:33.184 23290-26220/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:23:33.184 23290-26220/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:23:33.185 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:23:33.185 23290-26218/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:23:33.186 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:23:33.186 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:23:33.186 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:23:33.186 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:23:33.186 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33148 mOffset:1174 mMdatEndOffset:31356 diff:1792
2020-09-03 14:23:33.188 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:23:33.188 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:27 #2:33 #3:38 #4:54 #5:599
2020-09-03 14:23:33.188 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:23:33.188 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:23:33.188 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:23:33.578 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:33.578 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:33.578 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:33.578 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:34.077 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:34.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:34.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:34.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:34.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:34.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:34.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:34.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:35.077 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:35.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:35.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:35.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:35.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:35.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:35.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:35.579 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:36.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:36.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:36.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:36.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:36.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:36.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:36.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:36.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:37.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:37.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:37.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:37.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:37.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:37.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:37.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:37.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:38.077 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:38.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:38.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:38.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:38.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:38.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:38.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:38.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:39.077 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:39.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:39.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:39.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:39.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:39.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:39.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:39.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:40.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:40.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:40.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:40.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:40.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:40.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:40.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:40.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:41.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:41.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:41.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:41.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:41.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:41.579 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:41.579 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:41.579 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:42.077 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:42.077 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:42.077 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:42.077 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:42.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:42.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:42.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:42.577 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:43.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:43.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:43.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:43.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:43.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:43.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:43.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:43.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:44.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:44.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:44.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:44.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:44.579 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:44.579 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:44.579 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:44.579 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:45.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:45.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:45.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:45.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:45.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:45.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:45.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:45.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:46.077 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:46.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:46.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:46.078 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:46.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:46.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:46.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:46.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:47.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:47.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:47.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:47.079 23290-26210/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:47.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:47.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:47.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:47.578 23290-26217/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:47.631 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:23:47.633 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:47.633 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:47.633 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:47.633 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:47.633 23290-26359/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:23:47.637 23290-26359/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:23:47.638 23290-26359/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:23:47.638 23290-26359/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:23:47.638 23290-26359/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:23:47.638 23290-26359/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:23:47.638 23290-26359/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:23:47.668 23290-26359/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:23:47.670 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:23:47.670 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:23:47.671 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:23:47.671 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:23:47.672 23290-26364/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:23:47.694 23290-26365/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:23:47.694 23290-26365/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:23:48.128 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:48.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:48.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:48.130 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:48.411 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:23:48.411 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:23:48.411 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:23:48.411 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:23:48.411 23290-26365/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:23:48.412 23290-26365/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:23:48.412 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:23:48.412 23290-26363/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:23:48.413 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:23:48.413 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:23:48.413 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:23:48.413 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:23:48.413 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33164 mOffset:1190 mMdatEndOffset:31356 diff:1808
2020-09-03 14:23:48.416 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:23:48.416 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:44 #2:52 #3:57 #4:85 #5:195
2020-09-03 14:23:48.416 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:23:48.416 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:23:48.416 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:23:48.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:48.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:48.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:48.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:49.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:49.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:49.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:49.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:49.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:49.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:49.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:49.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:50.128 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:50.128 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:50.128 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:50.128 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:50.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:50.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:50.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:50.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:51.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:51.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:51.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:51.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:51.628 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:51.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:51.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:51.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:52.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:52.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:52.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:52.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:52.628 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:52.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:52.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:52.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:53.128 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:53.128 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:53.128 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:53.128 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:53.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:53.630 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:53.630 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:53.630 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:54.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:54.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:54.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:54.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:54.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:54.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:54.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:54.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:55.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:55.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:55.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:55.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:55.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:55.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:55.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:55.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:56.130 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:56.130 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:56.130 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:56.130 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:56.630 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:56.630 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:56.630 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:56.631 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:57.128 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:57.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:57.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:57.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:57.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:57.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:57.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:57.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:58.131 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:58.131 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:58.131 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:58.131 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:58.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:58.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:58.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:58.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:59.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:59.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:59.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:59.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:23:59.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:23:59.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:23:59.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:23:59.630 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:00.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:00.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:00.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:00.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:00.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:00.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:00.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:00.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:01.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:01.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:01.130 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:01.130 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:01.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:01.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:01.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:01.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:02.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:02.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:02.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:02.129 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:02.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:02.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:02.629 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:02.630 23290-26357/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:02.678 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:24:02.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:02.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:02.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:02.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:02.682 23290-26506/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:24:02.688 23290-26506/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:24:02.691 23290-26506/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:24:02.693 23290-26506/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:24:02.693 23290-26506/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:24:02.693 23290-26506/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:24:02.694 23290-26506/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:24:02.725 23290-26506/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:24:02.727 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:24:02.727 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:24:02.728 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:24:02.728 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:24:02.729 23290-26511/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:24:02.752 23290-26512/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:24:02.752 23290-26512/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:24:03.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:03.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:03.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:03.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:03.292 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:24:03.292 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:24:03.292 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:24:03.292 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:24:03.292 23290-26512/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:24:03.292 23290-26512/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:24:03.292 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:24:03.292 23290-26510/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:24:03.293 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:24:03.293 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:24:03.293 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:24:03.293 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:24:03.293 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33164 mOffset:1190 mMdatEndOffset:31356 diff:1808
2020-09-03 14:24:03.296 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:24:03.296 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:34 #2:37 #3:37 #4:132 #5:159
2020-09-03 14:24:03.296 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:24:03.296 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:24:03.296 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:24:03.677 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:03.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:03.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:03.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:04.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:04.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:04.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:04.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:04.677 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:04.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:04.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:04.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:05.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:05.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:05.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:05.178 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:05.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:05.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:05.678 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:05.679 23290-26503/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:06.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:06.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:06.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:06.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:06.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:06.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:06.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:06.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:07.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:07.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:07.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:07.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:07.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:07.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:07.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:07.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:08.179 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:08.179 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:08.179 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:08.179 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:08.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:08.679 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:08.679 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:08.679 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:09.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:09.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:09.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:09.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:09.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:09.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:09.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:09.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:10.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:10.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:10.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:10.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:10.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:10.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:10.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:10.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:11.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:11.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:11.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:11.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:11.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:11.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:11.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:11.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:12.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:12.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:12.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:12.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:12.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:12.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:12.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:12.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:13.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:13.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:13.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:13.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:13.679 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:13.679 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:13.679 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:13.679 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:14.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:14.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:14.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:14.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:14.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:14.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:14.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:14.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:15.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:15.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:15.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:15.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:15.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:15.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:15.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:15.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:16.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:16.178 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:16.179 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:16.179 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:16.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:16.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:16.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:16.678 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:17.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:17.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:17.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:17.177 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:17.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:17.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:17.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:17.677 23290-26509/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:17.730 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:17.730 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:17.730 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:17.730 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:17.731 23290-23384/com.testsmartlookbug D/MPEG4Writer: PreAllocation enabled
2020-09-03 14:24:17.735 23290-26656/com.testsmartlookbug I/OMXClient: IOmx service obtained
2020-09-03 14:24:17.742 23290-26656/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:24:17.745 23290-26656/com.testsmartlookbug I/ACodec: setupAVCEncoderParameters with [profile: Baseline] [level: Level41]
2020-09-03 14:24:17.746 23290-26656/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode color aspects. Ignoring.
2020-09-03 14:24:17.746 23290-26656/com.testsmartlookbug I/ACodec: [OMX.google.h264.encoder] cannot encode HDR static metadata. Ignoring.
2020-09-03 14:24:17.746 23290-26656/com.testsmartlookbug I/ACodec: setupVideoEncoder succeeded
2020-09-03 14:24:17.747 23290-26656/com.testsmartlookbug W/OMXUtils: do not know color format 0x7f000789 = 2130708361
2020-09-03 14:24:17.777 23290-26656/com.testsmartlookbug D/ACodec: dataspace changed to 0x10c40000 (R:2(Limited), P:4(BT601_6_525), M:3(BT601_6), T:3(SMPTE170M)) (R:2(Limited), S:4(BT601_525), T:3(SMPTE_170M))
2020-09-03 14:24:17.779 23290-23384/com.testsmartlookbug D/MPEG4Writer: fpathconf _PC_FILESIZEBITS:64
2020-09-03 14:24:17.779 23290-23384/com.testsmartlookbug D/MPEG4Writer: File size limit set to 4503599627370495 bytes implicitly
2020-09-03 14:24:17.780 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper Started
2020-09-03 14:24:17.780 23290-23384/com.testsmartlookbug I/MPEG4Writer: limits: 4503599627370495/0 bytes/us, bit rate: -1 bps and the estimated moov size 3192 bytes
2020-09-03 14:24:17.780 23290-26661/com.testsmartlookbug D/MPEG4Writer: kWhatNoIOErrorSoFar
2020-09-03 14:24:17.807 23290-26662/com.testsmartlookbug I/MPEG4Writer: setStartTimestampUs: 0
2020-09-03 14:24:17.807 23290-26662/com.testsmartlookbug I/MPEG4Writer: Earliest track starting time: 0
2020-09-03 14:24:18.229 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:18.229 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:18.229 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:18.230 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:18.387 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:24:18.387 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:24:18.387 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopping
2020-09-03 14:24:18.387 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track source stopped
2020-09-03 14:24:18.387 23290-26662/com.testsmartlookbug V/MediaWriter: Track event err/info msg:101, trackId:1, type:1000,val:-1011
2020-09-03 14:24:18.387 23290-26662/com.testsmartlookbug I/MPEG4Writer: Received total/0-length (33/0) buffers and encoded 33 frames. - Video
2020-09-03 14:24:18.387 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopped. Status:0. Stop source
2020-09-03 14:24:18.388 23290-26660/com.testsmartlookbug D/MPEG4Writer: 0 chunks are written in the last batch
2020-09-03 14:24:18.388 23290-23384/com.testsmartlookbug D/MPEG4Writer: WriterThread stopped. Status:0
2020-09-03 14:24:18.388 23290-23384/com.testsmartlookbug I/MPEG4Writer: Adjust the moov start time from 0 us -> 0 us
2020-09-03 14:24:18.388 23290-23384/com.testsmartlookbug I/MPEG4Writer: MOOV atom was written to the file
2020-09-03 14:24:18.388 23290-23384/com.testsmartlookbug D/MPEG4Writer: release()
2020-09-03 14:24:18.388 23290-23384/com.testsmartlookbug D/MPEG4Writer: ftruncate mPreAllocateFileEndOffset:33164 mOffset:1190 mMdatEndOffset:31356 diff:1808
2020-09-03 14:24:18.391 23290-23384/com.testsmartlookbug D/MPEG4Writer: MP4WtrCtrlHlpLooper stopped
2020-09-03 14:24:18.391 23290-23384/com.testsmartlookbug D/MPEG4Writer: Top 5 write durations(microseconds): #1:29 #2:40 #3:42 #4:51 #5:250
2020-09-03 14:24:18.391 23290-23384/com.testsmartlookbug D/MPEG4Writer: reset()
2020-09-03 14:24:18.391 23290-23384/com.testsmartlookbug D/MPEG4Writer: Video track stopping. Stop source
2020-09-03 14:24:18.391 23290-23384/com.testsmartlookbug E/MPEG4Writer: Stop() called but track is not started or stopped
2020-09-03 14:24:18.729 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:18.730 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:18.730 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:18.730 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:19.229 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:19.229 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:19.229 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:19.229 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:19.728 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:19.728 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:19.728 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:19.728 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.
2020-09-03 14:24:20.228 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000017.
2020-09-03 14:24:20.228 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000013.
2020-09-03 14:24:20.228 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x00000011.
2020-09-03 14:24:20.228 23290-26653/com.testsmartlookbug E/estsmartlookbu: Invalid ID 0x0000000f.

```
