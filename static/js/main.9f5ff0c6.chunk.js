(this.webpackJsonptha22=this.webpackJsonptha22||[]).push([[0],{440:function(e,t){},448:function(e,t,c){},450:function(e,t,c){"use strict";c.r(t);var n=c(14),a=c(163),s=c.n(a),r=c(37),i=(c(63),c(448),c(2)),o=function(e){var t=e.templates,c=e.setMeme;return Object(i.jsx)("div",{className:"templates",children:t.map((function(e){return Object(i.jsx)("div",{className:"template",onClick:function(){c(e)},children:Object(i.jsx)("div",{className:"image",style:{background:"url(".concat(e.url,")"),backgroundSize:"cover"},children:console.log("div")})},e.id)}))})},j=c(164),l=c(38),u=function(e){var t=e.meme,c=e.setMeme,a=Object(n.useState)({template_id:t.id,username:"teasty",password:"PPS$Asr52ttCfaF",boxes:[]}),s=Object(r.a)(a,2),o=s[0],u=s[1];return Object(i.jsxs)("div",{className:"meme",children:[Object(i.jsx)("img",{src:t.url}),Object(i.jsx)("div",{children:Object(j.a)(Array(t.box_count)).map((function(e,t){return Object(i.jsx)("input",{type:"text",placeholder:"meme cpation ".concat(t+1),onChange:function(e){var c=o.boxes;c[t]={text:e.target.value},u(Object(l.a)(Object(l.a)({},o),{},{boxes:c}))}},t)}))}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:function(){var e="https://api.imgflip.com/caption_image?template_id=".concat(o.template_id,"&username=").concat(o.username,"&password=").concat(o.password);o.boxes.map((function(t,c){e+="&boxes[".concat(c,"][text]=").concat(t.text)})),fetch(e).then((function(e){return e.json()})).then((function(e){c(Object(l.a)(Object(l.a)({},t),{},{url:e.data.url}))}))},children:"Generate Meme"}),Object(i.jsx)("button",{onClick:function(){return c(null)},children:"choose Template"}),Object(i.jsxs)("a",{href:t.url,target:"_blank",children:[Object(i.jsx)("button",{children:"download"})," "]})]}),Object(i.jsx)("div",{children:"CREATED BY PINTU :)"})]})};var m=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),j=Object(r.a)(s,2),l=j[0],m=j[1];return Object(n.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){return a(e.data.memes)}))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h4",{children:"MEME GENERATOR"}),null===l?Object(i.jsx)(o,{templates:c,setMeme:m}):Object(i.jsx)(u,{meme:l,setMeme:m})]})})};s.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[450,1,2]]]);
//# sourceMappingURL=main.9f5ff0c6.chunk.js.map