(this.webpackJsonppalette=this.webpackJsonppalette||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(19)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),i=n.n(r);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(1),s=n(2),u=n(5),l=n(4),h=n(3),f=(n(14),n(15),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Loading ".concat(this.isActive())},"Processing...")}},{key:"isActive",value:function(){return this.props.active?"active":""}}]),n}(o.a.Component)),p=(n(16),function(){function t(e,n,a){Object(c.a)(this,t),this.R=Math.floor(e),this.G=Math.floor(n),this.B=Math.floor(a)}return Object(s.a)(t,[{key:"localeCompare",value:function(t){return this.toString().localeCompare(t.toString())}},{key:"toString",value:function(){var t=(this.R<16?"0":"")+this.R.toString(16),e=(this.G<16?"0":"")+this.G.toString(16),n=(this.B<16?"0":"")+this.B.toString(16);return"#".concat(t).concat(e).concat(n)}}]),t}());function v(t){var e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;var n=e.getContext("2d");n.drawImage(t,0,0);for(var a=n.getImageData(0,0,e.width,e.height).data,o=[],r=0;r<a.length;r+=1){var i=a[r++],c=a[r++],s=a[r++];a[r]>0&&o.push(new p(i,c,s))}return function t(e){if(e.length<16)return e.sort();for(var n=[],a=0;a<e.length;a+=1){var o=e[a],r=e[++a];r?n.push(new p((o.R+r.R)/2,(o.G+r.G)/2,(o.B+r.B)/2)):n.push(o)}return t(n)}(o)}var m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).file=o.a.createRef(),a.onChange=a.onChange.bind(Object(u.a)(a)),a.state={inputStyle:{backgroundColor:"white",backgroundImage:"none"},placeholderStyle:{opacity:1}},a}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Input",style:this.state.inputStyle},o.a.createElement("div",{className:"Input-placeholder",style:this.state.placeholderStyle},"DRAG AN IMAGE HERE"),o.a.createElement("input",{className:"Input-file",type:"file",accept:"image/*",ref:this.file,onChange:this.onChange}))}},{key:"onChange",value:function(){var t=this,e=this.file.current;if(e.files.length){var n=e.files[0];if(n.type.startsWith("image/")){this.onStart();var a=new FileReader;a.onload=function(e){t.setState({inputStyle:{backgroundColor:"black",backgroundImage:"url(".concat(a.result,")")},placeholderStyle:{opacity:0}}),function(t,e){var n=document.createElement("img");n.onload=function(t){"function"===typeof e&&e(n)},n.src=t}(a.result,(function(e){var n=v(e);t.onResult(n)}))},a.readAsDataURL(n)}else this.onResult(-1)}else this.onResult(-2)}},{key:"onStart",value:function(t){"function"===typeof this.props.onStart&&this.props.onStart(t)}},{key:"onResult",value:function(t){"function"===typeof this.props.onResult&&this.props.onResult(t)}}]),n}(o.a.Component),d=(n(17),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Output ".concat(this.isActive())},this.props.result)}},{key:"isActive",value:function(){return this.props.active?"active":""}}]),n}(o.a.Component)),g=(n(18),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Color"},o.a.createElement("span",{className:"Color-color",style:{background:this.props.color||"#ffffff"}}),o.a.createElement("span",{className:"Color-name"},this.props.color||"#ffffff"))}}]),n}(o.a.Component)),y=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={result:[],isLoading:!1,hasOutput:!1},a.onStart=a.onStart.bind(Object(u.a)(a)),a.onResult=a.onResult.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Home"},o.a.createElement(m,{onStart:this.onStart,onResult:this.onResult}),o.a.createElement(d,{active:this.state.hasOutput,result:this.state.result}),o.a.createElement(f,{active:this.state.isLoading}))}},{key:"renderColor",value:function(t){return t.map((function(t,e){return o.a.createElement(g,{color:t.toString(),key:e})}))}},{key:"onStart",value:function(){this.setState({isLoading:!0})}},{key:"onResult",value:function(t){t instanceof Array&&t.length?this.setState({result:this.renderColor(t),isLoading:!1,hasOutput:!0}):this.setState({result:[],isLoading:!1,hasOutput:!1})}}]),n}(o.a.Component);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.34bf1dd1.chunk.js.map