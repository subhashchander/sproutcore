// ==========================================================================
// Project:   Ecommerce
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Ecommerce.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Ecommerce.getPath('mainPage.mainPane').append() ;
  
 var query1 = SC.Query.local(Ecommerce.Order, { orderBy: 'name' });
  var products1 = Ecommerce.store.find(query1);
  Ecommerce.orderArrayController.set('content', products1);


  var query = SC.Query.local(Ecommerce.Product, { orderBy: 'name' });
  var products = Ecommerce.store.find(query);
  Ecommerce.productController.set('content', products);
  Ecommerce.categoryController.populate();
  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: Ecommerce.contactsController.set('content',Ecommerce.contacts);

} ;

function main() { Ecommerce.main(); }
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('ecommerce');