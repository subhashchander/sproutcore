// ==========================================================================
// Project:   Example - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example */

// This page describes the main user interface for your application.  
Example.mainPage = SC.Page.design({

    mainPane: SC.MainPane.design({
        childViews: 'mainView'.w(),

        mainView: SC.View.design({

            layout: {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            },
            
            childViews: 'categoriesListTreeView notesListView'.w(), 

            categoriesListTreeView: SC.ListView.design({
                layout: {
                    top: 5,
                    width: 300,
                    bottom: 5,
                    left: 5
                },
                contentValueKey: "name",
                contentBinding: "Example.categoriesControllerList.arrangedObjects",
                selectionBinding : "Example.categoriesControllerList.selection",
				doubleClick:function(){
				
				
			    this.invokeLater(function(){
			         Example.getPath('detailPage.mainPane').append();	         
	                });
		        return YES;
                
				   }
				//click: function() {alert("I was clicked");}
				
            }),

            notesListView: SC.ListView.design({
                layout: {
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: 310
                },
                contentValueKey: "title",
                contentBinding: 'Example.notesControllerList.arrangedObjects', 
                selectionBinding: 'Example.notesControllerList.selection'
            })

        })
    })

});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('example');