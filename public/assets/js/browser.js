// 加载特效，忽视 prettier 格式化和 eslint 规则
// prettier-ignore
/* eslint-disable */
(function(){var color=['#94A3B8','#f0abfc'];var loadingBox=document.createElement('div');loadingBox.className='loading-wrap';loadingBox.innerHTML='<div class="loading-wrap-dot"></div><div class="loading-wrap-rate"></div>';document.body.appendChild(loadingBox);var fadeOut=function(elem,func,speed,opacity){speed=speed||10;opacity=opacity||0;var val=100;(function fadeOutTimeout(){val-=5;if(elem.style.opacity!==undefined){elem.style.opacity=val/100;}else{elem.style.filter=`alpha(opacity=${val})`;}
if(val>=opacity){setTimeout(fadeOutTimeout,speed);}else if(val<0){elem.style.display='none';if(func)func.call();}})();};var setBrowserHtml=function(html){fadeOut(loadingBox,function(){loadingBox.parentNode.removeChild(loadingBox);});if(html&&document.getElementById('app')){document.getElementById('app').innerHTML=html;document.getElementById('app').id='';}};var userAgent=(window.navigator.userAgent||'window msie').toLowerCase();var isIE11=userAgent.indexOf('trident')>-1&&userAgent.indexOf('rv:11.0');if(userAgent.indexOf('msie')>=1||isIE11){setBrowserHtml('<div style="padding:10px">你正在使用的浏览器版本过低，无法浏览和使用!<br>The browser version you are using is too low to browse and use!<div>');}else{var style=document.createElement('style');style.type='text/css';style.innerHTML=`html,body{overflow:hidden;}.loading-wrap{align-items:center;display:none;position:fixed;user-select:none;justify-content:center;left:0;right:0;top:0;bottom:0;background:white;z-index:2147483647;width:100%;height:100%;font-size:12px;line-height:12px;}.loading-wrap-dot,.loading-wrap-dot::before,.loading-wrap-dot::after{width:10px;height:10px;border-radius:5px;background-color:${color[1]};color:${color[1]};animation:loading-wrap-dot-flashing 1s infinite linear alternate;}.loading-wrap-dot{position:relative;animation-delay:0.1s;top:0;left:0;}.loading-wrap-dot::before,.loading-wrap-dot::after{position:absolute;content:"";display:inline-block;top:0;}.loading-wrap-dot::before{left:-15px;animation-delay:0s;}.loading-wrap-dot::after{left:15px;animation-delay:0.5s;}.loading-wrap-rate{width:32px;color:${color[0]};margin-left:20px;}@keyframes loading-wrap-dot-flashing{0%{background-color:${color[1]};}50%,100%{background-color:${color[0]};}}`;loadingBox.appendChild(style);var loading=(function(loadingObj){var rateBox=loadingObj.getElementsByClassName('loading-wrap-rate');if(!rateBox.length)return{remove:setBrowserHtml(null)};var desc=rateBox[0];desc.setValue=function(n){this.innerHTML=`${n.toFixed(0)}%`;};var idx=-2;var time=10;var incTime=0;var timer=null;var viewTimer = null;viewTimer=setTimeout(function(){loadingObj.style.display='flex';(function loadingRate(){incTime=time<30?50:100;desc.setValue((idx+=(100-idx)*0.2));timer=setTimeout(loadingRate,(time+=incTime));})();}, 1000);
return{remove(){if(viewTimer)clearTimeout(viewTimer);if(timer)clearTimeout(timer);desc.setValue(100);setBrowserHtml(null);}};})(loadingBox);window.addEventListener('load',function(){if(typeof window.__VUE__==='undefined'){setBrowserHtml('Internal server error');}else{loading.remove();}},false);}})();
