// ==========================================================================
// Project:   Ecommerce.Category Fixtures
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

sc_require('models/category_model');

Ecommerce.Category.FIXTURES = [

  {
  "guid":1,
  "name":"Computer",
  "products":[1,2]
  },
   {
  "guid":2,
  "name":"Mobile",
  "products":[3,4,5]
  }

];
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('ecommerce');