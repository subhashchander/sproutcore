// ==========================================================================
// Project:   Ecommerce.Category
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Ecommerce.Category = SC.Record.extend(
/** @scope Ecommerce.Category.prototype */ {


 name: SC.Record.attr(String),
 categoryId:SC.Record.attr(Number),
 treeItemIsExpanded: NO,
 treeItemChildren: function(){
        return Ecommerce.store.find(SC.Query.local(Ecommerce.Product,
        "categoryId = {categoryId}", {
            categoryId: this.get('categoryId'),
            orderBy: "name ASC"
        }))
    }.property('categoryId').cacheable()

}) ;
