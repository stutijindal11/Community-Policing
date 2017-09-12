(function(){
Template.__checkName("CrimeMap");
Template["CrimeMap"] = new Template("Template.CrimeMap", (function() {
  var view = this;
  return [ HTML.DIV({
    class: "row"
  }, "\n      ", HTML.DIV({
    class: "col-md-12"
  }, "\n          ", HTML.DIV({
    class: "row"
  }, "\n              ", HTML.DIV({
    class: "col-md-4"
  }, "\n                  ", HTML.Raw('<!--<div class="row">\n                      <div class="col-md-12">\n                          <a id="modal-391902" href="#modal-container-391902" role="button" class="btn" data-toggle="modal">Instructions</a>\n\n                          <div class="modal fade" id="modal-container-391902" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n                              <div class="modal-dialog">\n                                  <div class="modal-content">\n                                      <div class="modal-header">\n\n                                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n                      ×\n                    </button>\n                                          <h4 class="modal-title" id="myModalLabel">\n                      Modal title\n                    </h4>\n                                      </div>\n                                      <div class="modal-body">\n                                          ...\n                                      </div>\n                                      <div class="modal-footer">\n\n                                          <button type="button" class="btn btn-default" data-dismiss="modal">\n                      Close\n                    </button>\n                                          <button type="button" class="btn btn-primary">\n                      Save changes\n                    </button>\n                                      </div>\n                                  </div>\n\n                              </div>\n\n                          </div>\n\n                      </div>\n                  </div>-->'), "\n                ", Spacebars.include(view.lookupTemplate("form")), "\n              "), "\n              ", HTML.DIV({
    class: "col-md-8"
  }, "\n    ", Spacebars.include(view.lookupTemplate("map")), "\n              "), "\n          "), "\n      "), "\n  "), "\n  ", HTML.DIV({
    class: "row"
  }, "\n      ", HTML.DIV({
    class: "col-md-12"
  }, "\n        ", Spacebars.include(view.lookupTemplate("eventtable")), "\n      "), "\n  ") ];
}));

Template.__checkName("eventtable");
Template["eventtable"] = new Template("Template.eventtable", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.templateInstance().subscriptionsReady());
  }, function() {
    return [ "\n            ", Blaze._TemplateWith(function() {
      return {
        class: Spacebars.call("table"),
        collection: Spacebars.call(view.lookup("getData")),
        settings: Spacebars.call(view.lookup("settings")),
        rowClass: Spacebars.call(view.lookup("getRowClass"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("reactiveTable"));
    }), "\n            " ];
  });
}));

Template.__checkName("map");
Template["map"] = new Template("Template.map", (function() {
  var view = this;
  return HTML.Raw('<div id="container">\n      <div id="map" class="map" style="height: 500px"></div>\n    </div>');
}));

