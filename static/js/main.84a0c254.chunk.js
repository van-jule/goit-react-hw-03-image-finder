(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={overlay:"Modal_overlay__kxf3u",modal:"Modal_modal__Tn8MW"}},12:function(e,t,a){e.exports={item:"ImageGalleryItem_item__2wQ-h",image:"ImageGalleryItem_image__3hj33"}},14:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__1z28u"}},16:function(e,t,a){e.exports={LoaderWrap:"UserLoader_LoaderWrap__337rg"}},17:function(e,t,a){e.exports={button:"Button_button__1fQy8"}},23:function(e,t,a){},24:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(23),a(3)),i=a(4),l=a(6),u=a(5),d=(a(24),a(18)),m=a(9),h=a.n(m),p=a(1),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.value;if(!a)return d.a.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441");e.props.onSubmit(a.trim()),e.setState({value:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.value;return Object(p.jsx)("header",{className:h.a.searchbar,children:Object(p.jsxs)("form",{className:h.a.searchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:h.a.searchFormButton,children:Object(p.jsx)("span",{className:h.a.searchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:h.a.searchFormInput,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component);f.defaultProps={onSubmit:function(){}};var b=f,g=a(13),j=(a(26),a(8)),v=a.n(j),O=a(2),x=a.n(O),y=a(14),_=a.n(y),S=a(12),C=a.n(S);function w(e){var t=e.src,a=e.alt,n=e.index,r=e.onClick;return Object(p.jsx)("li",{className:C.a.item,onClick:function(){return r({openModal:!0,openModalIndex:n})},children:Object(p.jsx)("img",{src:t,alt:a,className:C.a.image})})}function k(e){var t=e.images,a=e.onClick;return Object(p.jsx)("ul",{className:_.a.gallery,children:t.map((function(e,t){return Object(p.jsx)(w,{src:e.webformatURL,alt:e.tags,index:t,onClick:a},e.id)}))})}w.prototype={src:x.a.string.isRequired,alt:x.a.string.isRequired,index:x.a.number.isRequired,onClick:x.a.func.isRequired},w.defaultProps={src:"./",alt:"image",index:0,onClick:function(){}},k.prototype={images:x.a.array.isRequired,onClick:x.a.func.isRequired},k.defaultProps={images:[],onClick:function(){}};var E=a(15),I=a.n(E),M=a(16),N=a.n(M),L=function(){return Object(p.jsx)("div",{className:N.a.LoaderWrap,children:Object(p.jsx)(I.a,{type:"Puff",color:"#3f51b5",height:200,width:200,timeout:3e3})})};var D={fetchImages:function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("22993210-edd192b19fd9d2ee0b0d8e9c4","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return{images:e.hits,totalHits:e.totalHits}}))}},q=a.p+"static/media/error.a4faafb6.jpg";function F(e){var t=e.message;return Object(p.jsxs)("div",{role:"alert",className:v.a.wrap,children:[Object(p.jsx)("img",{className:v.a.image,src:q,width:"300",alt:"error"}),Object(p.jsx)("p",{className:v.a.text,children:t})]})}F.defaultProps={message:"\u041f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"};var R={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},H=a(17),V=a.n(H),B=function(e){var t=e.onClick;return Object(p.jsx)("button",{className:V.a.button,type:"button",onClick:t,children:"Load more..."})};B.defaultProps={onClick:function(){}};var P=B,T=a(10),J=a.n(T),K=document.querySelector("#modal-root"),W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.image,a=e.closeModal;return Object(o.createPortal)(Object(p.jsx)("div",{className:J.a.overlay,onClick:a,children:Object(p.jsx)("div",{className:J.a.modal,children:Object(p.jsx)("img",{className:J.a.image,src:t.largeImageURL,alt:t.tags})})}),K)}}]),a}(n.Component);W.defaultProps={closeModal:function(){},image:null};var A=W,G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:null,page:1,openModal:!1,openModalIndex:void 0,status:R.IDLE,scrollHeight:0,totalHits:null},e.loadMore=function(){var t=e.state.page;D.fetchImages(e.props.queryValue,t+1).then((function(a){var n=a.images;e.setState((function(e){return{images:[].concat(Object(g.a)(e.images),Object(g.a)(n)),status:R.RESOLVED,scrollHeight:document.documentElement.scrollHeight-150,page:t+1}}))})).catch((function(t){return e.setState({error:t,status:R.REJECTED})}))},e.closeModal=function(t){console.log(e.state.scrollHeight),t.currentTarget===t.target&&e.setState({openModal:!1})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.queryValue,r=this.props.queryValue;n!==r&&(this.setState({status:R.PENDING,page:1,scrollHeight:0}),setTimeout((function(){D.fetchImages(r).then((function(e){var t=e.images,n=e.totalHits;a.setState({images:t,status:t.length>0?R.RESOLVED:R.REJECTED,totalHits:n})})).catch((function(e){return a.setState({error:e,status:R.REJECTED})}))}),500)),t.openModal===this.state.openModal&&window.scrollTo({top:this.state.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.status,r=t.openModal,o=t.openModalIndex,c=t.page,s=t.totalHits;return"idle"===n?Object(p.jsx)("p",{className:v.a.text,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441"}):"pending"===n?Object(p.jsx)(L,{}):"rejected"===n?Object(p.jsx)(F,{}):"resolved"===n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{images:a,onClick:function(t){return e.setState(t)}}),a.length>0&&c!==Math.ceil(s/12)&&Object(p.jsx)(P,{onClick:this.loadMore}),r&&Object(p.jsx)(A,{closeModal:this.closeModal,image:a[o]})]}):void 0}}]),a}(n.Component),U=G,Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={queryValue:""},e.handleFormSubmit=function(t){return e.setState({queryValue:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.queryValue,t=this.handleFormSubmit;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{onSubmit:t}),Object(p.jsx)(U,{queryValue:e})]})}}]),a}(n.Component),z=Q;c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={wrap:"ImageStateCar_wrap__1TfqK",text:"ImageStateCar_text__1aKQ0",image:"ImageStateCar_image__3bvYl"}},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__5wBfr",searchForm:"Searchbar_searchForm__3X0uY",searchFormButton:"Searchbar_searchFormButton__3Wti5",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__1Bmut",searchFormInput:"Searchbar_searchFormInput__13RVK"}}},[[47,1,2]]]);
//# sourceMappingURL=main.84a0c254.chunk.js.map