// ==========================================================================
// Project:   Ecommerce.orderArrayController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Ecommerce.orderArrayController = SC.ArrayController.create(
/** @scope Ecommerce.orderArrayController.prototype */ {

  // TODO: Add your own code here.
  removeItem:function(view){
  	var order = Ecommerce.store.find(SC.Query.local(Ecommerce.Order,"orderId = {id}",{
  		id:view.get('value'),//parentView.get('content').get('productId')
  		orderBy: "name ASC"
  	})).firstObject();

  	 order.destroy();
  	 return YES;
  }

}) ;
