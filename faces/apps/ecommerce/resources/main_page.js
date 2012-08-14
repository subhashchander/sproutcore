// ==========================================================================
// Project:   Ecommerce - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

// This page describes the main user interface for your application.  
Ecommerce.mainPage = SC.Page.design({

  
    mainPane: SC.MainPane.design({
        childViews: 'mainView'.w(),

        mainView: SC.View.design({

            layout: {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            },
		 childViews: 'list cart'.w(), 
         list: SC.ScrollView.design({
           layout: { left:100,top:20,height:500,width:300 },
           contentView: SC.ListView.design({
                layout: {
                    top: 5,
                    left: 5
                },
                contentValueKey: "name",
                contentBinding: "Ecommerce.categoryController.arrangedObjects",
				selectionBinding : "Ecommerce.categoryController.selection",
				target:"Ecommerce.selectedItemController",
				action:"subhash"
				
            })
          }),

		cart: SC.View.extend({
			    layout: { left: 450, right: 20, top: 20, bottom: 20 },
			    childViews:'lbl grid orderButton'.w(),
               lbl: SC.LabelView.design({
          	      layout:{top:5,left:10,width:200, height:30},
          	      title:'Shopping Cart',
          	      fontWeight: SC.BOLD_WEIGHT
               }),

               grid:SC.ScrollView.design({
                contentView:SC.GridView.design({
          	    layout:{top:45,left:0,right:0,bottom:100},
                backgroundColor: "white",
			    rowHeight:60,
	            columnWidth:500,
			    contentBinding: 'Ecommerce.orderArrayController.arrangedObjects',
	            selectionBinding:'Ecommerce.orderArrayController.selection',
	            exampleView: Ecommerce.OrderView
               })

               }),

              orderButton:SC.ButtonView.design({

              	layout:{right:50,bottom:5,height:30,width:50},
              	title:'submit',
                action:'ss',
                target:'Ecommerce.orderArrayController'
              })
			  })




          

        })
    }),
  
      detailPane: SC.PanelPane.design({
    
			layout:{centerX:0,centerY:0,width:550,height:400},
			contentView:SC.View.design({
			childViews: 'promt nameLabel name descriptionLabel description priceLabel price cancelButton submitButton'.w(),
			
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
					  valueBinding:SC.Binding.oneWay('Ecommerce.selectedItemController.name')
			 }),
			descriptionLabel:SC.LabelView.design({
					 layout:{top:70,left:0,height:18,width:120},
					 textAlign: SC.ALIGN_RIGHT,
					 value:"Description"
			 }),
			 description:SC.LabelView.design({
			         layout:{top:70,left:140,height:20,width:350},
			         valueBinding:  SC.Binding.oneWay('Ecommerce.selectedItemController.description') 
			  
			 }),
			 priceLabel:SC.LabelView.design({
					 layout:{top:100,left:0,height:18,width:120},
					 textAlign: SC.ALIGN_RIGHT,
					 value:"Peice"
			 }),
			 price:SC.LabelView.design({
			         layout:{top:100,left:140,height:20,width:350},
			         valueBinding: SC.Binding.oneWay('Ecommerce.selectedItemController.price') 
			  
			 }),
			
			 
			
			cancelButton:SC.ButtonView.design({
					 layout:{bottom: 15,right:140 ,width:80,height:24 },
					 title:'Cancel',
					 target:'Ecommerce.selectedItemController',
					 action:'sharwan'
			 }),
			 submitButton:SC.ButtonView.design({
					 layout:{bottom: 15,right:50 ,width:80,height:24 },
					 title:'Add to cart',
					 target:'Ecommerce.selectedItemController',
					 action:'orderProduct'
			 })
			 })
	 
	})
    



});
