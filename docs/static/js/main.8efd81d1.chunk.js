(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},15:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),u=(n(15),n(1)),o=n(9),l=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>1&&(t((function(e){return[i].concat(Object(o.a)(e))})),l(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){l(e.target.value)}}))},s=function(e){var t=e.title,n=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",null,t))},m=n(4),p=n.n(m),d=n(8);n(17).config();var f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"i78npLyO0Y8xdjJAowONZXoCIyZu17Du",REACT_APP_LIMIT:"10",REACT_APP_URL:"http://api.giphy.com/v1/gifs/search"}),E=f.REACT_APP_URL,_=f.REACT_APP_LIMIT,g=f.REACT_APP_API_KEY,v=E,O=_,h=g,A=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(v,"?q=").concat(encodeURI(t),"&limit=").concat(O,"&api_key=").concat(h));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,r=a.data,c=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized.url}})),e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(0),alert("Sorry, data not found",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){A(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,i=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),i&&r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e))}))))},b=function(){var e=Object(a.useState)(["Shirt"]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(l,{setCategories:c}),r.a.createElement("hr",null),n.map((function(e){return r.a.createElement(P,{key:e,category:e})})))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8efd81d1.chunk.js.map