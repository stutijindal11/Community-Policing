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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Queue;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/artwells_queue/lib/client/client.js                      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
if (typeof Houston !== "undefined"  ) {                              // 2
    Meteor.startup(function () {                                     // 3
        /* called from here to get __ etc. from houston:admin */     // 4
        Meteor.call("addQueueRunNow");                               // 5
        Meteor.call("addQueueStopInterval");                         // 6
    });                                                              // 7
}                                                                    // 8
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['artwells:queue'] = {}, {
  Queue: Queue
});

})();
