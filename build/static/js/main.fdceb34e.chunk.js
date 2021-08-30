(this["webpackJsonpreact-rmdb-v3"]=this["webpackJsonpreact-rmdb-v3"]||[]).push([[0],{35:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o=t(1),s=t.n(o),d=t(19),u=t.n(d),p=t(10),b=t(4),l=t.p+"static/media/react-movie-logo.42955eb6.svg",h=t.p+"static/media/tmdb_logo.f15b6632.svg",x=t(2),j=t(3),m=j.b.div(r||(r=Object(x.a)(["\n  background: var(--darkGrey);\n  padding: 0 20px;\n  display: flex;\n  justify-content: center;\n  /* height: 17vh; */\n"]))),f=j.b.div(a||(a=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: var(--maxWidth);\n  width: 100%;\n  padding: 20px 20px;\n  /* margin: 0 auto; */\n"]))),g=j.b.img(c||(c=Object(x.a)(["\n  width: 200px;\n\n  @media screen and (max-width: 500px) {\n    width: 150px;\n  }\n"]))),v=j.b.img(i||(i=Object(x.a)(["\n  width: 150px;\n\n  @media screen and (max-width: 500px) {\n    width: 100px;\n  }\n"]))),O=t(0),w=function(){return Object(O.jsx)(m,{children:Object(O.jsxs)(f,{children:[Object(O.jsx)(p.b,{to:"/",children:Object(O.jsx)(g,{src:l,alt:"rmdb-logo"})}),Object(O.jsx)(v,{src:h,alt:"tmdb-logo"})]})})},y="https://api.themoviedb.org/3/",k="9da8a25d62717ce59ed74a5bfc9ce52a";console.log("key",k);var S,_,z,T,G,M,I,B,N,C,E,W,J,R,F,U,q,A,P,D,H,L="".concat(y,"search/movie?api_key=").concat(k,"&language=en-US&query="),K="".concat(y,"movie/popular?api_key=").concat(k,"&language=en-US"),Q="".concat(y,"authentication/token/new?api_key=").concat(k),V="".concat(y,"authentication/token/validate_with_login?api_key=").concat(k),X="".concat(y,"authentication/session/new?api_key=").concat(k),Y="http://image.tmdb.org/t/p/",Z="original",$="w780",nn=j.b.div(S||(S=Object(x.a)(["\n  width: 100%;\n  background: linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0) 20%,\n      rgba(0, 0, 0, 0.65) 100%\n    ),\n    url(","), var(--darkGrey);\n  /* background: url(","), var(--darkGrey); */\n  background-size: 100%, cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 85vh;\n  position: relative;\n  padding: 40px;\n\n  animation: animateHeroImage 1s;\n\n  @keyframes animateHeroImage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.image}),(function(n){return n.image})),en=j.b.div(_||(_=Object(x.a)(["\n  margin: 0 auto;\n  max-width: var(--maxWidth);\n"]))),tn=j.b.div(z||(z=Object(x.a)(["\n  z-index: 100;\n  max-width: 700px;\n  position: absolute;\n  bottom: 60px;\n  margin-right: 20px;\n  min-height: 100px;\n  color: var(--white);\n\n  h1 {\n    font-size: var(--fontSuperBig);\n\n    @media screen and (max-width: 720px) {\n      font-size: var(--fontBig);\n    }\n  }\n\n  p {\n    font-size: var(--fontMed);\n\n    @media screen and (max-width: 720px) {\n      font-size: var(--fontSmall);\n    }\n  }\n\n  @media screen and (max-width: 720px) {\n    max-width: 100%;\n  }\n"]))),rn=function(n){var e=n.image,t=n.title,r=n.text;return console.log(e),Object(O.jsx)(nn,{image:e,children:Object(O.jsx)(en,{children:Object(O.jsxs)(tn,{children:[Object(O.jsx)("h1",{children:t}),Object(O.jsx)("p",{children:r})]})})})},an=j.b.div(T||(T=Object(x.a)(["\n  margin: 0;\n  padding: 0 40px;\n\n  h1 {\n    max-width: var(--maxWidth);\n    margin: 21.5px auto;\n    color: var(--medGrey);\n    @media screen and (max-width: 720px) {\n      font-size: var(--fontBig);\n    }\n  }\n"]))),cn=j.b.div(G||(G=Object(x.a)(["\n  width: 100%;\n  margin: 0 auto;\n  max-width: var(--maxWidth);\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 2rem;\n"]))),on=function(n){var e=n.header,t=n.children;return Object(O.jsxs)(an,{children:[Object(O.jsx)("h1",{children:e}),Object(O.jsx)(cn,{children:t})]})},sn=j.b.img(M||(M=Object(x.a)(["\n  width: 100%;\n  max-width: 720px;\n  border-radius: 15px;\n  transition: all 0.3s;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  animation: animateThumb 0.5s;\n\n  @keyframes animateThumb {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]))),dn=function(n){var e=n.image,t=n.movieId,r=n.clickable;return Object(O.jsx)(O.Fragment,{children:r?Object(O.jsx)(p.b,{to:"/".concat(t),children:Object(O.jsx)(sn,{src:e,alt:"movie-thumb"})}):Object(O.jsx)(sn,{src:e,alt:"movie-thumb"})})},un=j.b.div(I||(I=Object(x.a)(["\n  border: 5px solid var(--lightGrey);\n  border-top: 5px solid var(--medGrey);\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin: 20px auto;\n\n  animation: spin 1s linear infinite;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),pn=t(7),bn=t.p+"static/media/search-icon.cd820f5a.svg",ln=j.b.div(B||(B=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 40px;\n  background: var(--darkGrey);\n"]))),hn=j.b.div(N||(N=Object(x.a)(["\n  display: flex;\n  background: var(--medGrey);\n  width: 100%;\n  max-width: var(--maxWidth);\n  height: 55px;\n  margin: 20px 0;\n  border-radius: 100px;\n  padding: 5px 10px;\n\n  img {\n    width: 30px;\n    margin: 0 10px;\n  }\n\n  input {\n    background: none;\n    color: white;\n    border: none;\n    width: 100%;\n    font-size: var(--fontBig);\n  }\n\n  input:focus {\n    outline: none;\n  }\n"]))),xn=function(n){var e=n.setSearchTerm,t=Object(o.useState)(""),r=Object(pn.a)(t,2),a=r[0],c=r[1],i=Object(o.useRef)(!0);return Object(o.useEffect)((function(){if(!i.current){var n=setTimeout((function(){e(a)}),500);return function(){return clearTimeout(n)}}i.current=!1}),[e,a]),Object(O.jsx)(ln,{children:Object(O.jsxs)(hn,{children:[Object(O.jsx)("img",{src:bn,alt:"search-icon"}),Object(O.jsx)("input",{type:"text",placeholder:"Search Movie",onChange:function(n){return c(n.currentTarget.value)},value:a})]})})},jn=j.b.button(C||(C=Object(x.a)(["\n  display: block;\n  width: 25%;\n  min-width: 200px;\n  height: 60px;\n  margin: 20px auto;\n  background: var(--darkGrey);\n  font-size: var(--fontBig);\n  border-radius: 100px;\n  border: none;\n  color: white;\n  transition: all 0.3s;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  animation: animateButton 0.5s;\n\n  @keyframes animateButton {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]))),mn=function(n){var e=n.text,t=n.callBack;return Object(O.jsx)(jn,{type:"button",onClick:t,children:e})},fn=t(5),gn=t.n(fn),vn=t(13),On=t(6),wn=t(8),yn={method:"POST",headers:{"Content-Type":"application/json"}},kn={fetchMovies:function(){var n=Object(wn.a)(gn.a.mark((function n(e,t){var r;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=""!==e?"".concat(L).concat(e,"&page=").concat(t):"".concat(K,"&page=").concat(t),console.log(e),console.log(r),n.next=5,fetch(r);case 5:return n.next=7,n.sent.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(wn.a)(gn.a.mark((function n(e){var t;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(y,"movie/").concat(e,"?api_key=").concat(k),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(wn.a)(gn.a.mark((function n(e){var t;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(y,"movie/").concat(e,"/credits?api_key=").concat(k),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getRequestToken:function(){var n=Object(wn.a)(gn.a.mark((function n(){var e;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(Q);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),authenticate:function(){var n=Object(wn.a)(gn.a.mark((function n(e,t,r){var a,c;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={username:t,password:r,request_token:e},n.next=3,fetch(V,Object(On.a)(Object(On.a)({},yn),{},{body:JSON.stringify(a)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(X,Object(On.a)(Object(On.a)({},yn),{},{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return c=n.sent,n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),rateMovie:function(){var n=Object(wn.a)(gn.a.mark((function n(e,t,r){var a,c;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="".concat(y,"movie/").concat(t,"/rating?api_key=").concat(k,"&session_id=").concat(e),n.next=3,fetch(a,Object(On.a)(Object(On.a)({},yn),{},{body:JSON.stringify({value:r})}));case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},Sn=function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")},_n=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:0}).format(n)},zn=function(n){var e=sessionStorage.getItem(n);return e&&JSON.parse(e)},Tn={page:0,results:[],total_pages:0,total_results:0},Gn=t.p+"static/media/no_image.22d2aa4d.jpg",Mn=function(){var n=function(){var n=Object(o.useState)(""),e=Object(pn.a)(n,2),t=e[0],r=e[1],a=Object(o.useState)(Tn),c=Object(pn.a)(a,2),i=c[0],s=c[1],d=Object(o.useState)(!1),u=Object(pn.a)(d,2),p=u[0],b=u[1],l=Object(o.useState)(!1),h=Object(pn.a)(l,2),x=h[0],j=h[1],m=Object(o.useState)(!1),f=Object(pn.a)(m,2),g=f[0],v=f[1];console.log("Search Term:",t);var O=function(){var n=Object(wn.a)(gn.a.mark((function n(){var e,t,r,a=arguments;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1?a[1]:void 0,n.prev=2,j(!1),b(!0),n.next=7,kn.fetchMovies(e,t);case 7:r=n.sent,s((function(n){return Object(On.a)(Object(On.a)({},r),{},{results:t>1?[].concat(Object(vn.a)(n.results),Object(vn.a)(r.results)):Object(vn.a)(r.results)})})),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),j(!0);case 14:b(!1);case 15:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){if(!t){var n=zn("homeState");if(n)return void s(n)}s(Tn),O(t,1)}),[t]),Object(o.useEffect)((function(){g&&(O(t,i.page+1),console.log("Pages: ",i.page),v(!1))}),[g,t,i.page]),console.log(t),Object(o.useEffect)((function(){t||sessionStorage.setItem("homeState",JSON.stringify(i))}),[t,i]),{state:i,loading:p,error:x,searchTerm:t,setSearchTerm:r,setIsBtnClicked:v}}(),e=n.state,t=n.loading,r=n.error,a=n.searchTerm,c=n.setSearchTerm,i=n.setIsBtnClicked;return console.log(e),r?Object(O.jsx)("div",{children:"Something went wrong..."}):Object(O.jsxs)(O.Fragment,{children:[""===a?e.results[0]&&Object(O.jsx)(rn,{image:"".concat(Y).concat(Z).concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}):null,Object(O.jsx)(xn,{setSearchTerm:c}),Object(O.jsx)(on,{header:""===a?"Popular Movies":"Search Results",children:e.results.map((function(n){return Object(O.jsx)(dn,{clickable:!0,image:n.poster_path?"".concat(Y).concat($).concat(n.poster_path):Gn,movieId:n.id},n.id)}))}),t&&Object(O.jsx)(un,{}),e.page<e.total_pages&&!t&&Object(O.jsx)(mn,{text:"Load More",callBack:function(){return i(!0)}})]})},In=j.b.div(E||(E=Object(x.a)(["\n  background: var(--medGrey);\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  height: 80px;\n"]))),Bn=j.b.div(W||(W=Object(x.a)(["\n  display: flex;\n  color: white;\n  max-width: var(--maxWidth);\n  width: 100%;\n  padding: 0 20px;\n  margin: 0 auto;\n\n  span {\n    font-size: var(--fontMed);\n    padding-right: 10px;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n  }\n\n  @media screen and (max-width: 768px) {\n    font-size: var(--fontSmall);\n  }\n"]))),Nn=function(n){var e=n.movieTitle;return Object(O.jsx)(In,{children:Object(O.jsxs)(Bn,{children:[Object(O.jsx)(p.b,{to:"/",children:Object(O.jsx)("span",{children:"Home"})}),Object(O.jsx)("span",{children:" | "}),Object(O.jsx)("span",{children:e})]})})},Cn=j.b.div(J||(J=Object(x.a)(["\n  background: ",";\n  /* background: #000; */\n  background-size: cover;\n  background-position: center;\n  padding: 40px 40px;\n  margin: 0 auto;\n  width: 100%;\n  animation: animateMovieInfo 1s;\n\n  @keyframes animateMovieInfo {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){var e=n.backdrop;return e?"url(".concat(Y).concat(Z).concat(e,")"):"#000"})),En=j.b.div(R||(R=Object(x.a)(["\n  display: flex;\n  width: 100%;\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n  background: rgb(0, 0, 0, 0.7);\n  border-radius: 20px;\n\n  .thumb-div {\n    /* height: 100px; */\n    /* margin-top: -5px; */\n    margin-bottom: -5px;\n    flex-grow: 3;\n  }\n\n  .thumb-div img {\n    overflow: hidden;\n    /* margin: auto; */\n    /* flex-grow: 3; */\n    /* width: 500px;\n    height: 665px; */\n  }\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    max-height: none;\n  }\n"]))),Wn=j.b.div(F||(F=Object(x.a)(["\n  width: 100%;\n  padding: 20px;\n  color: var(--white);\n  overflow: hidden;\n  flex-grow: 1;\n\n  .rating-director {\n    display: flex;\n    justify-content: flex-start;\n    /* background: red; */\n  }\n\n  .score {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 35px;\n    height: 35px;\n    background: #fff;\n    color: #000;\n    font-weight: 800;\n    border-radius: 50%;\n    margin: 0;\n  }\n\n  .movie-overview {\n    font-size: var(--fontMed);\n  }\n\n  .director {\n    margin: 0 0 0 40px;\n\n    p {\n      font-size: var(--fontMed);\n      margin: 0;\n      padding-top: 5px;\n    }\n  }\n\n  h1 {\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontBig);\n    }\n  }\n"]))),Jn=function(n){var e=n.movie;return Object(O.jsx)(Cn,{backdrop:e.backdrop_path,children:Object(O.jsxs)(En,{children:[Object(O.jsx)("div",{className:"thumb-div",children:Object(O.jsx)(dn,{className:"content-thumb",image:e.poster_path?"".concat(Y).concat($).concat(e.poster_path):Gn,clickable:!1})}),Object(O.jsxs)(Wn,{children:[Object(O.jsx)("h1",{children:e.title}),Object(O.jsx)("h3",{children:"PLOT"}),Object(O.jsx)("p",{className:"movie-overview",children:e.overview}),Object(O.jsxs)("div",{className:"rating-director",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"RATING"}),Object(O.jsx)("div",{className:"score",children:e.vote_average})]}),Object(O.jsxs)("div",{className:"director",children:[Object(O.jsxs)("h3",{children:["DIRECTOR",e.directors.length>1&&"S"]}),e.directors.map((function(n){return Object(O.jsx)("p",{children:n.name},n.credit_id)}))]})]})]})]})})},Rn=j.b.div(U||(U=Object(x.a)(["\n  background: var(--darkGrey);\n  width: 100%;\n  padding: 0 40px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .content-div {\n    display: flex;\n    max-width: var(--maxWidth);\n\n    width: 100%;\n    background: var(--darkGrey);\n    /* padding: 0 40px; */\n    /* margin: 0 40px; */\n    gap: 30px;\n    justify-content: space-between;\n    align-items: center;\n    /* margin: 0 auto; */\n\n    @media screen and (max-width: 768px) {\n      padding: 10px 40px;\n      display: block;\n    }\n  }\n"]))),Fn=j.b.div(q||(q=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--medGrey);\n  color: white;\n  height: 55px;\n  width: 100%;\n  margin: 20px 0;\n  border-radius: 100px;\n\n  span {\n    overflow: hidden;\n    font-size: var(--fontMed);\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontSmall);\n    }\n  }\n"]))),Un=function(n){var e=n.movie;return Object(O.jsx)(Rn,{children:Object(O.jsxs)("div",{className:"content-div",children:[Object(O.jsx)(Fn,{children:Object(O.jsxs)("span",{children:["Runtime: ",Sn(e.runtime)]})}),Object(O.jsx)(Fn,{children:Object(O.jsxs)("span",{children:["Budget: ",_n(e.budget)]})}),Object(O.jsx)(Fn,{children:Object(O.jsxs)("span",{children:["Box Office: ",_n(e.revenue)]})})]})})},qn=j.b.div(A||(A=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: 1px solid var(--lightGrey);\n  overflow: hidden;\n  box-shadow: 2px 6px 16px -5px rgba(0, 0, 0, 0.46);\n  width: 100%;\n  border-radius: 15px;\n  padding-bottom: 10px;\n  background-color: var(--medGrey);\n  color: white;\n"]))),An=j.b.img(P||(P=Object(x.a)(["\n  width: 100%;\n  transition: all 0.3s;\n  height: 200px;\n  object-fit: cover;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  animation: animateActor 0.5s;\n\n  @keyframes animateActor {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]))),Pn=j.b.div(D||(D=Object(x.a)(["\n  font-weight: bolder;\n  margin: 0;\n\n  h3 {\n    margin: 15px 10px 0 10px;\n    /* margin-top: 10px;\n    margin-left: 10px;\n    margin-right: 10px; */\n  }\n\n  p {\n    margin-top: 6px;\n    margin-left: 10px;\n    margin-right: 10px;\n    font-weight: lighter;\n    /* color: black; */\n  }\n"]))),Dn=function(n){var e=n.name,t=n.character,r=n.imageUrl;return Object(O.jsxs)(qn,{children:[Object(O.jsx)(An,{src:r,alt:"actor-thumbnail-image"}),Object(O.jsxs)(Pn,{children:[Object(O.jsx)("h3",{children:e}),Object(O.jsx)("p",{children:t})]})]})},Hn=function(){var n=function(n){var e=Object(o.useState)({}),t=Object(pn.a)(e,2),r=t[0],a=t[1],c=Object(o.useState)(!0),i=Object(pn.a)(c,2),s=i[0],d=i[1],u=Object(o.useState)(!1),p=Object(pn.a)(u,2),b=p[0],l=p[1];return console.log("Movie state: ",r),Object(o.useEffect)((function(){var e=function(){var e=Object(wn.a)(gn.a.mark((function e(){var t,r,c;return gn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),l(!1),e.next=5,kn.fetchMovie(n);case 5:return t=e.sent,e.next=8,kn.fetchCredits(n);case 8:r=e.sent,c=r.crew.filter((function(n){return"Director"===n.job})),a(Object(On.a)(Object(On.a)({},t),{},{actors:r.cast,directors:c})),d(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),l(!0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),t=zn(n);if(console.log(t),t)return a(t),void d(!1);e()}),[n]),Object(o.useEffect)((function(){sessionStorage.setItem(n,JSON.stringify(r))}),[n,r]),{state:r,loading:s,error:b}}(Object(b.h)().movieId),e=n.state,t=n.loading,r=n.error;return console.log(e),t?Object(O.jsx)(un,{}):r?Object(O.jsx)("div",{children:"Something went wrong..."}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Nn,{movieTitle:e.original_title}),Object(O.jsx)(Jn,{movie:e}),Object(O.jsx)(Un,{movie:e}),Object(O.jsx)(on,{header:"Cast",children:e.actors.map((function(n){return Object(O.jsx)(Dn,{clickable:!0,name:n.name,character:n.character,imageUrl:n.profile_path?"".concat(Y).concat($).concat(n.profile_path):Gn,movieId:n.id},n.id)}))})]})},Ln=function(){return Object(O.jsx)("div",{children:"NotFound"})},Kn=Object(j.a)(H||(H=Object(x.a)(["\n  :root {\n    --maxWidth: 1280px; \n    --white: #fff;\n    --lightGrey: #eee;\n    --medGrey: #353535; \n    --darkGrey: #1c1c1c;\n    --fontSuperBig: 2.5rem;\n    --fontBig: 1.5rem;\n    --fontMed: 1.2rem;\n    --fontSmall: 1rem;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Abel', sans-serif;  \n  }\n\n  body {  \n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    h1 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: var(--white);\n    }\n\n    h3 {\n      font-size: 1.1rem;\n      font-weight: 600;\n    }\n\n    p {\n      font-size: 1rem;\n      color: var(--white);\n    }\n  }\n"]))),Qn=function(){return Object(O.jsxs)(p.a,{children:[Object(O.jsx)(w,{}),Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/",element:Object(O.jsx)(Mn,{})}),Object(O.jsx)(b.a,{path:"/:movieId",element:Object(O.jsx)(Hn,{})}),Object(O.jsx)(b.a,{path:"/*",element:Object(O.jsx)(Ln,{})})]}),Object(O.jsx)(Kn,{})]})};u.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(Qn,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fdceb34e.chunk.js.map