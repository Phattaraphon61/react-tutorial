(this.webpackJsonpcommath=this.webpackJsonpcommath||[]).push([[0],{19:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(7),l=a(8),s=a(12),i=a(11),u=a(0),c=a.n(u),o=a(14),m=a.n(o),d=(a(24),a(17)),h=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Anywhere in your app!"),c.a.createElement(d.a,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a email \u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",t},onSubmit:function(e,t){var a=t.setSubmitting;setTimeout((function(){alert("email : ".concat(e.email,"     password : ").concat(e.password),null,2),a(!1)}),400)}},(function(e){var t=e.values,a=e.errors,n=e.touched,r=e.handleChange,l=e.handleBlur,s=e.handleSubmit,i=e.isSubmitting;return c.a.createElement("form",{onSubmit:s},c.a.createElement("input",{type:"email",name:"email",onChange:r,onBlur:l,value:t.email}),c.a.createElement("br",null),a.email&&n.email&&a.email,c.a.createElement("br",null),c.a.createElement("input",{type:"password",name:"password",onChange:r,onBlur:l,value:t.password}),c.a.createElement("br",null),a.password&&n.password&&a.password,c.a.createElement("button",{type:"submit",disabled:i},"Submit"))})))};function p(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(p,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(c.a.Component),b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(l.a)(a,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();f(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],r=f(n.squares),l=a.map((function(e,a){var n=a?"\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07 \u0e25\u0e33\u0e14\u0e31\u0e1a\u0e17\u0e35\u0e48"+a:"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e40\u0e01\u0e21";return c.a.createElement("li",{key:a},c.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},n))}));return e=r?"\u0e1c\u0e39\u0e49\u0e0a\u0e19\u0e30\u0e04\u0e37\u0e2d: "+r:"\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e04\u0e19\u0e16\u0e31\u0e14\u0e44\u0e1b: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(v,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,e),c.a.createElement("ol",null,l)))}}]),a}(c.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(n.a)(t[a],3),l=r[0],s=r[1],i=r[2];if(e[l]&&e[l]===e[s]&&e[l]===e[i])return e[l]}return null}m.a.render(c.a.createElement("div",null,c.a.createElement(b,null),",",c.a.createElement(h,null),","),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ee93b135.chunk.js.map