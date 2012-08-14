// ==========================================================================
// Project:   Example.Category Fixtures
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example */

sc_require('models/category_model');

Example.Category.FIXTURES = [

          {
                guid: 1,
                name: "Sproutcore",
                categoryId: null
            },
           {
                guid: 2,
                name: "Rails",
                categoryId: null
            },
            {
                guid: 11,
                name: "DataStore",
				categoryId: 1
				
            },

            {
                guid: 12,
                name: "Fixtures",
                categoryId: 1
            },

           
            {
                guid: 21,
                name: "ActiveRecord",
                categoryId: 2
            },

            

            {
                guid: 23,
                name: "Controllers",
                categoryId: 2
            }

            
            

];
