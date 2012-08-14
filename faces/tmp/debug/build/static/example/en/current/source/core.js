// ==========================================================================
// Project:   Example
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Example = SC.Application.create(
  /** @scope Example.prototype */ {

  NAMESPACE: 'Example',
  VERSION: '0.1.0',
   store: SC.Store.create().from(SC.Record.fixtures),
   //store: SC.Store.create().from("Example.DataSource"),
    

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('example');