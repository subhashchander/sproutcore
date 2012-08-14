// ==========================================================================
// Project:   Ecommerce.productController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Ecommerce.productController = SC.ObjectController.create(
/** @scope Ecommerce.productController.prototype */ {
  //observeContent:function(){}.observer('content') 
  
            subhash:function(){

                   var product = this.get('selection');//.get('firstObject'); 
					Ecommerce.productController.set('content',product);
				   this.invokeLater(function(){
                    Ecommerce.getPath('mainPage.detailPane').append();	         
	                });
		          return YES;
          }  
}) ;
