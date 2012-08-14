// ==========================================================================
// Project:   Ecommerce.Product
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Ecommerce.Product = SC.Record.extend(
/** @scope Ecommerce.Product.prototype */ {
 id: SC.Record.attr(Number),
 name: SC.Record.attr(String),
 description: SC.Record.attr(String),
 categoryId:SC.Record.attr(Number)

}) ;
