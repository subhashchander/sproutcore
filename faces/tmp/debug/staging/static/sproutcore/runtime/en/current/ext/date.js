// ==========================================================================
// Project:   SproutCore Costello - Property Observing Library
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

if (!Date.now) {
  /**
    @ignore
  */
  Date.now = function() {
    return new Date().getTime() ;
  };
}
