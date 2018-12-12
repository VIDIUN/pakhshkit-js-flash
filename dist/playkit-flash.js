!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("playkit-js")):"function"==typeof define&&define.amd?define(["playkit-js"],t):"object"==typeof exports?exports.flash=t(require("playkit-js")):(e.playkit=e.playkit||{},e.playkit.flash=t(e.KalturaPlayer.core))}(this,function(e){return function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,i){t.exports=e},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NAME=t.VERSION=t.Engine=void 0;var n=i(0),a=i(2);t.Engine=a.Flash,t.VERSION="1.2.1",t.NAME="playkit-js-flash",a.Flash.isSupported()&&(0,n.registerEngine)(a.Flash.id,a.Flash)},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Flash=void 0;var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=i(0),l=i(3),c=function(e){function t(e,i){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n._el=s.Utils.Dom.createElement("div"),n._init(e,i),n}return u(t,e),o(t,null,[{key:"createEngine",value:function(e,t){return new this(e,t)}},{key:"canPlaySource",value:function(e,i){return!(!e||!e.mimetype)&&("string"==typeof e.mimetype&&t._hlsMimeTypes.includes(e.mimetype.toLowerCase()))}},{key:"prepareVideoElement",value:function(){}},{key:"isSupported",value:function(){var e="0,0,0";try{e=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(t){try{window.navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(e=(window.navigator.plugins["Shockwave Flash 2.0"]||window.navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(e){}}return parseInt(e.split(",")[0])>=10}},{key:"runCapabilities",value:function(){}},{key:"getCapabilities",value:function(){return Promise.resolve(n({},t.id,{autoplay:!0,mutedAutoPlay:!0}))}}]),o(t,[{key:"hideTextTrack",value:function(){}},{key:"_init",value:function(e,t){this._eventManager=new s.EventManager,this._api=new l.FlashHLSAdapter(e,t,this._el),this._api.attach(),this._addBindings(),this._srcToLoad=e.url}},{key:"reset",value:function(){this._api&&this._api.reset(),this._src=null,this._volume=null,this._volumeBeforeMute=null,this._srcToLoad=null}},{key:"restore",value:function(e,t){this.destroy(),this._init(e,t)}},{key:"destroy",value:function(){this._api&&(this._api.destroy(),this._eventManager.destroy(),this.reset())}},{key:"_addBindings",value:function(){var e=this;if(this._api){[s.EventType.ABR_MODE_CHANGED,s.EventType.TRACKS_CHANGED,s.EventType.ERROR,s.EventType.PLAYING,s.EventType.TIME_UPDATE,s.EventType.PAUSE,s.EventType.LOADED_METADATA,s.EventType.LOADED_DATA,s.EventType.PLAY,s.EventType.VOLUME_CHANGE,s.EventType.WAITING,s.EventType.SEEKING,s.EventType.SEEKED,s.EventType.ENDED,s.EventType.VIDEO_TRACK_CHANGED,s.EventType.AUDIO_TRACK_CHANGED].forEach(function(t){e._eventManager.listen(e._api,t,function(t){return e.dispatchEvent(t)})})}else t._logger.warn("Unable to attach flash - api is missing")}},{key:"getVideoElement",value:function(){return this._el}},{key:"selectAudioTrack",value:function(e){this._api&&this._api.selectAudioTrack(e)}},{key:"selectVideoTrack",value:function(e){this._api&&this._api.selectVideoTrack(e)}},{key:"enableAdaptiveBitrate",value:function(){this._api&&this._api.setABR()}},{key:"isAdaptiveBitrateEnabled",value:function(){var e=!1;return this._api&&(e=this._api.isABR()),e}},{key:"load",value:function(e){return this._api?(this._src=this._srcToLoad,this._loadPromise=this._api.load(e),this._loadPromise):(t._logger.warn("Missing API - Flash is not ready"),Promise.reject("Flash is not ready"))}},{key:"play",value:function(){var e=this;this._loadPromise.then(function(){e._api&&e._api.play()})}},{key:"pause",value:function(){this._api&&this._api.pause()}},{key:"isLive",value:function(){return!1}},{key:"getStartTimeOfDvrWindow",value:function(){return 0}},{key:"seekToLiveEdge",value:function(){this.currentTime=this.duration-1}},{key:"playbackRates",get:function(){return[1]}},{key:"playbackRate",set:function(e){1!=e&&t._logger.debug("This engine doesnt support playback rate <> 1")},get:function(){return 1}},{key:"defaultPlaybackRate",get:function(){return 1}},{key:"id",get:function(){return t.id}},{key:"src",set:function(e){this._src=e},get:function(){return this._src?this._src:""}},{key:"currentTime",get:function(){return this._api&&this._api.currentTime?this._api.currentTime:0},set:function(e){this._api&&this._api.seek(e)}},{key:"duration",get:function(){var e=0;return this._api&&(e=this._api.duration?this._api.duration:this._api.getDuration()),e}},{key:"volume",set:function(e){this._muted?this._volumeBeforeMute=e:(this._volume=e,this._api&&this._api.volume(e))},get:function(){return this._volume||0}},{key:"paused",get:function(){return!this._api||this._api.paused}},{key:"seeking",get:function(){return!!this._api&&this._api.seeking}},{key:"seekable",get:function(){return this.buffered}},{key:"played",get:function(){var e=this;return{length:1,start:function(){return 0},end:function(){return e._api?e._api.watched:0}}}},{key:"buffered",get:function(){var e=0,t=0,i=0;if(this._api){var n=this._api;t=n.getBackBufferLength(),e=n.getBufferLength(),i=n.currentTime?n.currentTime:0}return{length:1,start:function(){return i-t},end:function(){return i+e}}}},{key:"muted",set:function(e){e?(this.volume=0,this._muted=!0,this._volumeBeforeMute=this.volume):(this._muted=!1,this._volumeBeforeMute?this.volume=this._volumeBeforeMute:this.volume=1)},get:function(){return 0==this.volume}},{key:"defaultMuted",get:function(){return!1}},{key:"ended",get:function(){return!!this._api&&this._api.ended}}]),t}(s.FakeEventTarget);c._hlsMimeTypes=["application/x-mpegurl","application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"],c._logger=(0,s.getLogger)("Flash"),c.id="flash",t.Flash=c},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.FlashHLSAdapter=void 0;var u=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(0),s=i(4),l=i(5),c=function(e){return e&&e.__esModule?e:{default:e}}(l),f=function(e){function t(e,i,r){n(this,t);var u=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));u._firstPlay=!0,u._loadReported=!1,u.paused=!0,u.ended=!1,u.seeking=!1;var s=o.Utils.Object.getPropertyPath(i,"playback.options.flash");return s=o.Utils.Object.mergeDeep(c.default,s),u._config=s,u._src=e,u._el=r,u._apiLoadPromise=new Promise(function(e){u._apiLoadResolve=e}),u}return r(t,e),u(t,null,[{key:"getFlashCode",value:function(e,t,i,n){var a="",r="",u="";return t&&Object.getOwnPropertyNames(t).forEach(function(e){a+=e+"="+t[e]+"&amp;"}),i=o.Utils.Object.mergeDeep({movie:e,flashvars:a,allowScriptAccess:"always",allowNetworking:"all",wmode:"transparent",bgColor:"#0",quality:"autohigh"},i),Object.getOwnPropertyNames(i).forEach(function(e){r+='<param name="'+e+'" value="'+i[e]+'" />'}),n=o.Utils.Object.mergeDeep({data:e,width:"100%",height:"100%"},n),Object.getOwnPropertyNames(n).forEach(function(e){u+=e+'="'+n[e]+'" '}),'<object type="application/x-shockwave-flash" '+u+">"+r+"</object>"}}]),u(t,[{key:"destroy",value:function(){this._el&&this._el.parentNode&&(this._el.innerHTML="")}},{key:"attach",value:function(){var e=this;this._config.flashvars||(this._config.flashvars={}),this._config.flashvars.callback="flashlsCallback",this._el.innerHTML=t.getFlashCode(this._config.swfUrl,this._config.flashvars,this._config.params,this._config.attributes);var i={ready:function(){e._api=new s.FlashAPI(e._el.firstElementChild),null!=e._initialVolume&&e.volume(e._initialVolume),e._config.debug&&(e._api.playerSetLogDebug(!0),e._api.playerSetLogDebug2(!0)),e._apiLoadResolve()},levelLoaded:function(t){e._loadReported||(e._trigger(o.EventType.LOADED_DATA,t),e._trigger(o.EventType.LOADED_METADATA,t),e._loadReported=!0)},complete:function(){e._firstPlay=!0,e.ended=!0,e._trigger(o.EventType.ENDED)},position:function(t){e.paused=!1,e.duration=t.duration,e.buffer=t.buffer,e.watched=t.watched,(e.currentTime!=t.position||e.ended)&&(e.currentTime=t.position,e._trigger(o.EventType.TIME_UPDATE,t))},error:function(t,i,n){var a=new o.Error(o.Error.Severity.CRITICAL,o.Error.Category.MEDIA,o.Error.Code.VIDEO_ERROR,{code:t,extended:i,message:n});e._trigger(o.EventType.ERROR,a)},manifest:function(t,i){var n=e._api.getAudioTrackList(),a=[];if(n)for(var r=0;r<n.length;r++){var u={id:n[r].id,active:n[r].isDefault,label:n[r].title,language:n[r].title,index:r};a.push(new o.AudioTrack(u))}for(var s=[],l=0;l<i.length;l++){var c={active:0===l,bandwidth:i[l].bitrate,width:i[l].width,height:i[l].height,language:"",index:l};s.push(new o.VideoTrack(c))}e._resolveLoad&&(e._resolveLoad({tracks:s.concat(a)}),e._resolveLoad=null),e._trigger(o.EventType.TRACKS_CHANGED,{tracks:s.concat(a)})},seekState:function(t){e._firstPlay||("SEEKING"===t&&(e.seeking=!0,e._trigger(o.EventType.SEEKING),e._trigger(o.EventType.WAITING)),"SEEKED"===t&&(e.seeking=!1,e._trigger(o.EventType.SEEKED)))},state:function(t){switch(t){case"IDLE":return;case"PLAYING":e._trigger(o.EventType.PLAYING),e._firstPlay=!1;break;case"PAUSED_BUFFERING":e._trigger(o.EventType.WAITING);break;case"PAUSED":e._trigger(o.EventType.PAUSE),e.paused=!0}}};return window.flashlsCallback=function(e,t){i[e]&&i[e].apply(null,t)},this._el}},{key:"load",value:function(e){var t=this;return this._loadPromise=new Promise(function(i){t._resolveLoad=i,e&&(t._startTime=e),t._apiLoadPromise.then(function(){t._api.load(t._src.url)})}),this._loadPromise}},{key:"play",value:function(){var e=this;this._apiLoadPromise.then(function(){e._firstPlay?(e.ended=!1,e._api.play(e._startTime?e._startTime:-1)):e._api.resume(),e._trigger(o.EventType.PLAY)})}},{key:"pause",value:function(){this._api&&this._api.pause()}},{key:"seek",value:function(e){this._api&&this._api.seek(e)}},{key:"volume",value:function(e){this._api?(this._api.volume(100*e),this._trigger(o.EventType.VOLUME_CHANGE)):this._initialVolume=e}},{key:"getDuration",value:function(){return this._api?this._api.getDuration():Number.NaN}},{key:"selectAudioTrack",value:function(e){this._api&&(this._api.setAudioTrack(e.id),this._trigger(o.EventType.AUDIO_TRACK_CHANGED,{selectedAudioTrack:e}))}},{key:"selectVideoTrack",value:function(e){this._api&&(this.isABR()&&this._trigger(o.EventType.ABR_MODE_CHANGED,{mode:"manual"}),this._api.setCurrentLevel(e.index),this._trigger(o.EventType.VIDEO_TRACK_CHANGED,{selectedVideoTrack:e}))}},{key:"setABR",value:function(){this._api&&(this._api.setCurrentLevel(-1),this._trigger(o.EventType.ABR_MODE_CHANGED,{mode:"auto"}))}},{key:"isABR",value:function(){return!!this._api&&this._api.getAutoLevel()}},{key:"getBufferLength",value:function(){return this._api?this._api.getbufferLength():0}},{key:"getBackBufferLength",value:function(){return this._api?this._api.getbackBufferLength():0}},{key:"_trigger",value:function(e,t){this.dispatchEvent(new o.FakeEvent(e,t))}},{key:"reset",value:function(){this.paused=!0,this.ended=!1,this.seeking=!1,this.duration=null,this.buffer=null,this.watched=null}}]),t}(o.FakeEventTarget);t.FlashHLSAdapter=f},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(){function e(t){n(this,e),this.flashObject=t}return a(e,[{key:"load",value:function(e){this.flashObject.playerLoad(e)}},{key:"play",value:function(e){this.flashObject.playerPlay(e)}},{key:"pause",value:function(){this.flashObject.playerPause()}},{key:"resume",value:function(){this.flashObject.playerResume()}},{key:"seek",value:function(e){this.flashObject.playerSeek(e)}},{key:"stop",value:function(){this.flashObject.playerStop()}},{key:"volume",value:function(e){this.flashObject.playerVolume(e)}},{key:"setCurrentLevel",value:function(e){this.flashObject.playerSetCurrentLevel(e)}},{key:"setNextLevel",value:function(e){this.flashObject.playerSetNextLevel(e)}},{key:"setLoadLevel",value:function(e){this.flashObject.playerSetLoadLevel(e)}},{key:"setMaxBufferLength",value:function(e){this.flashObject.playerSetmaxBufferLength(e)}},{key:"getPosition",value:function(){return this.flashObject.getPosition()}},{key:"getDuration",value:function(){return this.flashObject.getDuration()}},{key:"getbufferLength",value:function(){return this.flashObject.getbufferLength()}},{key:"getbackBufferLength",value:function(){return this.flashObject.getbackBufferLength()}},{key:"getLowBufferLength",value:function(){return this.flashObject.getlowBufferLength()}},{key:"getMinBufferLength",value:function(){return this.flashObject.getminBufferLength()}},{key:"getMaxBufferLength",value:function(){return this.flashObject.getmaxBufferLength()}},{key:"getLevels",value:function(){return this.flashObject.getLevels()}},{key:"getAutoLevel",value:function(){return this.flashObject.getAutoLevel()}},{key:"getCurrentLevel",value:function(){return this.flashObject.getCurrentLevel()}},{key:"getNextLevel",value:function(){return this.flashObject.getNextLevel()}},{key:"getLoadLevel",value:function(){return this.flashObject.getLoadLevel()}},{key:"getAudioTrackList",value:function(){return this.flashObject.getAudioTrackList()}},{key:"getStats",value:function(){return this.flashObject.getStats()}},{key:"setAudioTrack",value:function(e){this.flashObject.playerSetAudioTrack(e)}},{key:"playerSetLogDebug",value:function(e){this.flashObject.playerSetLogDebug(e)}},{key:"getLogDebug",value:function(){return this.flashObject.getLogDebug()}},{key:"playerSetLogDebug2",value:function(e){this.flashObject.playerSetLogDebug2(e)}},{key:"getLogDebug2",value:function(){return this.flashObject.getLogDebug2()}},{key:"playerSetUseHardwareVideoDecoder",value:function(e){this.flashObject.playerSetUseHardwareVideoDecoder(e)}},{key:"getUseHardwareVideoDecoder",value:function(){return this.flashObject.getUseHardwareVideoDecoder()}},{key:"playerSetflushLiveURLCache",value:function(e){this.flashObject.playerSetflushLiveURLCache(e)}},{key:"getflushLiveURLCache",value:function(){return this.flashObject.getflushLiveURLCache()}},{key:"playerSetJSURLStream",value:function(e){this.flashObject.playerSetJSURLStream(e)}},{key:"getJSURLStream",value:function(){return this.flashObject.getJSURLStream()}},{key:"playerCapLeveltoStage",value:function(e){this.flashObject.playerCapLeveltoStage(e)}},{key:"getCapLeveltoStage",value:function(){return this.flashObject.getCapLeveltoStage()}},{key:"playerSetAutoLevelCapping",value:function(e){this.flashObject.playerSetAutoLevelCapping(e)}},{key:"getAutoLevelCapping",value:function(){return this.flashObject.getAutoLevelCapping()}}]),e}();t.FlashAPI=r},function(e,t){e.exports={swfUrl:"https://cdnapisec.kaltura.com/html5/static/flashhls/v0.4.4.24/flashlsChromeless.swf?inline=1"}}])});
//# sourceMappingURL=playkit-flash.js.map