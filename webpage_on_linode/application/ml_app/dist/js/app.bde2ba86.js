(function(e){function t(t){for(var o,a,c=t[0],l=t[1],s=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("h1",[e._v("ML application")]),n("h3",[e._v("Upload a image you want to classify")]),n("input",{attrs:{type:"file",accept:"image/*"},on:{change:e.previewImage}}),e.selectedFile.length>0?n("div",{staticClass:"image-preview"},[n("img",{staticClass:"preview",attrs:{src:e.selectedFile}})]):e._e(),n("button",{on:{click:e.onUpload}},[e._v("Upload!")]),n("button",{on:{click:e.corstest}},[e._v("Upload!")]),n("h3",[e._v(e._s(e.confidence))])])])},i=[],a={name:"app",data:function(){return{confidence:"P(x) =  ?",selectedFile:""}},methods:{onUpload:function(){this.axios.post("http://172.16.98.152:5000/api/upload/",this.selectedFile),this.confidence="P(x)=0.92"},previewImage:function(e){var t=this,n=e.target;if(n.files&&n.files[0]){var o=new FileReader;o.onload=function(e){t.selectedFile=e.target.result},o.readAsDataURL(n.files[0])}},corstest:function(){var e=this;this.console.log("hoge"),this.axios.post("http://172.16.98.152:5000/api/corstest/",{hoge:1}).then((function(t){e.console.log("hoge"),e.console.log(t.data)}))}}},c=a,l=(n("034f"),n("2877")),s=Object(l["a"])(c,r,i,!1,null,null,null),u=s.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.bde2ba86.js.map