// ==========================================================================
// Project:   Example.notesControllerList
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Example.notesControllerList = SC.ArrayController.create(
/** @scope Example.notesControllerList.prototype */ {

  // TODO: Add your own code here.
cancelProcess:function(){
Example.getPath('detailPage.mainPane').remove();
return YES;
},
continueProcess:function(){
Example.getPath('detailPage.mainPane').remove();
return YES;
}
}) ;
