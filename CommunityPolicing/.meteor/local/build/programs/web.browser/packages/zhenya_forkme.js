//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package['templating-runtime'].Template;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/zhenya_forkme/packages/zhenya_forkme.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/zhenya:forkme/template.forkme.js                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("forkme");                                                                                    // 2
Template["forkme"] = new Template("Template.forkme", (function() {                                                 // 3
  var view = this;                                                                                                 // 4
  return HTML.DIV({                                                                                                // 5
    "class": function() {                                                                                          // 6
      return [ "github-fork-ribbon-wrapper ", Spacebars.mustache(view.lookup("align")) ];                          // 7
    }                                                                                                              // 8
  }, "\n        ", HTML.DIV({                                                                                      // 9
    "class": "github-fork-ribbon"                                                                                  // 10
  }, "\n            ", HTML.A({                                                                                    // 11
    href: function() {                                                                                             // 12
      return Spacebars.mustache(view.lookup("url"));                                                               // 13
    }                                                                                                              // 14
  }, "Fork me on GitHub"), "\n        "), "\n    ");                                                               // 15
}));                                                                                                               // 16
                                                                                                                   // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 27
}).call(this);                                                                                                        // 28
                                                                                                                      // 29
                                                                                                                      // 30
                                                                                                                      // 31
                                                                                                                      // 32
                                                                                                                      // 33
                                                                                                                      // 34
(function () {                                                                                                        // 35
                                                                                                                      // 36
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/zhenya:forkme/forkme.coffee.js                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.forkme.helpers({                                                                                             // 44
  align: function() {                                                                                                 // 45
    var _ref;                                                                                                         // 46
    if ((_ref = this.align) === 'left' || _ref === 'right' || _ref === 'left-bottom' || _ref === 'right-bottom') {    // 47
      return this.align;                                                                                              // 48
    } else {                                                                                                          // 49
      return 'right';                                                                                                 // 50
    }                                                                                                                 // 51
  }                                                                                                                   // 52
});                                                                                                                   // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 55
}).call(this);                                                                                                        // 56
                                                                                                                      // 57
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['zhenya:forkme'] = {};

})();
