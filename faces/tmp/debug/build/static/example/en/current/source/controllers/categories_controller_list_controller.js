// ==========================================================================
// Project:   Example.categoriesControllerList
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example */

/** @class

  (Document Your Controller Here)

  @extends SC.TreeController
*/
Example.categoriesControllerList = SC.TreeController.create(
/** @scope Example.categoriesControllerList.prototype */ {

  populate: function(){

        var rootNode = SC.Object.create({
            treeItemIsExpanded: YES,
            name: "root",
            treeItemChildren: function(){
                return Example.store.find(SC.Query.local(Example.Category,
                    "categoryId = null", {
                        orderBy: "name ASC"
                    }))
            }.property()
        })

        this.set('content', rootNode)
    },

    observesSelection: function(){
	alert("hi");
        if (this.didChangeFor('selectionDidChange', 'selection')){
            Example.notesControllerList.set('content', this.getPath('selection.firstObject.notes'))
        }
    }.observes('selection')
	

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('example');