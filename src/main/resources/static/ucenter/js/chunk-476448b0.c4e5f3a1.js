(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-476448b0"],{"185c":function(t,e,i){},"19f7":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"address-page"},[i("div",{staticClass:"flow-card"},t._l(t.flow,(function(t,e){return i("Flow",{key:e,attrs:{icon:t.icon,arrorImg:t.arrorImg,title:t.title,time:t.time}})})),1),i("div",{staticClass:"info-card"},[i("div",{staticClass:"info-title"},[t._v(" 收货信息 ")]),i("div",{staticClass:"content",staticStyle:{"margin-top":"10px"}},[t._m(0),i("div",{staticClass:"item"},[i("p",{staticClass:"title"},[t._v("姓名:")]),i("p",{staticClass:"content-p"},[t._v(t._s(t.deliveryPerson))])]),i("div",{staticClass:"item"},[i("p",{staticClass:"title"},[t._v("收货地址：")]),i("p",{staticClass:"content-p"},[t._v(t._s(t.deliveryCountry)+" , "+t._s(t.deliveryProvince)+" , "+t._s(t.deliveryCity)+" , "+t._s(t.deliveryAddress))])]),i("div",{staticClass:"item"},[i("p",{staticClass:"title"},[t._v("联系电话：")]),i("p",{staticClass:"content-p"},[t._v(t._s(t.deliveryPhone))])]),i("div",{staticClass:"item"},[i("p",{staticClass:"title"},[t._v("支付方式：")]),i("p",{staticClass:"content-p"},[t._v(t._s(t.valuePay))])]),i("div",{staticClass:"item"},[i("p",{staticClass:"title"},[t._v("配送方式：")]),i("p",{staticClass:"content-p"},[t._v(t._s(t.deliveryConfigName))])]),i("div",{staticClass:"item"},[i("p",{staticClass:"title"},[t._v("备注：")]),i("p",{staticClass:"content-p"},[t._v(t._s(t.deliveryRemark))])])])]),i("div",{staticClass:"info-card"},[i("div",{staticClass:"info-title"},[t._v(" 商品列表 ")]),i("div",{staticClass:"content"},[t._m(1),t._l(t.productList,(function(t,e){return i("Cart",{key:e,attrs:{id:t.id,name:t.productName,image:t.picUrl,skus:t.sku,price:t.productPrice,num:t.quantity,checkout:t.checkout,productId:t.productId}})})),i("div",{staticClass:"buy-info-item"},[i("p",{staticClass:"default-p"},[t._v("总计: ")]),i("span",{staticClass:"price-p"},[t._v("￥"+t._s(t.total))])])],2)])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("p",{staticClass:"title"},[t._v("邮箱：")]),i("p",{staticClass:"content-p"},[t._v("sssss@aaa.com")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart-list"},[i("div",{staticClass:"item",staticStyle:{width:"360px"}},[t._v(" 产品 ")]),i("div",{staticClass:"item",staticStyle:{width:"120px"}},[t._v(" 单价 ")]),i("div",{staticClass:"item",staticStyle:{width:"240px"}},[t._v(" 数量 ")]),i("div",{staticClass:"item",staticStyle:{width:"160px"}},[t._v(" 合计 ")])])}],r=(i("d81d"),i("5530")),c=i("cb44"),n=i("3995"),o=i("2f62"),l={data:function(){return{loginForm:{username:"",password:""},labelPosition:"top",value:11,payType:[],valuePay:"微信",state:1,flow:[{title:"提交订单",icon:i("cf8c"),arrorImg:i("eaba"),time:"2020-10-30 20:53:17"},{title:"付款",icon:i("cf8c"),arrorImg:i("eaba"),time:"2020-10-30 20:53:17"},{title:"发货",icon:i("cf8c"),arrorImg:i("eaba"),time:"2020-10-30 20:53:17"},{title:"等待收货",icon:i("cf8c"),arrorImg:i("eaba"),time:"2020-10-30 20:53:17"},{title:"完成",icon:i("cf8c"),arrorImg:"",time:"2020-10-30 20:53:17"}]}},components:{Cart:c["a"],Flow:n["a"]},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])({orderId:function(t){return t.order.orderId},orderState:function(t){return t.order.orderState},deliveryCountry:function(t){return t.order.deliveryCountry},deliveryProvince:function(t){return t.order.deliveryProvince},deliveryCity:function(t){return t.order.deliveryCity},deliveryPerson:function(t){return t.order.deliveryPerson},deliveryRemark:function(t){return t.order.deliveryRemark},deliveryAddress:function(t){return t.order.deliveryAddress},deliveryPhone:function(t){return t.order.deliveryPhone},balance:function(t){return t.user.balance},productList:function(t){return t.order.productList},deliveryConfigName:function(t){return t.order.deliveryConfigName}})),{},{total:function(){var t=0;return this.productList.map((function(e){t+=e.productPrice*e.quantity})),t}}),watch:{orderState:function(){clearInterval(this.debouncedGetAnswer)}},created:function(){this.id=this.$route.query.id,this.$store.dispatch("order/detail",this.id),this.payType=[{img:i("6ed4"),title:"微信"},{img:i("060a"),title:"支付宝"},{img:i("dedf"),title:"Paypal"},{img:i("ef02"),title:"全额："+this.value}]},mounted:function(){},beforeDestroy:function(){clearInterval(this.debouncedGetAnswer)},methods:{changePayType:function(t){console.log(t)},handleGoInfo:function(){this.$router.push("/info")}}},d=l,u=(i("74c0"),i("aed9"),i("2877")),A=Object(u["a"])(d,s,a,!1,null,"134e96a1",null);e["default"]=A.exports},3995:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flow"},[i("div",{staticClass:"flow-item"},[i("img",{staticClass:"flow-icon",attrs:{src:t.icon}}),i("p",{staticClass:"title"},[t._v(t._s(t.title))]),t.arrorImg?i("img",{staticClass:"flow-arror",attrs:{src:t.arrorImg,alt:""}}):t._e()]),i("div",{staticClass:"time"},[t._v(t._s(t.time))])])},a=[],r={props:{icon:{type:String,default:""},arrorImg:{type:String,default:""},title:{type:String,default:""},time:{type:String,default:""}}},c=r,n=(i("8063"),i("2877")),o=Object(n["a"])(c,s,a,!1,null,"19573161",null);e["a"]=o.exports},"530c":function(t,e,i){},"74c0":function(t,e,i){"use strict";i("185c")},8063:function(t,e,i){"use strict";i("f31f")},aed9:function(t,e,i){"use strict";i("530c")},cf8c:function(t,e){t.exports="data:image/png;base64,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"},eaba:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABkUlEQVR4Xu3XMU7EMBAF0LFzAWpooKXjILS00DnuuAFLTQGd4wrEEfYO9BxhC0TNCWyUAgntRilmbcse/20jbzxv/jiyos5/qvP6CQBIQOcCGIHOA4BDECOAEehcACPQeQDwFcAIYAQqFfDe3xPRrVLqJ4TwOo7je46tVjkCzrnzYRg+Yoynf0WHEB6ttZvUCLUCbLTWD/vF5kCoFeBMa/211O3UCFUCzIU75xZTMD9LiVAtQCmEqgFKIFQPkBuhCYCcCM0A5EJoCiAHQnMAqRGaBEiJ0CxAKoSmAVIgNA9wLIIIgGMQFgGmabqMMd6kvnuX+L+la/TaBeoAwDl3p7V+JqKTEhsu+Y6lW+QBgPd+S0TXJTdW8F07Y8zF//f1BvBpjLlaBZA6Akqp7xjjkzHmZRVgftjyIbgyTm/W2t3+czGfQe45AgCunJR1SICUTnLrQAK4clLWIQFSOsmtAwngyklZhwRI6SS3DiSAKydlHRIgpZPcOpAArpyUdUiAlE5y60ACuHJS1iEBUjrJreMX8Ia6Qa+WpwcAAAAASUVORK5CYII="},f31f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-476448b0.c4e5f3a1.js.map