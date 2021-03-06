// ==========================================================================
// Project:   Faces.Person
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Faces.Person = SC.Record.extend(
/** @scope Faces.Person.prototype */ {

  name: SC.Record.attr(String),
  company: SC.Record.attr(String),
  website: SC.Record.attr(String),
  picture: SC.Record.attr(String)
  

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('faces');