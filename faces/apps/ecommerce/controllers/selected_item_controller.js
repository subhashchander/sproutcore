// ==========================================================================
// Project:   Ecommerce.selectedItemController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Ecommerce.selectedItemController = SC.ObjectController.create(
/** @scope Ecommerce.selectedItemController.prototype */ {

   contentBinding: SC.Binding.single('Ecommerce.categoryController.selection'),
 
	subhash:function(){
	   var record = this.get("content");
        if (record.isProduct) {
        Ecommerce.getPath('mainPage.detailPane').append();
      }		
	      return YES;
          },
  orderProduct:function(){
          var record ,product,quantity;
          record = this.get("content");
          quantity=1;
          if (record.isProduct) {
              if(parseInt(record.get("quantity")) ===0){
			  alert("product not available in stock");
			  //record.set("getorderedQuantity",1);
			   }
			   else{
			    Ecommerce.getPath('mainPage.detailPane').remove();
           //add item to model
              product =Ecommerce.store.find(SC.Query.local(Ecommerce.Order,"productId={id}",{
              id:parseInt(record.get('guid'))
             })).firstObject();
             if(product){
                quantity = parseInt(product.get("quantity"))+1;
                product.set("quantity",quantity);
                }
               else{
               Ecommerce.store.createRecord(Ecommerce.Order, {
                 "name" :record.get("name"),
                 "description" : record.get("description"),
                 "price" :record.get("price"),
                 "productId":record.get('guid'),
                 "orderId":SC.DateTime.create(),
                 "quantity" : quantity
                 });
             }
            }
          }		
	      return YES;
    },
    sharwan:function(){
          Ecommerce.getPath('mainPage.detailPane').remove();	         
	      return YES;
    }		  

}) ;
