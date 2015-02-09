/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";if(typeof window.jQuery.sap.act==="object"||typeof window.jQuery.sap.act==="function"){return}var _={},a=true,b=null,c=10000,d=!!window.addEventListener,e=[],f=false,g=null;function h(){b=null;if(f){j();return}a=false;g.observe(document.documentElement,{childList:true,attributes:true,subtree:true,characterData:true})}function j(){if(document.hidden===true){return}if(!a){a=true;k(e);g.disconnect()}if(b){f=true}else{b=setTimeout(h,c);f=false}}function k(l){if(l.length==0){return}var m=l.slice();setTimeout(function(){var I;for(var i=0,L=m.length;i<L;i++){I=m[i];I.fFunction.call(I.oListener||window)}},0)}_.attachActivate=function(F,l){e.push({oListener:l,fFunction:F})};_.detachActivate=function(F,l){for(var i=0,L=e.length;i<L;i++){if(e[i].fFunction===F&&e[i].oListener===l){e.splice(i,1);break}}};_.isActive=!d?function(){return true}:function(){return a};_.refresh=!d?function(){}:j;if(d){var E=["resize","orientationchange","mousemove","mousedown","mouseup","touchstart","touchmove","touchend","touchcancel","paste","cut","keydown","keyup","DOMMouseScroll","mousewheel"];for(var i=0;i<E.length;i++){window.addEventListener(E[i],_.refresh,true)}if(window.MutationObserver){g=new window.MutationObserver(_.refresh)}else if(window.WebKitMutationObserver){g=new window.WebKitMutationObserver(_.refresh)}else{g={observe:function(){document.documentElement.addEventListener("DOMSubtreeModified",_.refresh)},disconnect:function(){document.documentElement.removeEventListener("DOMSubtreeModified",_.refresh)}}}if(typeof(document.hidden)==="boolean"){document.addEventListener("visibilitychange",function(){if(document.hidden!==true){_.refresh()}},false)}j()}q.sap.act=_;return q},false);
