// ==========================================================================
// Project:   Faces.FaceView
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Ecommerce.FaceView = SC.View.extend(
/** @scope Ecommerce.FaceView.prototype */ {

   layout: {left: 10, right:10, bottom:10, width:300, maxWidth: 300, minWidth:200},
 
  childViews: 'myButton myLabel'.w(),
  isSelctable:true,
  myButton: SC.ButtonView.design({
    layout: { height: 24, bottom:5, right:5, width:75 },
    title:  "Add",
    target:'MyApp.itemsController',
    action:'addItem'
  }),
  myLabel: SC.LabelView.design({
    layout: { top:15, left:20, height:16, width:600 },
    valueBinding:'.parentView.content.name'
  })
  
  

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('ecommerce');