(this.webpackJsonpcommath=this.webpackJsonpcommath||[]).push([[0],{19:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var r=a(16),n=a(10),s=a(11),c=a(18),l=a(17),u=a(0),i=a.n(u),o=a(12),h=a.n(o),m=(a(24),a(15),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();p(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e=this,t=this.state.history,a=p(t[this.state.stepNumber].squares);t.map((function(t,a){var r=a?"\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07 \u0e25\u0e33\u0e14\u0e31\u0e1a\u0e17\u0e35\u0e48"+a:"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e40\u0e01\u0e21";return i.a.createElement("li",{key:a},i.a.createElement("button",{onClick:function(){return e.jumpTo(a)}},r))}));return a?"\u0e1c\u0e39\u0e49\u0e0a\u0e19\u0e30\u0e04\u0e37\u0e2d: "+a:"\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e04\u0e19\u0e16\u0e31\u0e14\u0e44\u0e1b: "+(this.state.xIsNext?"X":"O"),i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("p",null,"Edit ",i.a.createElement("code",null,"src/App.js")," and save to reload."),i.a.createElement("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),a}(i.a.Component));function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],c=n[1],l=n[2];if(e[s]&&e[s]===e[c]&&e[s]===e[l])return e[s]}return null}h.a.render(i.a.createElement(m,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.6e967404.chunk.js.map