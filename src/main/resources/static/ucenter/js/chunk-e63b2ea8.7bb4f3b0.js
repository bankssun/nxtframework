(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e63b2ea8"],{3995:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flow"},[s("div",{staticClass:"flow-item"},[s("img",{staticClass:"flow-icon",attrs:{src:t.icon}}),s("p",{staticClass:"title"},[t._v(t._s(t.title))]),t.arrorImg?s("img",{staticClass:"flow-arror",attrs:{src:t.arrorImg,alt:""}}):t._e()]),s("div",{staticClass:"time"},[t._v(t._s(t.time))])])},a=[],l={props:{icon:{type:String,default:""},arrorImg:{type:String,default:""},title:{type:String,default:""},time:{type:String,default:""}}},c=l,n=(s("53e7"),s("2877")),o=Object(n["a"])(c,i,a,!1,null,"1d91f81c",null);e["a"]=o.exports},4732:function(t,e,s){},"53e7":function(t,e,s){"use strict";s("609d")},5950:function(t,e,s){"use strict";s("4732")},"609d":function(t,e,s){},"658fc":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address-page"},[s("div",{staticClass:"flow-card"},t._l(t.flow,(function(t,e){return s("Flow",{key:e,attrs:{icon:t.icon,arrorImg:t.arrorImg,title:t.title,time:t.time}})})),1),s("Order"),s("div",{staticClass:"info-card"},[s("div",{staticClass:"content",staticStyle:{"margin-top":"30px"}},[s("div",{staticClass:"item"},[s("p",{staticClass:"title"},[t._v("退货原因：")]),1==t.state?s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1):s("p",{staticClass:"content-p"},[t._v("sssss@aaa.com")])],1),s("div",{staticClass:"item"},[s("p",{staticClass:"title"},[t._v("问题描述：:")]),1==t.state?s("el-input",{staticStyle:{width:"700px"},attrs:{type:"textarea",rows:6,resize:"none"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}}):s("p",{staticClass:"content-p"},[t._v("张三")])],1),s("div",{staticClass:"item"},[s("p",{staticClass:"title"},[t._v("图片信息：")]),s("div",{staticClass:"row"},[t._l(t.imgarr,(function(t,e){return s("div",{key:e,staticClass:"blacks"},[s("el-avatar",{attrs:{shape:"square",size:60,src:t}})],1)})),1==t.state?s("div",{staticClass:"upload-item"},[s("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"auto-upload":!1}},[s("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("上传到服务器")]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1):t._e()],2)]),3==t.state?s("div",{staticClass:"item"},[s("p",{staticClass:"title"},[t._v("图片信息：")]),s("p",{staticClass:"content-p"},[t._v(t._s(t.valuePay))]),s("p",{staticClass:"title",staticStyle:{"margin-left":"200px"}},[t._v("运单号码：")]),s("p",{staticClass:"content-p"},[t._v(t._s(t.valuePay))])]):t._e()])])],1)},a=[],l=s("5530"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order"},[s("div",{staticClass:"title"},[s("p",[t._v(t._s(t.time))]),s("p",{staticStyle:{"margin-left":"20px"}},[t._v("订单号: "+t._s(t.orderId))])]),s("div",{staticClass:"content"},[s("div",{staticClass:"product-list"},t._l(t.Lists,(function(e,i){return s("div",{key:i,staticClass:"product"},[s("div",{staticStyle:{width:"80px","align-self":"center","text-align":"center"}},[s("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:t.isChecked,expression:"isChecked"}],staticStyle:{"align-self":"center"},model:{value:e.checked,callback:function(s){t.$set(e,"checked",s)},expression:"item.checked"}})],1),s("img",{attrs:{src:e.img,alt:""}}),s("div",{staticClass:"product-content"},[s("p",{staticClass:"product-name"},[t._v(t._s(e.title))]),s("div",{staticClass:"product-arr"},t._l(e.arr,(function(e,i){return s("div",{key:i,staticClass:"arr-item"},[t._v(" "+t._s(e.key)+" "+t._s(e.value)+" ")])})),0)]),s("p",{staticClass:"num"},[t._v("x"+t._s(e.num))]),s("div",{staticStyle:{width:"160px","align-items":"self-end",display:"flex"}},[s("el-input-number",{directives:[{name:"show",rawName:"v-show",value:t.isChecked,expression:"isChecked"}],staticStyle:{"align-self":"flex-end"},attrs:{min:0,max:e.num},model:{value:e.sum,callback:function(s){t.$set(e,"sum",s)},expression:"item.sum"}})],1),s("p",{staticClass:"num"},[t._v(" "+t._s(t._f("price")(e.price)))])])})),0),s("div",{staticClass:"row"},[s("p",[t._v(t._s(t.total))])])])])},n=[],o=(s("d81d"),s("a9e3"),{props:{id:{default:1,type:Number},time:{default:"2020-10-31 20:53:17",type:String},orderId:{default:"21312312312312",type:String},Lists:{default:function(){return[{checked:!0,img:"/image/login.png",title:"扫地机器人 智能家电 ",num:2,sum:1,price:13,arr:[{key:"颜色",value:"白色"}]},{checked:!1,img:"/image/login.png",title:"扫地机器人 智能家电 ",price:133,num:1,sum:1,arr:[{key:"颜色",value:"白色"}]}]},type:Array},price:{default:30.01,type:Number},state:{default:1,type:Number},isChecked:{default:!0,type:Boolean}},computed:{total:function(){var t=0;return this.Lists.map((function(e){e.checked&&(t+=e.sum*e.price)})),"$"+t}},filters:{state:function(t){return t?1==t?"已完成":void 0:""},price:function(t){return"￥"+t}},methods:{handleDetail:function(){this.$router.push("/detail")}}}),r=o,u=(s("5950"),s("2877")),d=Object(u["a"])(r,c,n,!1,null,"a2c0dbc0",null),p=d.exports,m=s("3995"),A=s("2f62"),f={data:function(){return{loginForm:{username:"",password:""},labelPosition:"top",value:11,payType:[],desc:"",imgarr:["/image/login.png","/image/login.png","/image/login.png"],options:[],valuePay:"微信",state:2,fileList:[],flow:[{title:"申请退货",icon:s("cf8c"),arrorImg:s("eaba"),time:"2020-10-30 20:53:17"},{title:"等待受理",icon:s("cf8c"),arrorImg:s("eaba"),time:"2020-10-30 20:53:17"},{title:"买家退货",icon:s("cf8c"),arrorImg:s("eaba"),time:"2020-10-30 20:53:17"},{title:"收到退货",icon:s("cf8c"),arrorImg:s("eaba"),time:""},{title:"退款完成",icon:s("cf8c"),arrorImg:"",time:""}]}},components:{Order:p,Flow:m["a"]},computed:Object(l["a"])({},Object(A["b"])({cartProductList:"productList"})),watch:{orderState:function(){clearInterval(this.debouncedGetAnswer)}},created:function(){console.log("sss")},mounted:function(){},beforeDestroy:function(){clearInterval(this.debouncedGetAnswer)},methods:{changePayType:function(t){console.log(t)},handleGoInfo:function(){this.$router.push("/info")},submitUpload:function(){this.$refs.upload.submit()},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)}}},g=f,v=(s("7ee1"),Object(u["a"])(g,i,a,!1,null,"308ff2c0",null));e["default"]=v.exports},"77d5":function(t,e,s){},"7ee1":function(t,e,s){"use strict";s("77d5")},cf8c:function(t,e){t.exports="data:image/png;base64,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"},eaba:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABkUlEQVR4Xu3XMU7EMBAF0LFzAWpooKXjILS00DnuuAFLTQGd4wrEEfYO9BxhC0TNCWyUAgntRilmbcse/20jbzxv/jiyos5/qvP6CQBIQOcCGIHOA4BDECOAEehcACPQeQDwFcAIYAQqFfDe3xPRrVLqJ4TwOo7je46tVjkCzrnzYRg+Yoynf0WHEB6ttZvUCLUCbLTWD/vF5kCoFeBMa/211O3UCFUCzIU75xZTMD9LiVAtQCmEqgFKIFQPkBuhCYCcCM0A5EJoCiAHQnMAqRGaBEiJ0CxAKoSmAVIgNA9wLIIIgGMQFgGmabqMMd6kvnuX+L+la/TaBeoAwDl3p7V+JqKTEhsu+Y6lW+QBgPd+S0TXJTdW8F07Y8zF//f1BvBpjLlaBZA6Akqp7xjjkzHmZRVgftjyIbgyTm/W2t3+czGfQe45AgCunJR1SICUTnLrQAK4clLWIQFSOsmtAwngyklZhwRI6SS3DiSAKydlHRIgpZPcOpAArpyUdUiAlE5y60ACuHJS1iEBUjrJreMX8Ia6Qa+WpwcAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-e63b2ea8.7bb4f3b0.js.map