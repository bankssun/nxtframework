(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d17fbfbc"],{1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination"},[a("div",{staticClass:"prov",on:{click:function(e){return t.handleNumber(-1)}}},[t._v(" 上一页 ")]),a("div",{staticClass:"number"},[t._v(t._s(t.number)+"/3")]),a("div",{staticClass:"next",on:{click:function(e){return t.handleNumber(1)}}},[t._v("下一页")])])},n=[],r=(a("a9e3"),{props:{number:{type:Number,default:1},item:{type:Number,default:0}},methods:{handleNumber:function(t){this.$emit("handleNumber",{number:this.number+t,item:this.item})}}}),s=r,l=(a("8f77"),a("2877")),u=Object(l["a"])(s,i,n,!1,null,"435d5174",null);e["a"]=u.exports},"24e6":function(t,e,a){},"60e2":function(t,e,a){"use strict";a("812f")},"812f":function(t,e,a){},"8f77":function(t,e,a){"use strict";a("24e6")},e23c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"全部订单",name:"first"}},[t._l(t.list,(function(t,e){return a("Order",{key:e,attrs:{Lists:t.orderFormProductList,amountFinally:t.amountFinally,datelineCreateReadable:t.datelineCreateReadable,id:t.id}})})),a("Pagination",{attrs:{number:t.number[0]},on:{handleNumber:function(e){return t.changeNumber(e)}}})],2),a("el-tab-pane",{attrs:{label:"待付款",name:"second"}},[t._v("待付款")]),a("el-tab-pane",{attrs:{label:"待收货",name:"third"}},[t._v("待收货")]),a("el-tab-pane",{attrs:{label:"待评价",name:"fourth"}},[t._v("待评价")])],1)},n=[],r=a("5530"),s=a("f510"),l=a("1799"),u=a("2f62"),c={data:function(){return{activeName:"first",number:[1,1,1,1]}},computed:Object(r["a"])({},Object(u["b"])({list:"orderList"})),components:{Order:s["a"],Pagination:l["a"]},created:function(){this.$store.dispatch("order/list",{offset:10*(this.number[0]-1),limit:10}),console.log(this.list)},methods:{handleClick:function(t,e){console.log(t,e)},changeNumber:function(t){this.number[t.item]=t.number,this.$store.dispatch("order/list",{offset:10*(this.number[0]-1),limit:10}),this.$forceUpdate()}}},o=c,d=a("2877"),m=Object(d["a"])(o,i,n,!1,null,null,null);e["default"]=m.exports},f510:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("div",{staticClass:"title"},[a("p",[t._v(t._s(t.datelineCreateReadable))]),a("p",{staticStyle:{"margin-left":"20px"}},[t._v("订单号: "+t._s(t.id))])]),a("div",{staticClass:"content"},[a("div",{staticClass:"product-list"},t._l(t.Lists,(function(e,i){return a("div",{key:i,staticClass:"product"},[a("img",{attrs:{src:e.picUrl,alt:""}}),a("div",{staticClass:"product-content"},[a("p",{staticClass:"product-name"},[t._v(t._s(e.productName))]),a("div",{staticClass:"product-arr"},t._l(e.productSku,(function(e,i){return a("div",{key:i,staticClass:"arr-item"},[t._v(" "+t._s(e.skuKeyName)+" "+t._s(e.skuValueName)+" ")])})),0)]),a("p",{staticClass:"num"},[t._v("x"+t._s(e.quantity))])])})),0),a("div",{staticClass:"row"},[a("p",[t._v(t._s(t._f("price")(t.amountFinally)))])]),a("div",{staticClass:"row"},[a("p",[t._v(t._s(t._f("state")(t.state)))]),a("div",{staticClass:"button",on:{click:function(e){return t.handleDetail()}}},[t._v("订单详情")])]),a("div",{staticClass:"row"},[a("div",[a("router-link",{attrs:{to:{path:"/",query:{orderid:this.id}}}},[t._v("评价")]),a("router-link",{attrs:{to:{path:"serive_detail",query:{orderid:this.id}}}},[t._v("申请售后")]),a("router-link",{attrs:{to:{path:"/",query:{orderid:this.id}}}},[t._v("再次购买")])],1)])])])},n=[],r=(a("a9e3"),{props:{id:{default:1,type:Number},datelineCreateReadable:{default:"2020-10-31 20:53:17",type:String},orderId:{default:"21312312312312",type:String},Lists:{default:function(){return[{picUrl:"/image/login.png",productName:"扫地机器人 智能家电 ",quantity:1,productSku:[{key:"颜色",value:"白色"}]},{picUrl:"/image/login.png",productName:"扫地机器人 智能家电 ",quantity:1,productSku:[{key:"颜色",value:"白色"}]}]},type:Array},amountFinally:{default:30.01,type:Number},state:{default:1,type:Number}},filters:{state:function(t){return t?1==t?"已完成":void 0:""},price:function(t){return"￥"+t}},methods:{handleDetail:function(){this.$router.push({path:"/detail",query:{id:this.id}})}}}),s=r,l=(a("60e2"),a("2877")),u=Object(l["a"])(s,i,n,!1,null,"201662f8",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-d17fbfbc.0709afe1.js.map