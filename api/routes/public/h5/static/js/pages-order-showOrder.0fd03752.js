(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-showOrder"],{"026f":function(t,i,e){"use strict";var a=e("d0b1"),n=e.n(a);n.a},"12ab":function(t,i,e){"use strict";e.r(i);var a=e("82fe"),n=e("bf96");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("026f");var s,l=e("f0c5"),c=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"396191fa",null,!1,a["a"],s);i["default"]=c.exports},"38d2":function(t,i,e){"use strict";var a=e("ee27");e("4160"),e("a9e3"),e("b680"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var n=a(e("c964")),o=a(e("3589")),s={data:function(){return{id:"",indentList:{},goodList:[],addressData:{},carriage:0,total:0,outPocket:0,order:[],onError:null}},onLoad:function(t){if(!t.id)return this.$api.msg("参数有误"),!1;this.id=t.id,this.getList()},methods:{getList:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return{},e=t,i.next=4,o.default.getDetails(t.id,(function(t){for(var i in t.goods_list)t.goods_list[i].good_sku&&(t.goods_list[i].good_sku.product_sku.forEach((function(e){t.goods_list[i].specification?t.goods_list[i].specification+=e.value+";":t.goods_list[i].specification=e.value+";"})),t.goods_list[i].specification=t.goods_list[i].specification.substr(0,t.goods_list[i].specification.length-1));e.indentList=t,e.calcTotal()}));case 4:case"end":return i.stop()}}),i)})))()},calcTotal:function(){var t=this.indentList.goods_list,i=0;t.forEach((function(t){i+=t.price*t.number})),this.total=Number(i.toFixed(2))},onSuccess:function(t){this.$api.msg("复制成功")},onError:function(t){this.$api.msg("复制失败")},confirmReceipt:function(t){var i=this;o.default.getReceipt(t.id,(function(t){i.getList()}))},stopPrevent:function(){}}};i.default=s},"74cd":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-396191fa]{background:#f8f8f8;padding-bottom:%?100?%}.address-section[data-v-396191fa]{padding:%?30?% 0;background:#fff;position:relative}.address-section .order-content[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-section .icon-shouhuodizhi[data-v-396191fa]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cuIcon-deliver[data-v-396191fa]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-396191fa]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-396191fa]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .icon-you[data-v-396191fa]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-396191fa]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.goods-section[data-v-396191fa]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .logo[data-v-396191fa]{display:block;width:%?50?%;height:%?50?%;border-radius:100px}.goods-section .name[data-v-396191fa]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-396191fa]{-webkit-flex-shrink:0;flex-shrink:0;display:block;width:%?140?%;height:%?140?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-396191fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?24?%;overflow:hidden}.goods-section .g-item .title[data-v-396191fa]{font-size:%?30?%;color:#303133}.goods-section .g-item .spec[data-v-396191fa]{font-size:%?26?%;color:#909399}.goods-section .g-item .price-box[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#303133;padding-top:%?10?%}.goods-section .g-item .price-box .price[data-v-396191fa]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-396191fa]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .step-box[data-v-396191fa]{position:relative}.yt-list[data-v-396191fa]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-396191fa]{background:#fafafa}.yt-list-cell.b-b[data-v-396191fa]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-396191fa]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-396191fa]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-396191fa]{background:#3ab54a}.yt-list-cell .cell-more[data-v-396191fa]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-396191fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-396191fa]{font-size:%?26?%;color:#303133}.yt-list-cell .cell-tip.disabled[data-v-396191fa]{color:#909399}.yt-list-cell .cell-tip.active[data-v-396191fa]{color:#fa436a}.yt-list-cell .cell-tip.red[data-v-396191fa]{color:#fa436a}.yt-list-cell.desc-cell .cell-tit[data-v-396191fa]{max-width:%?90?%}.yt-list-cell .desc[data-v-396191fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}\n/* 支付列表 */.pay-list[data-v-396191fa]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .icon-weixinzhifu[data-v-396191fa]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .icon-alipay[data-v-396191fa]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .icon-xuanzhong2[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%;color:#fa436a}.pay-list .tit[data-v-396191fa]{font-size:%?32?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.footer[data-v-396191fa]{position:fixed;left:0;bottom:0;z-index:995;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?90?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;color:#606266;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-396191fa]{padding-left:%?30?%}.footer .price-tip[data-v-396191fa]{color:#fa436a;margin-left:%?8?%}.footer .price[data-v-396191fa]{font-size:%?36?%;color:#fa436a}.footer .submit[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#fa436a}\n/* 优惠券面板 */.mask[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;-webkit-transition:.3s;transition:.3s}.mask .mask-content[data-v-396191fa]{width:100%;min-height:30vh;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s;overflow-y:scroll}.mask.none[data-v-396191fa]{display:none}.mask.show[data-v-396191fa]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-396191fa]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-396191fa]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-396191fa]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-396191fa]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-396191fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-396191fa]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-396191fa]:before{content:"￥";font-size:%?34?%}.coupon-item .tips[data-v-396191fa]{font-size:%?24?%;color:#909399;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-396191fa]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-396191fa]{left:auto;right:%?-6?%}body.?%PAGE?%[data-v-396191fa]{background:#f8f8f8}',""]),t.exports=i},"82fe":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.indentList.odd?e("v-uni-view",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.indentList.odd,expression:"indentList.odd",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onSuccess,expression:"onSuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"address-section"},[e("v-uni-view",{staticClass:"order-content"},[e("v-uni-text",{staticClass:"cuIcon-deliver"}),e("v-uni-view",{staticClass:"cen"},[t._v(t._s(t.indentList.odd))])],1)],1):t._e(),e("v-uni-view",{staticClass:"address-section"},[e("v-uni-view",{staticClass:"order-content"},[e("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"}),t.indentList.good_location?e("v-uni-view",{staticClass:"cen"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-text",{staticClass:"name"},[t._v(t._s(t.indentList.good_location.name))]),e("v-uni-text",{staticClass:"mobile"},[t._v(t._s(t.indentList.good_location.cellphone))])],1),e("v-uni-text",{staticClass:"address"},[t._v(t._s(t.indentList.good_location.location)),t.indentList.good_location.address?[t._v("("+t._s(t.indentList.good_location.address)+")")]:t._e(),t._v(t._s(t.indentList.good_location.house))],2)],1):t._e()],1)],1),e("v-uni-view",{staticClass:"goods-section"},t._l(t.indentList.goods_list,(function(i,a){return e("v-uni-navigator",{key:a,staticClass:"g-item padding-top-sm",attrs:{url:"/pages/product/product?id="+i.good_id,"hover-class":"none"}},[e("v-uni-image",{attrs:{src:i.img,"lazy-load":!0}}),e("v-uni-view",{staticClass:"right"},[e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.name))]),e("v-uni-text",{staticClass:"spec"},[t._v(t._s(i.specification))]),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.price))]),e("v-uni-text",{staticClass:"number"},[t._v("x "+t._s(i.number))])],1)],1)],1)})),1),e("v-uni-view",{staticClass:"yt-list"},[e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("备注")]),e("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.indentList.remark?t.indentList.remark:""))])],1),e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商品金额")]),e("v-uni-text",{staticClass:"cell-tip"},[t._v("￥"+t._s(t._f("1000")(t.total)))])],1),e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("运费")]),e("v-uni-text",{staticClass:"cell-tip"},[t.indentList.carriage>0?[t._v(t._s(t._f("1000")(t.indentList.carriage)))]:[t._v("免运费")]],2)],1),e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("实付款")]),e("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t._f("1000")(t.indentList.total)))])],1),e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("订单号")]),e("v-uni-text",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.indentList.identification,expression:"indentList.identification",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onSuccess,expression:"onSuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"cell-tip"},[t._v(t._s(t.indentList.identification))])],1),e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("订单状态")]),e("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.indentList.state_show))])],1)],1),1===t.indentList.state||3===t.indentList.state?e("v-uni-view",{staticClass:"footer"},[e("v-uni-view",{staticClass:"price-content"}),1===t.indentList.state?e("v-uni-navigator",{staticClass:"submit",attrs:{url:"/pages/money/pay?id="+t.indentList.id,"hover-class":"none"}},[t._v("立即支付")]):3===t.indentList.state?e("v-uni-view",{staticClass:"submit",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.confirmReceipt(t.indentList)}}},[t._v("确认收货")]):t._e()],1):t._e()],1)},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},bf96:function(t,i,e){"use strict";e.r(i);var a=e("38d2"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},d0b1:function(t,i,e){var a=e("74cd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("77ffad4e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);