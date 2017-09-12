(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return [ HTML.NAV({
    class: "navbar navbar-default",
    role: "navigation"
  }, "\n    ", HTML.Raw('<!--<div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#"></a>\n    </div>-->'), "\n    ", HTML.DIV({
    class: "collapse navbar-collapse",
    id: "navigation"
  }, "\n      ", HTML.UL({
    class: "nav navbar-nav navbar-left"
  }, "\n            ", HTML.LI(HTML.A({
    class: "focus",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "CrimeMap");
    },
    onmouseover: "this.style.color='blue';",
    onmouseout: "this.style.color='grey';"
  }, "Crime Map")), "\n            ", HTML.LI(HTML.A({
    class: "focus",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "SocialMedia");
    },
    onmouseover: "this.style.color='blue';",
    onmouseout: "this.style.color='grey';"
  }, "Social Media")), "\n      "), "\n      ", HTML.Raw('<ul class="nav navbar-nav navbar-right">\n       <!-- <li>{{> loginButtons}}</li>\n        <li style="visibility:hidden">emptyemptyempty</li>-->\n      </ul>'), "\n    "), "\n  "), "\n\n  ", HTML.DIV({
    class: "container-fluid"
  }, "\n    ", Spacebars.include(view.lookupTemplate("yield")), "\n  ") ];
}));

}).call(this);
