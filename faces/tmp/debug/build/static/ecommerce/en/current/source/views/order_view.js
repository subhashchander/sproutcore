// ==========================================================================
// Project:   Ecommerce.OrderView
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Ecommerce.OrderView = SC.View.extend(
/** @scope Ecommerce.OrderView.prototype */ {

   layout: {left: 10, right:10, bottom:10, width:300, maxWidth: 300, minWidth:200},
 
  childViews: 'removeButton nameLabel priceLabel price quantityLabel quantity'.w(),
  
  removeButton: SC.ButtonView.design({
    layout: { height: 24, bottom:5, right:5, width:75 },
    title:  "Remove",
    target:'Ecommerce.orderArrayController',
    action:'removeItem',
    valueBinding: '.parentView.content.orderId'
  }),
  nameLabel: SC.LabelView.design({
    layout: { top:15, left:20, height:16, width:100 },
    valueBinding:'.parentView.content.name'
  }),
  priceLabel: SC.LabelView.design({
    layout: { top:15, left:120, height:16, width:50 },
    value:'Price'

  }),

  price: SC.LabelView.design({
    layout: { top:15, left:170, height:16, width:50 },
    valueBinding:'.parentView.content.price'
  }),
   quantityLabel: SC.LabelView.design({
    layout: { top:15, left:250, height:16, width:50 },
    value:'Quantity'
  }),

  quantity:SC.TextFieldView.design({
    layout: { top:15, left:300, height:16, width:50 },
    valueBinding:'.parentView.content.quantity'
  })

});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('ecommerce');