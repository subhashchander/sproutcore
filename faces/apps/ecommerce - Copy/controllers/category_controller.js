// ==========================================================================
// Project:   Ecommerce.categoryController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document Your Controller Here)

  @extends SC.TreeController
*/
Ecommerce.categoryController = SC.TreeController.create(
/** @scope Ecommerce.categoryController.prototype */ {

   populate: function(){

        var rootNode = SC.Object.create({
            treeItemIsExpanded: YES,
            name: "root",
            treeItemChildren: function(){
                return Ecommerce.store.find(SC.Query.local(Ecommerce.Category));
                    
            }.property()
        })

        this.set('content', rootNode)
    },
	 observesSelection: function(){
	 alert("HH");
        if (this.didChangeFor('selectionDidChange', 'selection')){
            Ecommerce.productController.set('content', this.getPath('selection'))
        }
    }.observes('selection')


}) ;
