(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b20bab2"],{"11ac":function(t,e,r){t.exports=r.p+"img/project4.9b160326.jpeg"},"1b19":function(t,e,r){t.exports=r.p+"img/recentprojects.6268f9d5.png"},"297c":function(t,e,r){"use strict";r("a9e3");var a=r("2b0e"),i=(r("c7cd"),r("5530")),n=r("ade3"),s=(r("6ece"),r("0789")),o=r("a9ad"),c=r("fe6c");function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return a["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(n["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(n["a"])({},t,(function(t){this.internalLazyValue=t}))})}var d=l(),u=d,h=r("7560"),p=r("80d2"),g=r("58df"),f=Object(g["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),u,h["a"]),m=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(p["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(p["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(n["a"])(t,this.$vuetify.rtl?"right":"left",Object(p["d"])(this.normalizedValue,"%")),Object(n["a"])(t,"width",Object(p["d"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(i["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?s["a"]:s["b"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(p["d"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(p["i"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(p["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),v=m;e["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(v,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},3500:function(t,e,r){var a={"./project1.jpeg":"ad38","./project2.jpeg":"d3f4","./project3.jpeg":"9334","./project4.jpeg":"11ac"};function i(t){var e=n(t);return r(e)}function n(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="3500"},"35df":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"overflow-hidden",attrs:{id:"recent-projects"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"primary text-center pa-5 white--text",attrs:{cols:"12",md:"6"}},[a("base-bubble-1",{staticStyle:{transform:"rotate(180deg) translateX(25%)"}}),a("base-heading",[t._v(" Recent Projects ")]),a("base-text",{staticClass:"mb-5",staticStyle:{"font-weight":"200"}},[t._v(" *Click to learn more. ")]),a("br"),a("v-card",{attrs:{color:"secondary"}},[a("v-container",{staticClass:"pa-2"},[a("v-row",t._l(t.projects,(function(t,e){return a("v-col",{key:e,attrs:{cols:"12",md:"6"}},[a("a",{attrs:{href:t.link,target:"_blank"}},[a("v-img",{attrs:{src:r("3500")("./"+t.image+".jpeg"),"max-height":"300"}})],1)])})),1)],1)],1)],1),a("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"6"}},[a("v-img",{attrs:{src:r("1b19"),height:"100%"}})],1)],1)],1)},i=[],n={name:"RecentProjects",data:function(){return{projects:[{image:"project1",link:"https://github.com/Enkel-Digital/"},{image:"project2",link:"https://github.com/icecreamforfree/robot-cone"},{image:"project3",link:"https://github.com/icecreamforfree/robot-aglioolio/"},{image:"project4",link:"https://github.com/Enkel-Digital/class-express-app"}]}}},s=n,o=r("2877"),c=r("6544"),l=r.n(c),d=(r("0481"),r("4069"),r("a9e3"),r("5530")),u=(r("615b"),r("10d2")),h=r("297c"),p=r("1c87"),g=r("58df"),f=Object(g["a"])(h["a"],p["a"],u["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({"v-card":!0},p["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},u["a"].options.computed.classes.call(this))},styles:function(){var t=Object(d["a"])({},u["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=h["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}}),m=r("62ad"),v=(r("99af"),r("4de4"),r("b64b"),r("2ca0"),r("20f6"),r("4b85"),r("a15b"),r("498a"),r("2b0e"));function b(t){return v["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var a=r.props,i=r.data,n=r.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var s=i.attrs;if(s){i.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,n)}})}var y=r("d9f7"),_=b("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,a=e.props,i=e.data,n=e.children,s=i.attrs;return s&&(i.attrs={},r=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),t(a.tag,Object(y["a"])(i,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(r||[])}),n)}}),j=r("adda"),k=r("0fd9"),C=Object(o["a"])(s,a,i,!1,null,null,null);e["default"]=C.exports;l()(C,{VCard:f,VCol:m["a"],VContainer:_,VImg:j["a"],VRow:k["a"]})},"615b":function(t,e,r){},"6ece":function(t,e,r){},9334:function(t,e,r){t.exports=r.p+"img/project3.7ca3240e.jpeg"},ad38:function(t,e,r){t.exports=r.p+"img/project1.91e09c32.jpeg"},d3f4:function(t,e,r){t.exports=r.p+"img/project2.58f350aa.jpeg"}}]);
//# sourceMappingURL=chunk-7b20bab2.e1508ef2.js.map