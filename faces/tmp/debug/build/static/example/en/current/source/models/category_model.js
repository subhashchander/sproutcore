// ==========================================================================
// Project:   Example.Category
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Example.Category = SC.Record.extend(
/** @scope Example.Category.prototype */ {

    name: SC.Record.attr(String),
    categoryId: SC.Record.attr(Number),

    notes: function(){
        return Example.store.find(SC.Query.local('Example.Note', 'categoryId = {categoryId}', {categoryId: this.get('guid')}))
    }.property('guid'),

    // tree list properties

    treeItemIsExpanded: NO,
	

    treeItemChildren: function(){
        return Example.store.find(SC.Query.local(Example.Category,
        "categoryId = {categoryId}", {
            categoryId: this.get('guid'),
            orderBy: "name ASC"
        }))
    }.property('guid').cacheable()

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('example');