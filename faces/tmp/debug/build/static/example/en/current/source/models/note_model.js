// ==========================================================================
// Project:   Example.Note
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Example.Note = SC.Record.extend(
/** @scope Example.Note.prototype */ {

  title: SC.Record.attr(String, {defaultValue: ""}),
  content: SC.Record.attr(String, {defaultValue: ''}), 

  categoryId: SC.Record.attr(Number),

  category: function(){
      console.log('in snippet.category')
      console.log(this.get('categoryId'))
      var query = SC.Query.local(Example.Category,
        'guid = {categoryId}', {categoryId: this.get('categoryId')})
      console.log(query)
      console.log(Example.store.find(query).get('length'))
      return Example.store.find(query).firstObject()
  }.property('categoryId')


}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('example');