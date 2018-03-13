(function(window,document,undefined){(function(window,document,undefined){var now=(+new Date());var _id=(now+"").slice(-3);var ua=navigator.userAgent;var $={isBox:/ baiduboxapp\//i.test(ua),isIOS:/(iPhone|iPod|iPad)/.test(ua),isAndroid:/(Android);?[\s\/]+([\d.]+)?/.test(ua),getId:function(){return _id++},emptyArr:[],emptyFn:function(){},cleanObj:{},byId:function(id){return $.isString(id)?document.getElementById(id):id},toArray:function(arrayLike){return $.emptyArr.slice.call(arrayLike)},$:function(selector,context){context=(context&&context.nodeType===1)?context:document;return $.toArray(context.querySelectorAll(selector))}};"Function,String,Array,Number,RegExp".replace(/[^, ]+/g,function(t){$["is"+t]=function(s){return isType(s,t)}});$.isBoolean=function(obj){return obj===true||obj===false};$.isObject=function(obj){return typeof obj==="object"};$.isUndefined=function(obj){return obj===undefined};$.isWindow=function(obj){return obj!=null&&obj==obj.window};$.isPlainObject=function(obj){return $.isObject(obj)&&!$.isWindow(obj)&&Object.getPrototypeOf(obj)==Object.prototype};function isType(obj,type){return $.cleanObj.toString.call(obj).slice(8,-1)===type}function require(id){var mod=modulesMap[id];if(mod){return mod.exports}else{throw"module "+id+" is undefined"}}var modulesMap={};$.define=define;function define(id,factory){var ids=id.split(":");var names=ids.pop().split("/");var root=$;var name,lastName;while(name=names.shift()){if(name==="bdbox"){continue}lastName=name;if(names.length){root=(root[name]=root[name]||{})}}var mod=modulesMap[id]={exports:{}};var ret=$.isFunction(factory)?factory.apply(mod,[require,mod.exports,mod,$]):factory;if(ret){mod.exports=ret}root[lastName]=mod.exports}window.Bdbox=$;window.require=require;window.define=$.define}(window,document));define("common:bdbox/clone",function(require,exports,module,$){var toString=Object.prototype.toString;var map=function(obj,callback,merge){var index=0;for(var key in obj){if(obj.hasOwnProperty(key)){if(merge){callback[key]=obj[key]}else{if(callback(key,obj[key],index++)){break}}}}};var clone=function(source){var ret;switch(toString.call(source)){case"[object Object]":ret={};map(source,function(k,v){ret[k]=clone(v)});break;case"[object Array]":ret=[];source.forEach(function(ele){ret.push(clone(ele))});break;default:ret=source}return ret};module.exports=clone});define("common:bdbox/extend",function(require,exports,module,$){var isPlainObject=$.isPlainObject,isArray=$.isArray,isBoolean=$.isBoolean,isUndefined=$.isUndefined;function extend(target,source,deep){for(var key in source){if(deep&&(isPlainObject(source[key])||isArray(source[key]))){if(isPlainObject(source[key])&&!isPlainObject(target[key])){target[key]={}}if(isArray(source[key])&&!isArray(target[key])){target[key]=[]}extend(target[key],source[key],deep)}else{if(!isUndefined(source[key])){target[key]=source[key]}}}}module.exports=function(target){var deep,args=$.emptyArr.slice.call(arguments,1);if(isBoolean(target)){deep=target;target=args.shift()}args.forEach(function(arg){extend(target,arg,deep)});return target}});define("common:bdbox/utils/queryToJson",function(require,exports,module,$){module.exports=function(url){var locse=url.split("?"),search=locse[1]?locse[1]:locse[0],pairs=search.split("&"),result={};pairs.forEach(function(pair){pair=pair.split("=");if(pair[0].length>0){var resultPair="";try{resultPair=decodeURIComponent(pair[1])||""}catch(e){}result[pair[0]]=resultPair}});return result}});define("common:bdbox/utils/getVersion",function(require,exports,module,$){var self=function(){var back=0;if(window.baiduboxapp_version){back=window.baiduboxapp_version}else{var str=navigator.userAgent;var a;if(a=/([\d+.]+)_(?:diordna|enohpi)_/.exec(str)){a=a[1].split(".");back=a.reverse().join(".")}else{if(a=/baiduboxapp\/([\d+.]+)/.exec(str)){back=a[1]}}}self=function(){return back};return back};module.exports=self});define("common:bdbox/monitor",function(require,exports,module,$){var urlencode=encodeURIComponent;var Monitor=function(url,opts){url=url+(url.indexOf("?")<0?"?":"&");this.url=url;this.options=opts};Monitor.prototype.report=function(data){data=data||"";var img=new Image(1,1),items=[];if($.isObject(data)){for(var i in data){items.push(i+"="+urlencode(String(data[i])))}data=items.join("&")}var imgName="_box_mt"+$.getId();window[imgName]=img;img.onload=img.onerror=img.onabort=function(){img.onload=img.onerror=img.onabort=null;window[imgName]=img=null};var url=this.url+data;if($.isFunction(this.options.customHandler)){url=this.options.customHandler(url)}img.src=url+"&_rnd="+Math.floor(Math.random()*2147483648);return this};Monitor.prototype.main=function(func,args){if(func&&$.isFunction(this[func])){this[func].apply(this,$.toArray(args||[]))}return this};module.exports=function(url,opts){return new Monitor(url,opts)}});define("common:bdbox/monitor/pblog",function(require,exports,module,$){var monitor=require("common:bdbox/monitor");var extend=require("common:bdbox/extend");var query2Json=require("common:bdbox/utils/queryToJson");
var getVersion=require("common:bdbox/utils/getVersion");var clone=require("common:bdbox/clone");var URL=query2Json(location.search);var ua=navigator.userAgent;var protocol=window.location.protocol;if(protocol!="http:"&&protocol!="https:"){protocol="http:"}var GIF_URI=protocol+"//m.baidu.com/tcbox";var CUSTOM_ARG={service:"bdbox",action:"pblog",ctv:2,cen:"uid_ua_ut",data:{appid:"1",dataid:"2",actiontype:"1",actionid:"2",actiondata:{ref:URL.ref||"",gmv:URL.vmgdb||"",source:URL.from||URL.ref||"",boxVersion:getVersion(),boxPlatform:ua.match(/(iPad|iPhone|iPod)/igm)?"ios":"android"}}};var urlencode=encodeURIComponent;if(URL.uid&&URL.osname){var arr=[];["osname","ua","ut","from","cfrom","uid","pkgname"].forEach(function(v){URL[v]&&(CUSTOM_ARG[v]=URL[v])})}var tmpArg;var PBLOG=monitor(GIF_URI,{customHandler:function(url){var arr=[];if(tmpArg){for(var i in tmpArg){if(tmpArg.hasOwnProperty(i)){var val=tmpArg[i];if($.isPlainObject(val)){val=JSON.stringify(val)}arr.push(i+"="+urlencode(val))}}}if(arr.length){url+=arr.join("&")}return url}});PBLOG.init=function(cateId,obj){if($.isPlainObject(obj)){CUSTOM_ARG=extend(CUSTOM_ARG,obj)}CUSTOM_ARG.data.cateid=cateId};PBLOG.pv=function(url,u){tmpArg=clone(CUSTOM_ARG);var _data=tmpArg.data;_data.actionid="1";var data={};data.url=url||location.href;if(u){data.u=u}_data.actiondata=extend(_data.actiondata,data);return PBLOG.report()};PBLOG.event=function(evtName,evtType,evtTag){if(!evtName){throw"monitor.tc.event need a evtName"}if($.isPlainObject(evtType)&&!evtTag){var data={evtName:evtName};for(var i in evtType){data[i]=evtType[i]}}else{var data={evtName:evtName,evtType:evtType||"",evtTag:evtTag||""}}tmpArg=clone(CUSTOM_ARG);var _data=tmpArg.data;_data.actionid="2";_data.actiondata=extend(_data.actiondata,data);return PBLOG.report()};module.exports=function(){PBLOG.main.apply(PBLOG,arguments)}});window.pblog=require("common:bdbox/monitor/pblog")}(window,document));