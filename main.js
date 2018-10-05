/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * MIT License
 * http://g.xarql.com
 * Copyright (c) 2018 Bryan Christopher Johnson
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
(function(factory){var registeredInModuleLoader=!1;if(typeof define==='function'&&define.amd){define(factory);registeredInModuleLoader=!0}
if(typeof exports==='object'){module.exports=factory();registeredInModuleLoader=!0}
if(!registeredInModuleLoader){var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api}}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key]}}
return result}
function init(converter){function api(key,value,attributes){var result;if(typeof document==='undefined'){return}
if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires}
attributes.expires=attributes.expires?attributes.expires.toUTCString():'';try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result}}catch(e){}
if(!converter.write){value=encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)}else{value=converter.write(value,key)}
key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);var stringifiedAttributes='';for(var attributeName in attributes){if(!attributes[attributeName]){continue}
stringifiedAttributes+='; '+attributeName;if(attributes[attributeName]===!0){continue}
stringifiedAttributes+='='+attributes[attributeName]}
return(document.cookie=key+'='+value+stringifiedAttributes)}
if(!key){result={}}
var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(!this.json&&cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1)}
try{var name=parts[0].replace(rdecode,decodeURIComponent);cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie)}catch(e){}}
if(key===name){result=cookie;break}
if(!key){result[name]=cookie}}catch(e){}}
return result}
api.set=api;api.get=function(key){return api.call(api,key)};api.getJSON=function(){return api.apply({json:!0},[].slice.call(arguments))};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}))};api.withConverter=init;return api}
return init(function(){})}))
// END : jscookie

// Option Pane
  function fontWeight(weight)
  {
	  if(weight === 'light') {
		  $('p').css('font-weight', 'lighter');
		  $('.bold').css('font-weight', 'lighter');
		  $('#font-light-button').hide();
		  $('#font-normal-button').show();
		  Cookies.set('font-weight', 'light', { path: ''});
	  }
	  else {
		  $('p').css('font-weight', 'normal');
		  $('.bold').css('font-weight', 'bold');
		  $('#font-normal-button').hide();
		  $('#font-light-button').show();
		  Cookies.set('font-weight', 'normal', { path: ''});
	  }
  }
  fontWeight(Cookies.get('font-weight'));
  $("#font-light-button").on('click', function() {
	  fontWeight('light');

  });
  $("#font-normal-button").on('click', function() {
	  fontWeight('normal');
  });

  // Enable JS buttons + Option Pane
  $(".ajax-bar").each(function() {
	  $(this).show();
  });
  $('#option-pane-open-button').on('click', function() {
	  $("#option-pane").show();
	  $("#option-pane-close-button").show();
	  $(this).hide();
  });
  $('#option-pane-close-button').on('click', function() {
	  $("#option-pane").hide();
	  $("#option-pane-open-button").show();
	  $(this).hide();
  });

  // Change font size
  $('html').css('font-size', Cookies.get('font-size'));
  $("#text-up").on("click", function() {
	  var computedFontSize = parseFloat(window.getComputedStyle(document.getElementById("html")).fontSize);
	  $('html').css('font-size', (computedFontSize + 1) + 'px');
	  Cookies.set('font-size', (computedFontSize + 1) + 'px', { path: '' });
  });
  $("#text-dn").on("click", function() {
	  var computedFontSize = parseFloat(window.getComputedStyle(document.getElementById("html")).fontSize); // Get font size of <html></html>
	  $('html').css('font-size', (computedFontSize - 1) + 'px'); // Change font size by -1
	  Cookies.set('font-size', (computedFontSize - 1) + 'px', { path: '' });
  });

// END : xarql