Template.__checkName("form");
Template["form"] = new Template("Template.form", (function() {
  var view = this;
  return [ HTML.FORM({
    id: "filter-form",
    style: "height: 35%"
  }, "\n      ", HTML.DIV({
    class: "form-group"
  }, "\n       ", HTML.DIV({
    class: "row"
  }, "\n    ", HTML.DIV({
    class: "col-md-12"
  }, "\n      ", HTML.DIV({
    style: "padding-bottom: 5px;"
  }, "\n        ", HTML.Raw('<!--<select id="isCity" class="btn btn-default dropdown-toggle">\n                  <option value="0" {{campusSelected}}>Campus Crime</option>\n                <option value="1" {{citySelected}}>City Crime</option>\n              </select>-->'), "\n              ", Spacebars.include(view.lookupTemplate("toggle_button")), "\n       "), "\n    "), "\n       "), "\n       ", HTML.DIV({
    class: "row"
  }, "\n    ", HTML.DIV({
    class: "col-xs-8"
  }, "\n      ", HTML.DIV({
    style: "padding-bottom: 5px;"
  }, "\n          ", HTML.Raw('<label class="CrimeMapLabel" for="myInput"><br></label>'), HTML.Raw("<br>"), "\n            ", HTML.SELECT({
    id: "university",
    class: "btn btn-default dropdown-toggle CrimeMapSelect"
  }, "\n                 ", HTML.Raw('<!--<option value="0" {{syracuseSelected}}>{{syracuseName}}</option>\n                 <option value="1" {{emorySelected}}>{{emoryName}}</option>\n                 <option value="2" {{riceSelected}}>{{riceName}}</option>\n                 <option value="3" {{georgiatechSelected}}>{{georgiatechName}}</option>\n                 <option value="4" {{ubuffaloSelected}}>{{ubuffaloName}}</option>\n                 <option value="5" {{uhunterSelected}}>{{uhunterName}}</option>-->'), "\n                 ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("getPlaces"));
  }, function() {
    return [ "\n                    ", HTML.OPTION(HTML.Attrs({
      value: function() {
        return Spacebars.mustache(view.lookup("placeIndex"));
      },
      "data-id": function() {
        return Spacebars.mustache(view.lookup("_id"));
      }
    }, function() {
      return Spacebars.attrMustache(view.lookup("placeSelected"));
    }), Blaze.View("lookup:placeCategory", function() {
      return Spacebars.mustache(view.lookup("placeCategory"));
    })), "\n                 " ];
  }), "\n            "), "\n     "), "\n    "), "\n\n    ", HTML.DIV({
    class: "col-xs-4"
  }, "\n      ", HTML.DIV({
    style: "padding-bottom: 5px;"
  }, "\n              ", HTML.Raw('<label class="CrimeMapLabel" for="myInput">Severity&nbsp; &nbsp;</label>'), HTML.Raw("<br>"), "\n              ", HTML.SELECT({
    id: "severity",
    class: "btn btn-default dropdown-toggle CrimeMapSelect"
  }, "\n                   ", HTML.OPTION(HTML.Attrs({
    value: "10"
  }, function() {
    return Spacebars.attrMustache(view.lookup("anySelected"));
  }), "Any"), "\n                   ", HTML.OPTION(HTML.Attrs({
    value: "0"
  }, function() {
    return Spacebars.attrMustache(view.lookup("lowSelected"));
  }), "Low"), "\n                   ", HTML.OPTION(HTML.Attrs({
    value: "1"
  }, function() {
    return Spacebars.attrMustache(view.lookup("mediumSelected"));
  }), "Medium"), "\n                   ", HTML.OPTION(HTML.Attrs({
    value: "2"
  }, function() {
    return Spacebars.attrMustache(view.lookup("highSelected"));
  }), "High"), "\n              "), "\n            "), "\n    "), "\n       "), "\n      ", HTML.DIV({
    class: "row"
  }, "\n          ", HTML.DIV({
    class: "col-md-12"
  }, "\n            ", HTML.DIV({
    style: "padding-bottom: 7px;"
  }, "\n              ", HTML.Raw('<label class="CrimeMapLabel" for="myInput">Crime&nbsp;&nbsp; &nbsp; &nbsp;</label>'), HTML.Raw("<br>"), "\n              ", HTML.SELECT({
    id: "crimeCategory",
    class: "btn btn-default dropdown-toggle CrimeMapSelect"
  }, "\n                  ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("getoptions"));
  }, function() {
    return [ "\n                    ", HTML.OPTION(HTML.Attrs({
      value: function() {
        return Spacebars.mustache(view.lookup("crimeCategory"));
      }
    }, function() {
      return Spacebars.attrMustache(view.lookup("animateselected"));
    }), Blaze.View("lookup:crimeCategory", function() {
      return Spacebars.mustache(view.lookup("crimeCategory"));
    })), "\n                  " ];
  }), "\n              "), "\n            "), "\n          "), "\n      "), "\n     ", HTML.Raw('<div class="row" style="margin-left: -5px; padding-left: 0px; padding-bottom: 5px;">\n         <div class="col-md-6">\n           <label style="font-size: 15px margin-left: 10px; padding-bottom: 3px;" for="myInput">Select Date Range</label><br>\n           <input style="margin-left: 10px; font-size: 15px;" id="daterange">\n         </div>\n    </div>'), "\n\n\n      "), "\n        ", HTML.Raw('<button style="margin-left: 10px" type="submit" class="btn btn-primary reset">Reset</button>'), "\n\n    "), "\n    ", HTML.DIV({
    class: "row"
  }, "\n    ", HTML.DIV({
    id: "tipsTable"
  }, "\n    ", HTML.TABLE({
    class: "table",
    style: "margin-left: 17px;"
  }, "\n      ", HTML.THEAD("\n        ", HTML.TR("\n          ", HTML.TH("\n            Category\n          "), "\n          ", HTML.TH("\n            Tips\n          "), "\n        "), "\n      "), "\n      ", HTML.TBODY("\n      ", Blaze.If(function() {
    return Spacebars.call(view.templateInstance().subscriptionsReady());
  }, function() {
    return [ "\n      ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getTips"));
    }, function() {
      return [ "\n            ", Spacebars.include(view.lookupTemplate("tipsRow")), "\n          " ];
    }), "\n      " ];
  }), "\n\n      "), "\n    "), "\n  "), "\n") ];
}));

