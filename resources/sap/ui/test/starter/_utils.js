/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/thirdparty/URI"],function(e,t){"use strict";function n(e){var t=document.querySelector("["+e+"]");return t?t.getAttribute(e):null}function r(){var e=sap.ui.loader._.guessResourceName(location.href);return e?e.replace(/\.html$/,""):null}function i(){return new Promise(function(e){function t(){document.removeEventListener("DOMContentLoaded",t,false);e()}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",t,false)}else{e()}})}function s(e){var t=document.createElement("link");t.rel="stylesheet";t.href=sap.ui.require.toUrl(e);document.head.appendChild(t)}function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;")}var o={name:null,beforeBootstrap:null,module:"./{name}.qunit",page:"resources/sap/ui/test/starter/Test.qunit.html?testsuite={suite}&test={name}",title:"QUnit tests '{name}' of suite '{suite}'",qunit:{versions:{1:{module:"sap/ui/thirdparty/qunit",css:"sap/ui/thirdparty/qunit.css"},2:{module:"sap/ui/thirdparty/qunit-2",css:"sap/ui/thirdparty/qunit-2.css"},edge:2,true:"edge"},version:"edge"},sinon:{versions:{1:{module:"sap/ui/thirdparty/sinon",bridge:"sap/ui/thirdparty/sinon-qunit"},4:{module:"sap/ui/thirdparty/sinon-4",bridge:"sap/ui/qunit/sinon-qunit-bridge"},edge:4,true:"edge"},version:"edge",qunitBridge:true,useFakeTimers:false,useFakeServer:false},coverage:{only:null,never:null,branchTracking:false},ui5:{bindingSyntax:"complex",noConflict:true,libs:[],theme:"sap_belize"},bootCore:true,autostart:true};function a(e){if(e&&typeof e==="object"){if(e.qunit===null||e.qunit===false){e.qunit={version:null}}else if(typeof e.qunit==="number"||e.qunit==="edge"){e.qunit={version:e.qunit}}else if(typeof e.qunit!=="object"){e.qunit={}}if(e.sinon===null||e.sinon===false){e.sinon={version:null}}else if(typeof e.sinon==="number"||e.sinon==="edge"){e.sinon={version:e.sinon}}else if(typeof e.sinon!=="object"){e.sinon={}}}else{e=null}return e}function l(n,r){function i(e,t){return e==null?e:e.replace(/\{suite\}/g,r).replace(/\{name\}/g,t)}var s=r.slice(0,r.lastIndexOf("/")+1);function u(e){return e==null?e:e.replace(/^\.\//,s)}var l=e({},o,a(n.defaults));Object.keys(n.tests).forEach(function(r){var s=a(n.tests[r]),o={name:r};s=e({},l,o,s);if(Array.isArray(s.module)){s.module=s.module.map(function(e){return u(i(e,r))})}else{s.module=u(i(s.module,r))}s.beforeBootstrap=u(i(s.beforeBootstrap,r));s.page=i(s.page,r);if(s.uriParams){var d=new t(s.page);d.addSearch(s.uriParams);s.page=d.toString()}s.title=i(s.title,r);n.tests[r]=s});n.sortedTests=Object.keys(n.tests).sort(function(e,t){var r=n.tests[e].group||"";var i=n.tests[t].group||"";if(r!==i){return r<i?-1:1}e=e.toUpperCase();t=t.toUpperCase();if(e===t){return 0}return e<t?-1:1}).map(function(e){return n.tests[e]});return n}var d=/^test-resources\/([a-zA-Z_$\-][a-zA-Z_$0-9\-\.]*\/)*testsuite(?:\.[a-z][a-z0-9\-]*)*\.qunit$/;function f(e){return new Promise(function(t,n){if(!e){throw new TypeError("No test suite specified")}if(!d.test(e)){throw new TypeError("Invalid test suite name")}sap.ui.require([e],function(n){t(l(n,e))},function(e){n(e)})})}sap.ui.loader.config({paths:{"test-resources":sap.ui.require.toUrl("")+"/../test-resources/"}});return{defaultConfig:o,addStylesheet:s,encode:u,getAttribute:n,getDefaultSuiteName:r,getSuiteConfig:f,whenDOMReady:i}});