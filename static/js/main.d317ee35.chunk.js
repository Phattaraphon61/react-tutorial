(this.webpackJsonpcmpj=this.webpackJsonpcmpj||[]).push([[0],{115:function(e,t,a){e.exports=a(145)},120:function(e,t,a){},121:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(11),l=a.n(r),c=a(7),o=a(47),u=a(15),m=(a(120),a(61),a(42)),s=a(27);m.a,a(121),a(0);var d=a(12),b=a(4),E=a(174),g=a(22),p=a(194),v=a(179),f=a(180),h=a(183),x=a(177),j=a(58),O=a(182),y=a(181),S=a(53),C=a.n(S),w=a(57),I=a.n(w),k=a(56),B=a.n(k),T=a(184),P=a(185),F=a(186);a(62),a(86),a(85),a(87),a(88),a(90),a(89),Object(E.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:300,width:"calc(100% - ".concat(300,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:300,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(u.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));var N=a(187),A=a(188),R=a(189),z=a(192),L=a(190),D=a(34),q=a.n(D),G="https://commath-phattaraphon.herokuapp.com",J=function(e){return q.a.get(G+"/b2s/".concat(e)).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))},X=function(e){return q.a.post(G+"/elimination",e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))},H=function(e){return q.a.post(G+"/interpolation",e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))},M=function(e){return q.a.post(G+"/differentiation",e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))},W=function(e){return q.a.post(G+"/integration",e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))},K=function(e){return q.a.post(G+"/root-finding",e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))};function Q(){var e=Object(n.useState)(0x650e124ef1c7),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(c.a)(l,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){J(a).then((function(e){}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},i.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 1 Basic Computing")),i.a.createElement("div",null,i.a.createElement(N.a,{style:{marginTop:"250px",width:"1200px"},class:"container text-center"},i.a.createElement(A.a,null,i.a.createElement(R.a,{container:!0,spacing:3,alignItems:"flex-end"},i.a.createElement(R.a,{item:!0,xs:12,sm:6,md:6},i.a.createElement(z.a,{id:"outlined-basic",value:a,label:"\u0e01\u0e23\u0e2d\u0e01\u0e40\u0e25\u0e02\u0e10\u0e32\u0e19\u0e2a\u0e2d\u0e07",variant:"outlined",onChange:function(e){return r(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:6,md:6},i.a.createElement(z.a,{id:"outlined-read-only-input",label:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",value:""===u?"":u,InputProps:{readOnly:!0},variant:"outlined"}))))),i.a.createElement("div",{class:"container text-center"},i.a.createElement(L.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){J(a).then((function(e){m(e)}))}},"generate"))))}function U(){var e=Object(n.useState)(6),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(-4),o=Object(c.a)(l,2),u=o[0],m=o[1],s=Object(n.useState)(1),d=Object(c.a)(s,2),b=d[0],E=d[1],g=Object(n.useState)(-4),p=Object(c.a)(g,2),v=p[0],f=p[1],h=Object(n.useState)(6),x=Object(c.a)(h,2),y=x[0],S=x[1],C=Object(n.useState)(-4),w=Object(c.a)(C,2),I=w[0],k=w[1],B=Object(n.useState)(1),T=Object(c.a)(B,2),P=T[0],F=T[1],N=Object(n.useState)(-4),D=Object(c.a)(N,2),q=D[0],G=D[1],J=Object(n.useState)(6),H=Object(c.a)(J,2),M=H[0],W=H[1],K=Object(n.useState)(-14),Q=Object(c.a)(K,2),U=Q[0],V=Q[1],Y=Object(n.useState)(36),Z=Object(c.a)(Y,2),$=Z[0],_=Z[1],ee=Object(n.useState)(6),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],ie=Object(n.useState)(""),re=Object(c.a)(ie,2),le=re[0],ce=re[1],oe=Object(n.useState)(""),ue=Object(c.a)(oe,2),me=ue[0],se=ue[1],de=Object(n.useState)(""),be=Object(c.a)(de,2),Ee=be[0],ge=be[1];return Object(n.useEffect)((function(){X({A:[[a,u,b],[v,y,I],[P,q,M]],b:[U,$,ae]}).then((function(e){console.log(e)}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},i.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 2 Linear Equations")),i.a.createElement("div",null,i.a.createElement("div",{class:"container text-center",style:{marginTop:"50px"}},i.a.createElement(A.a,null,i.a.createElement(R.a,{container:!0,spacing:3,alignItems:"flex-end"},i.a.createElement(R.a,{item:!0,xs:12,sm:6,md:6},i.a.createElement(j.a,null,"\u0e2d\u0e30\u0e40\u0e23\u0e22\u0e4c A = 3 x 3"),i.a.createElement(R.a,{container:!0,spacing:3,alignItems:"flex-end"},i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:a,variant:"outlined",onChange:function(e){return r(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:u,variant:"outlined",onChange:function(e){return m(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:b,variant:"outlined",onChange:function(e){return E(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:v,variant:"outlined",onChange:function(e){return f(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:y,variant:"outlined",onChange:function(e){return S(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:I,variant:"outlined",onChange:function(e){return k(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:P,variant:"outlined",onChange:function(e){return F(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:q,variant:"outlined",onChange:function(e){return G(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:M,variant:"outlined",onChange:function(e){return W(e.target.value)}})))),i.a.createElement(R.a,{item:!0,xs:12,sm:6,md:6},i.a.createElement(j.a,null,"\u0e2d\u0e30\u0e40\u0e23\u0e22\u0e4c B"),i.a.createElement(R.a,{container:!0,spacing:3,alignItems:"flex-end"},i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:U,variant:"outlined",onChange:function(e){return V(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:$,variant:"outlined",onChange:function(e){return _(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:ae,variant:"outlined",onChange:function(e){return ne(e.target.value)}})))),i.a.createElement(R.a,{item:!0,xs:12,sm:12,md:12},i.a.createElement(O.a,null),i.a.createElement(j.a,{style:{marginTop:"80px"}},"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c"),i.a.createElement(R.a,{container:!0,spacing:3,alignItems:"flex-end"},i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-read-only-input",label:"x0",value:""===le?"":le,InputProps:{readOnly:!0},variant:"outlined"})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-read-only-input",label:"x1",value:""===me?"":me,InputProps:{readOnly:!0},variant:"outlined"})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-read-only-input",label:"x2",value:""===Ee?"":Ee,InputProps:{readOnly:!0},variant:"outlined"})))))),i.a.createElement("div",{class:"container text-center"},i.a.createElement(L.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){X({A:[[a,u,b],[v,y,I],[P,q,M]],b:[U,$,ae]}).then((function(e){ce(e[0]),se(e[1]),ge(e[2]),console.log(e)}))}},"generate")))))}var V=a(191);function Y(){var e=Object(n.useState)(5),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),o=Object(c.a)(l,2),u=o[0],m=o[1],s=Object(n.useState)(8),d=Object(c.a)(s,2),b=d[0],E=d[1],g=Object(n.useState)(14),p=Object(c.a)(g,2),v=p[0],f=p[1],h=Object(n.useState)(20),x=Object(c.a)(h,2),j=x[0],O=x[1],y=Object(n.useState)(23),S=Object(c.a)(y,2),C=S[0],w=S[1],I=Object(n.useState)(30),k=Object(c.a)(I,2),B=k[0],T=k[1],P=Object(n.useState)(0),F=Object(c.a)(P,2),N=F[0],D=F[1],q=Object(n.useState)(50),G=Object(c.a)(q,2),J=G[0],X=G[1],M=Object(n.useState)(96),W=Object(c.a)(M,2),K=W[0],Q=W[1],U=Object(n.useState)(110),Y=Object(c.a)(U,2),Z=Y[0],$=Y[1],_=Object(n.useState)(100),ee=Object(c.a)(_,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(86),ie=Object(c.a)(ne,2),re=ie[0],le=ie[1],ce=Object(n.useState)(""),oe=Object(c.a)(ce,2),ue=oe[0],me=oe[1];return Object(n.useEffect)((function(){H({x:a,xi:[u,b,v,j,C,B],yi:[N,J,K,Z,te,re]}).then((function(e){}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},i.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 3 Interpolation")),i.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},i.a.createElement(A.a,null,i.a.createElement(R.a,{container:!0,spacing:3,alignItems:"flex-end"},i.a.createElement(R.a,{item:!0,xs:12,sm:12,md:12},i.a.createElement(z.a,{id:"outlined-basic",label:"t",value:a,variant:"outlined",onChange:function(e){return r(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"x1",value:u,variant:"outlined",onChange:function(e){return m(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"x2",value:b,variant:"outlined",onChange:function(e){return E(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"x3",value:v,variant:"outlined",onChange:function(e){return f(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"x4",value:j,variant:"outlined",onChange:function(e){return O(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"x5",value:C,variant:"outlined",onChange:function(e){return w(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"x6",value:B,variant:"outlined",onChange:function(e){return T(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"y1",value:N,variant:"outlined",onChange:function(e){return D(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"y2",value:J,variant:"outlined",onChange:function(e){return X(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"y3",value:K,variant:"outlined",onChange:function(e){return Q(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"y4",value:Z,variant:"outlined",onChange:function(e){return $(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"y5",value:te,variant:"outlined",onChange:function(e){return ae(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:2,md:2},i.a.createElement(z.a,{id:"outlined-basic",label:"y6",value:re,variant:"outlined",onChange:function(e){return le(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:12,md:12},i.a.createElement(z.a,{style:{width:"350px"},id:"outlined-read-only-input",label:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",value:""===ue?"":ue,InputProps:{readOnly:!0},variant:"outlined"})))),i.a.createElement(V.a,null),i.a.createElement("div",{class:"container text-center"},i.a.createElement(L.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){H({x:a,xi:[u,b,v,j,C,B],yi:[N,J,K,Z,te,re]}).then((function(e){me("\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35\u0e17\u0e35\u0e48 ".concat(a," \u0e08\u0e30\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e40\u0e23\u0e47\u0e27\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 ").concat(e))}))}},"generate"))))}function Z(){var e=Object(n.useState)(.64),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(2),o=Object(c.a)(l,2),u=o[0],m=o[1],s=Object(n.useState)(""),d=Object(c.a)(s,2),b=d[0],E=d[1];return Object(n.useEffect)((function(){M({h:a,p:u}).then((function(e){}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},i.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 4 Differentiation")),i.a.createElement("div",{class:"container text-center",style:{marginTop:"120px"}},i.a.createElement(A.a,null,i.a.createElement(R.a,{container:!0,spacing:3,alignItems:"flex-end"},i.a.createElement(R.a,{item:!0,xs:12,sm:6,md:6},i.a.createElement(z.a,{id:"outlined-basic",value:a,label:"\u0e04\u0e48\u0e32 H",variant:"outlined",onChange:function(e){return r(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:6,md:6},i.a.createElement(z.a,{id:"outlined-basic",value:u,label:"\u0e04\u0e48\u0e32 P",variant:"outlined",onChange:function(e){return m(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:12,md:12},i.a.createElement(z.a,{id:"outlined-read-only-input",label:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",value:""===b?"":b,InputProps:{readOnly:!0},variant:"outlined"})))),i.a.createElement(V.a,null),i.a.createElement("div",{class:"container text-center"},i.a.createElement(L.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){M({h:a,p:u}).then((function(e){E(e)}))}},"generate"))))}function $(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),o=Object(c.a)(l,2),u=o[0],m=o[1],s=Object(n.useState)(3),d=Object(c.a)(s,2),b=d[0],E=d[1];return Object(n.useEffect)((function(){W({a:u,b:b}).then((function(e){}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},i.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 5 Integration")),i.a.createElement("div",null,i.a.createElement(A.a,{class:"container text-center",style:{marginTop:"180px"}},i.a.createElement(R.a,{container:!0,spacing:3,alignItems:"flex-end"},i.a.createElement(R.a,{item:!0,xs:12,sm:6,md:6},i.a.createElement(z.a,{id:"outlined-basic",value:u,label:"\u0e04\u0e48\u0e32 A",variant:"outlined",onChange:function(e){return m(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:6,md:6},i.a.createElement(z.a,{id:"outlined-basic",value:b,label:"\u0e04\u0e48\u0e32 B",variant:"outlined",onChange:function(e){return E(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:12,md:12},i.a.createElement(z.a,{id:"outlined-read-only-input",label:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",value:""===a?"":a,InputProps:{readOnly:!0},variant:"outlined"})))),i.a.createElement(V.a,null),i.a.createElement("div",{class:"container text-center"},i.a.createElement(L.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){W({a:u,b:b}).then((function(e){r(e)}))}},"generate"))))}function _(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1),o=Object(c.a)(l,2),u=o[0],m=o[1],s=Object(n.useState)(.001),d=Object(c.a)(s,2),b=d[0],E=d[1],g=Object(n.useState)(""),p=Object(c.a)(g,2),v=p[0],f=p[1];return Object(n.useEffect)((function(){K({a:a,b:u,dx:b}).then((function(e){}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},i.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 6 Root-finding")),i.a.createElement("div",null,i.a.createElement(A.a,{class:"container text-center",style:{marginTop:"150px"}},i.a.createElement(R.a,{container:!0,spacing:3,alignItems:"flex-end"},i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:a,label:"\u0e04\u0e48\u0e32 A",variant:"outlined",onChange:function(e){return r(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:u,label:"\u0e04\u0e48\u0e32 B",variant:"outlined",onChange:function(e){return m(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:4,md:4},i.a.createElement(z.a,{id:"outlined-basic",value:b,label:"\u0e04\u0e48\u0e32\u0e43\u0e01\u0e25\u0e49\u0e40\u0e04\u0e35\u0e22\u0e07",variant:"outlined",onChange:function(e){return E(e.target.value)}})),i.a.createElement(R.a,{item:!0,xs:12,sm:12,md:12},i.a.createElement(z.a,{id:"outlined-read-only-input",label:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",value:""===v?"":v,InputProps:{readOnly:!0},variant:"outlined",style:{width:"365px"}})))),i.a.createElement("div",{class:"container text-center",style:{marginTop:"50px"}},i.a.createElement(L.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){K({a:a,b:u,dx:b}).then((function(e){f(e)}))}},"generate"))))}var ee=a(91),te=a.n(ee),ae=a(92),ne=a.n(ae),ie=a(93),re=a.n(ie),le=a(94),ce=a.n(le),oe=a(95),ue=a.n(oe),me=a(96),se=a.n(me),de=Object(E.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:300,width:"calc(100% - ".concat(300,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:300,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(u.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));var be=function(){var e,t,a=de(),n=Object(g.a)(),r=i.a.useState(!1),l=Object(c.a)(r,2),o=l[0],m=l[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null,i.a.createElement("div",{className:a.root},i.a.createElement(x.a,null),i.a.createElement(v.a,{position:"fixed",className:Object(b.a)(a.appBar,Object(u.a)({},a.appBarShift,o))},i.a.createElement(f.a,null,i.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){m(!0)},edge:"start",className:Object(b.a)(a.menuButton,Object(u.a)({},a.hide,o))},i.a.createElement(C.a,null)),i.a.createElement(j.a,{variant:"h6",noWrap:!0},"Project Commath"))),i.a.createElement(p.a,{variant:"permanent",className:Object(b.a)(a.drawer,(e={},Object(u.a)(e,a.drawerOpen,o),Object(u.a)(e,a.drawerClose,!o),e)),classes:{paper:Object(b.a)((t={},Object(u.a)(t,a.drawerOpen,o),Object(u.a)(t,a.drawerClose,!o),t))}},i.a.createElement("div",{className:a.toolbar},i.a.createElement("div",{style:{marginRight:"20x"}},"61114440472 \u0e20\u0e31\u0e17\u0e23\u0e1e\u0e25 \u0e1c\u0e34\u0e27\u0e40\u0e23\u0e37\u0e2d\u0e07"),i.a.createElement(y.a,{onClick:function(){m(!1)}},"rtl"===n.direction?i.a.createElement(B.a,null):i.a.createElement(I.a,null))),i.a.createElement(O.a,null),i.a.createElement(h.a,null,["\u0e1a\u0e17\u0e17\u0e35\u0e48 1 Basic Computing","\u0e1a\u0e17\u0e17\u0e35\u0e48 2 Linear Equations","\u0e1a\u0e17\u0e17\u0e35\u0e48 3 Interpolation","\u0e1a\u0e17\u0e17\u0e35\u0e48 4 Differentiation","\u0e1a\u0e17\u0e17\u0e35\u0e48 5 Integration","\u0e1a\u0e17\u0e17\u0e35\u0e48 6 Root-finding"].map((function(e,t){return i.a.createElement(s.b,{to:"page".concat(t+1),style:{textDecoration:"none"}},i.a.createElement(T.a,{button:!0,key:e},i.a.createElement(P.a,null,0==t?i.a.createElement(te.a,null):1==t?i.a.createElement(ne.a,null):2==t?i.a.createElement(re.a,null):3==t?i.a.createElement(ce.a,null):4==t?i.a.createElement(ue.a,null):5==t?i.a.createElement(se.a,null):null),i.a.createElement(F.a,{primary:e,style:{color:"#000000"}})))})))),i.a.createElement("main",{className:a.content},i.a.createElement("div",{className:a.toolbar}),i.a.createElement(d.d,null,i.a.createElement(d.b,{path:"/commath-project/page2",component:U}),i.a.createElement(d.b,{path:"/commath-project/page3",component:Y}),i.a.createElement(d.b,{path:"/commath-project/page4",component:Z}),i.a.createElement(d.b,{path:"/commath-project/page5",component:$}),i.a.createElement(d.b,{path:"/commath-project/page6",component:_}),i.a.createElement(d.b,{path:"/commath-project/page1",component:Q}),i.a.createElement(d.b,{path:"/commath-project"},i.a.createElement(d.a,{to:"/commath-project/page1"})))))))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(be,null)),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.d317ee35.chunk.js.map