Template.__checkName("tipsRow");
Template["tipsRow"] = new Template("Template.tipsRow", (function() {
  var view = this;
  return HTML.TR("\n    ", HTML.TD("\n      ", Blaze.View("lookup:DescriptionCategory", function() {
    return Spacebars.mustache(view.lookup("DescriptionCategory"));
  }), "\n    "), "\n    ", HTML.TD("\n      ", Blaze.View("lookup:tips", function() {
    return Spacebars.mustache(view.lookup("tips"));
  }), "\n    "), "\n  ");
}));

Template.__checkName("eventRow");
Template["eventRow"] = new Template("Template.eventRow", (function() {
  var view = this;
  return HTML.TR({
    class: function() {
      return Spacebars.mustache(view.lookup("getRowClass"), view.lookup("Severity"));
    },
    style: "cursor:pointer"
  }, HTML.Raw("\n        <!-- <td>\n            {{Case_Number}}\n        </td>\n        <td>\n                             {{Date_Time_Reported}}\n                        </td>\n                        <td>\n                           {{General_Location}}\n                        </td>\n                        <td>\n                           {{Nature_Classification}}\n                        </td> -->\n                    "));
}));

Template.__checkName("eventComments");
Template["eventComments"] = new Template("Template.eventComments", (function() {
  var view = this;
  return [ HTML.UL("\n    ", HTML.Raw("<b>Event Type:</b>"), " ", Blaze.View("lookup:Nature_Classification", function() {
    return Spacebars.mustache(view.lookup("Nature_Classification"));
  }), HTML.Raw("<br>"), "\n    ", HTML.Raw("<b>Occured at: </b>"), " ", Blaze.View("lookup:Date_Time_Occurred", function() {
    return Spacebars.mustache(view.lookup("Date_Time_Occurred"));
  }), "\n    "), "\n    ", HTML.UL("\n        ", HTML.Raw("<b>Comments:</b>"), "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("comment"));
  }, function() {
    return [ "\n           ", HTML.LI(Blaze.View("lookup:content", function() {
      return Spacebars.mustache(view.lookup("content"));
    })), "\n        " ];
  }), "\n        ", Spacebars.include(view.lookupTemplate("commentSubmit")), "\n    ") ];
}));

Template.__checkName("commentSubmit");
Template["commentSubmit"] = new Template("Template.commentSubmit", (function() {
  var view = this;
  return HTML.FORM({
    id: "comment",
    class: "comment-form"
  }, "\n    ", HTML.DIV({
    class: "control-group"
  }, "\n        ", HTML.DIV({
    class: "controls"
  }, "\n            ", HTML.Raw('<label for="body">Comment on this event</label>'), "\n\n            ", HTML.TEXTAREA({
    name: "commentText"
  }), "\n             ", HTML.TEXTAREA({
    name: "event_id",
    style: "display:none",
    value: function() {
      return Spacebars.mustache(view.lookup("event_id"));
    }
  }), "\n        "), "\n    "), HTML.Raw('\n    <div class="control-group">\n        <div class="controls">\n            <button class="commentbtn">Add Comment</button>\n        </div>\n    </div>\n\n  '));
}));

Template.__checkName("toggle_button");
Template["toggle_button"] = new Template("Template.toggle_button", (function() {
  var view = this;
  return [ HTML.Raw('<!--<div id="toggle_switch" class="switch-toggle switch-candy" style="width:250px">\n    <input id="city" name="view" type="radio" value="1" {{CityChecked}}>\n    <label for="city" onclick="">City</label>\n\n    <input id="campus" name="view" type="radio" value="0" {{CampusChecked}}>\n    <label for="campus" onclick="">Campus</label>\n\n    <a></a>\n  </div>-->\n  '), HTML.DIV({
    id: "toggle_switch",
    class: "switch switch-blue"
  }, "\n    ", HTML.INPUT(HTML.Attrs({
    type: "radio",
    class: "switch-input",
    name: "view2",
    value: "1",
    id: "city"
  }, function() {
    return Spacebars.attrMustache(view.lookup("CityChecked"));
  })), "\n    ", HTML.Raw('<label for="city" class="switch-label switch-label-off">City</label>'), "\n    ", HTML.INPUT(HTML.Attrs({
    type: "radio",
    class: "switch-input",
    name: "view2",
    value: "0",
    id: "campus"
  }, function() {
    return Spacebars.attrMustache(view.lookup("CampusChecked"));
  })), "\n    ", HTML.Raw('<label for="campus" class="switch-label switch-label-on">Campus</label>'), "\n    ", HTML.Raw('<span class="switch-selection"></span>'), "\n  ") ];
}));

}).call(this);
