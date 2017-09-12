(function(){
Template.__checkName("SocialMedia");
Template["SocialMedia"] = new Template("Template.SocialMedia", (function() {
  var view = this;
  return [ HTML.DIV({
    class: "row"
  }, "\n      ", HTML.DIV({
    class: "col-md-12"
  }, "\n          ", HTML.DIV({
    class: "row"
  }, "\n            ", HTML.DIV({
    class: "col-md-4"
  }, "\n              ", Spacebars.include(view.lookupTemplate("SocialMediaForm")), "\n            "), "\n            ", HTML.DIV({
    class: "col-md-4"
  }, "\n              ", HTML.SVG({
    id: "polygon1"
  }), "\n            "), "\n            ", HTML.Raw('<div class="col-md-4">\n              <div id="label" class="sendercount">\n                <p id="p1" class="counter text-primary"></p>\n              </div>\n            </div>'), "\n          "), "\n    "), "\n  "), "\n  ", HTML.DIV({
    class: "row"
  }, "\n    ", HTML.DIV({
    class: "bar text-primary",
    style: "position:absolute; z-index:50; visibility:visible; color:#5DADE2"
  }, Blaze.View("lookup:getTitleText", function() {
    return Spacebars.mustache(view.lookup("getTitleText"));
  })), "\n  "), "\n  ", HTML.DIV({
    class: "row"
  }, "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("showTheMainTable"));
  }, function() {
    return [ "\n      ", Blaze.If(function() {
      return Spacebars.call(view.templateInstance().subscriptionsReady());
    }, function() {
      return [ "\n      ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("table table-hover table-striped SocialMediaMainTable"),
          collection: Spacebars.call(view.lookup("getMediaData")),
          settings: Spacebars.call(view.lookup("settings"))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("reactiveTable"));
      }), "\n      " ];
    }), "\n    " ];
  }), "\n  ") ];
}));

Template.__checkName("SocialMediaForm");
Template["SocialMediaForm"] = new Template("Template.SocialMediaForm", (function() {
  var view = this;
  return HTML.DIV("\n  ", HTML.DIV({
    class: "dropdown form-group"
  }, "\n    ", HTML.Raw('<label style="padding-bottom: 3px" for="sel1">Set Filter for Police Department</label>'), "\n    ", HTML.SELECT({
    class: "form-control",
    id: "MediaSelect"
  }, "\n      ", HTML.Raw('<option value="Choose a value">All</option>'), "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("getPDLoptions"));
  }, function() {
    return [ "\n        ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(view.lookup("PDLocation"));
      }
    }, Blaze.View("lookup:PDLocation", function() {
      return Spacebars.mustache(view.lookup("PDLocation"));
    })), "\n      " ];
  }), "\n    "), "\n    ", HTML.Raw("<br>"), "\n  ", HTML.Raw('<button type="button" id="ResetButton" class="btn btn-primary">Reset</button>'), "\n  ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n  ", HTML.TABLE({
    id: "stat",
    class: "table stat table-striped"
  }, "\n  ", HTML.THEAD("\n  ", HTML.TR("\n      ", HTML.TH("UserRole"), "\n      ", HTML.TH("Number"), "\n      ", HTML.TH("Percent"), "\n    "), "\n  "), "\n    ", HTML.TBODY("\n      ", Blaze.If(function() {
    return Spacebars.call(view.templateInstance().subscriptionsReady());
  }, function() {
    return [ "\n        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getStateData"));
    }, function() {
      return [ "\n          ", Spacebars.include(view.lookupTemplate("StateDataRows")), "\n        " ];
    }), "\n      " ];
  }), "\n    "), "\n  "), "\n  "), "\n");
}));

Template.__checkName("SocialMediaMainTable");
Template["SocialMediaMainTable"] = new Template("Template.SocialMediaMainTable", (function() {
  var view = this;
  return HTML.DIV({
    id: "SocialMediaMainTable"
  }, "\n    ", HTML.TABLE({
    class: "table table-hover table-striped SocialMediaMainTable"
  }, "\n      ", HTML.THEAD("\n        ", HTML.TR("\n          ", HTML.TH("PoliceDepartment"), "\n          ", HTML.TH("UserID"), "\n          ", HTML.TH("UserName"), "\n          ", HTML.TH("PDLocation"), "\n          ", HTML.TH("UserLocation"), "\n          ", HTML.TH("UserRole"), "\n        "), "\n      "), "\n      ", HTML.TBODY("\n        ", Blaze.If(function() {
    return Spacebars.call(view.templateInstance().subscriptionsReady());
  }, function() {
    return [ "\n  \t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getMediaData"));
    }, function() {
      return [ "\n  \t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("MediaDataRows")), "\n  \t\t\t\t\t" ];
    }), "\n        " ];
  }), "\n    "), "\n    "), "\n  ");
}));

Template.__checkName("MediaDataRows");
Template["MediaDataRows"] = new Template("Template.MediaDataRows", (function() {
  var view = this;
  return HTML.TR("\n    ", HTML.TD(Blaze.View("lookup:PoliceDepartment", function() {
    return Spacebars.mustache(view.lookup("PoliceDepartment"));
  })), "\n    ", HTML.TD(Blaze.View("lookup:UserID", function() {
    return Spacebars.mustache(view.lookup("UserID"));
  })), "\n    ", HTML.TD(Blaze.View("lookup:UserName", function() {
    return Spacebars.mustache(view.lookup("UserName"));
  })), "\n    ", HTML.TD(Blaze.View("lookup:PDLocation", function() {
    return Spacebars.mustache(view.lookup("PDLocation"));
  })), "\n    ", HTML.TD(Blaze.View("lookup:UserLocation", function() {
    return Spacebars.mustache(view.lookup("UserLocation"));
  })), "\n    ", HTML.TD(Blaze.View("lookup:UserRole", function() {
    return Spacebars.mustache(view.lookup("UserRole"));
  })), "\n  ");
}));

Template.__checkName("StateDataRows");
Template["StateDataRows"] = new Template("Template.StateDataRows", (function() {
  var view = this;
  return HTML.TR("\n    ", HTML.TD(Blaze.View("lookup:UserRole", function() {
    return Spacebars.mustache(view.lookup("UserRole"));
  })), "\n    ", HTML.TD(Blaze.View("lookup:Number", function() {
    return Spacebars.mustache(view.lookup("Number"));
  })), "\n    ", HTML.TD(Blaze.View("lookup:Percent", function() {
    return Spacebars.mustache(view.lookup("Percent"));
  })), "\n  ");
}));

}).call(this);
