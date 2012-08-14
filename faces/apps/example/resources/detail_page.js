// ==========================================================================
// Project:   Example - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example */

// This page describes the main user interface for your application.  
Example.detailPage = SC.Page.design({

     mainPane: SC.PanelPane.design({
    
	layout:{centerX:0,centerY:0,width:550,height:400},
	contentView:SC.View.design({
	 childViews: 'promt nameLabel name descriptionLabel description cancelButton submitButton'.w(),
	 promt:SC.LabelView.design({
		 layout:{top:12,left:20,height:16,right:20},
		 fontWeight: SC.BOLD_WEIGHT,
		 value:"Product Details"
	 }),
    nameLabel:SC.LabelView.design({
		 layout:{top:40,left:0,height:18,width:120},
		 textAlign: SC.ALIGN_RIGHT,
		 value:"Name"
	 }),
	 name:SC.LabelView.design({
	 layout:{top:40,left:140,height:20,width:350},
	  // contentValueKey: "title",
      // contentBinding: 'Example.notesControllerList.arrangedObjects'
	  valueBinding:'Example.notesControllerList.title'
	 }),
    descriptionLabel:SC.LabelView.design({
		 layout:{top:70,left:0,height:18,width:120},
		 textAlign: SC.ALIGN_RIGHT,
		 value:"Description"
	 }),
	 description:SC.LabelView.design({
	 layout:{top:70,left:140,height:20,width:350},
	   contentValueKey: "content",
       contentBinding: 'Example.notesControllerList.arrangedObjects' 
	  
	 }),
	cancelButton:SC.ButtonView.design({
			 layout:{bottom: 15,right:140 ,width:80,height:24 },
			 title:'Cancel',
			 target:'Example.notesControllerList',
			 action:'cancelProcess'
	 }),
	 submitButton:SC.ButtonView.design({
			 layout:{bottom: 15,right:50 ,width:80,height:24 },
			 title:'submit',
			 target:'Example.notesControllerList',
			 action:'continueProcess'
	 })
	 })
	 
	})


});

