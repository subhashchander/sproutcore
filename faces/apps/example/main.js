// ==========================================================================
// Project:   Example
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Example.main = function main() {

   Example.getPath('mainPage.mainPane').append() ;
    Example.categoriesControllerList.populate();

} ;

function main() { Example.main(); }
