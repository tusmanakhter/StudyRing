var require = meteorInstall({"client":{"accounts":{"template.AccountSettings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/accounts/template.AccountSettings.js                                                                //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("AccountSettings");                                                                      // 2
Template["AccountSettings"] = new Template("Template.AccountSettings", (function() {                          // 3
  var view = this;                                                                                            // 4
  return [ HTML.Raw("<h1> Account settings </h1>\n  "), Blaze.If(function() {                                 // 5
    return Spacebars.dataMustache(Spacebars.dot(view.lookup("$"), "Session", "get"), "changeSettings");       // 6
  }, function() {                                                                                             // 7
    return [ "\n    ", HTML.I({                                                                               // 8
      class: "fa fa-close"                                                                                    // 9
    }), "\n    ", HTML.FORM("\n      Old password: ", HTML.INPUT({                                            // 10
      type: "password",                                                                                       // 11
      name: "oldPassword",                                                                                    // 12
      id: "oldPassword"                                                                                       // 13
    }), " ", HTML.BR(), "\n      Change password: ", HTML.INPUT({                                             // 14
      type: "password",                                                                                       // 15
      name: "newPassword",                                                                                    // 16
      id: "newPassword"                                                                                       // 17
    }), " ", HTML.BR(), "\n      Rewrite password: ", HTML.INPUT({                                            // 18
      type: "password",                                                                                       // 19
      name: "newPassword2",                                                                                   // 20
      id: "newPassword2"                                                                                      // 21
    }), " ", HTML.BR(), "\n      ", HTML.INPUT({                                                              // 22
      type: "submit",                                                                                         // 23
      class: "changePassword",                                                                                // 24
      name: "changePassword",                                                                                 // 25
      id: "changePassword"                                                                                    // 26
    }), "\n    "), "\n    ", HTML.FORM("\n      Change username: ", HTML.INPUT({                              // 27
      type: "text",                                                                                           // 28
      name: "newUsername"                                                                                     // 29
    }), " ", HTML.BR(), "\n      ", HTML.INPUT({                                                              // 30
      type: "submit",                                                                                         // 31
      class: "changeUsername",                                                                                // 32
      name: "changeUsername",                                                                                 // 33
      id: "changeUsername"                                                                                    // 34
    }), "\n    "), "\n  " ];                                                                                  // 35
  }, function() {                                                                                             // 36
    return [ "\n      Email: ", Blaze.Each(function() {                                                       // 37
      return Spacebars.call(Spacebars.dot(view.lookup("user"), "emails"));                                    // 38
    }, function() {                                                                                           // 39
      return [ "\n        ", Blaze.View("lookup:address", function() {                                        // 40
        return Spacebars.mustache(view.lookup("address"));                                                    // 41
      }), "\n      " ];                                                                                       // 42
    }), " ", HTML.BR(), "\n      Username: ", Blaze.View("lookup:user.username", function() {                 // 43
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                              // 44
    }), " ", HTML.BR(), "\n      ", HTML.BUTTON({                                                             // 45
      class: "change-settings"                                                                                // 46
    }, "Change Settings"), "\n  " ];                                                                          // 47
  }) ];                                                                                                       // 48
}));                                                                                                          // 49
                                                                                                              // 50
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Login.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/accounts/template.Login.js                                                                          //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("Login");                                                                                // 2
Template["Login"] = new Template("Template.Login", (function() {                                              // 3
  var view = this;                                                                                            // 4
  return HTML.FORM("\n        ", HTML.BODY("\n            ", HTML.Raw('<div class="container">\n                <div class="row ">\n                    <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">\n                        <div class="panel panel-default">\n                            <div class="panel-heading">\n                        <strong>   Enter Details To Login </strong>\n                            </div>\n                            <div class="panel-body">\n                                <form role="form">\n                                        <br>\n                                        <div class="form-group input-group">\n                                            <span class="input-group-addon"><i class="fa fa-tag"></i></span>\n                                            <input type="text" class="form-control" placeholder="Your Username ">\n                                        </div>\n                                                                                <div class="form-group input-group">\n                                            <span class="input-group-addon"><i class="fa fa-lock"></i></span>\n                                            <input type="password" class="form-control" placeholder="Your Password">\n                                        </div>\n                                    <div class="form-group">\n                                            <label class="checkbox-inline">\n                                                <input type="checkbox"> Remember me\n                                            </label>\n                                            <span class="pull-right">\n                                                    <a href="#">Forget password ? </a>\n                                            </span>\n                                        </div>\n\n                                        <a href="index.html" class="btn btn-primary ">Login Now</a>\n                                    <hr>\n                                    Not registered ? <a href="" class="register">click here </a>\n                                    </form>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>'), "\n        ", HTML.SCRIPT("\n        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n        ga('create', 'UA-38955291-1', 'auto');\n        ga('send', 'pageview');\n\n        "), "\n        "), "\n    ");
}));                                                                                                          // 6
                                                                                                              // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Register.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/accounts/template.Register.js                                                                       //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("Register");                                                                             // 2
Template["Register"] = new Template("Template.Register", (function() {                                        // 3
  var view = this;                                                                                            // 4
  return HTML.BODY(HTML.Raw('\n    <div class="container">\n        <div class="row text-center  ">\n            <div class="col-md-12">\n                <br><br>\n                <h2> Register Now! </h2>\n\n                <h5>( Register yourself to get access )</h5>\n                 <br>\n            </div>\n        </div>\n         <div class="row">\n\n                <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">\n                        <div class="panel panel-default">\n                            <div class="panel-heading">\n                        <strong>  New User ? Register Yourself </strong>\n                            </div>\n                            <div class="panel-body">\n                                <form role="form">\n<br>\n                                        <div class="form-group input-group">\n                                            <span class="input-group-addon"><i class="fa fa-circle-o-notch"></i></span>\n                                            <input type="text" class="form-control" placeholder="Your Name">\n                                        </div>\n                                     <div class="form-group input-group">\n                                            <span class="input-group-addon"><i class="fa fa-tag"></i></span>\n                                            <input type="text" class="form-control" placeholder="Desired Username">\n                                        </div>\n                                         <div class="form-group input-group">\n                                            <span class="input-group-addon">@</span>\n                                            <input type="text" class="form-control" placeholder="Your Email">\n                                        </div>\n                                      <div class="form-group input-group">\n                                            <span class="input-group-addon"><i class="fa fa-lock"></i></span>\n                                            <input type="password" class="form-control" placeholder="Enter Password">\n                                        </div>\n                                     <div class="form-group input-group">\n                                            <span class="input-group-addon"><i class="fa fa-lock"></i></span>\n                                            <input type="password" class="form-control" placeholder="Retype Password">\n                                        </div>\n\n                                     <a href="/dashboard" class="btn btn-success ">Register Me</a>\n                                    <hr>\n                                    Already Registered ?  <a href="/home">Login here</a>\n                                    </form>\n                            </div>\n\n                        </div>\n                    </div>\n\n\n        </div>\n    </div>\n'), HTML.SCRIPT("\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-38955291-1', 'auto');\n  ga('send', 'pageview');\n\n"), "\n");
}));                                                                                                          // 6
                                                                                                              // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AccountSettings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/accounts/AccountSettings.js                                                                         //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.AccountSettings.events({                                                                             // 1
    'click .changePassword': function (event) {                                                               // 2
        event.preventDefault();                                                                               // 3
        console.log(event);                                                                                   // 4
        var oldPass = event.target.oldPassword.value;                                                         // 5
        var newPass = event.target.newPassword.value;                                                         // 6
        var newPass2 = event.target.newPassword2.value;                                                       // 7
        Accounts.changePassword(oldPass, newPass, function (error) {                                          // 8
            if (error) {                                                                                      // 9
                console.log("ERROR" + error.reason);                                                          // 10
            } else {                                                                                          // 11
                console.log("Password Changed");                                                              // 13
            }                                                                                                 // 14
        });                                                                                                   // 15
    },                                                                                                        // 16
    'click .changeUsername': function (event) {                                                               // 17
        event.preventDefault();                                                                               // 18
        var newUsername = event.target.changeUsername.value;                                                  // 19
        Accounts.changeUsername(Meteor.userID(), newUsername);                                                // 20
    }                                                                                                         // 21
});                                                                                                           // 1
Template.AccountSettings.helpers({                                                                            // 24
    user: function () {                                                                                       // 25
        return Meteor.user();                                                                                 // 26
    }                                                                                                         // 27
});                                                                                                           // 24
Template.AccountSettings.events({                                                                             // 30
    'click .fa-close': function () {                                                                          // 31
        Session.set('changeSettings', false);                                                                 // 32
    }                                                                                                         // 33
});                                                                                                           // 30
Template.AccountSettings.events({                                                                             // 36
    'click .change-settings': function () {                                                                   // 37
        Session.set('changeSettings', true);                                                                  // 38
    }                                                                                                         // 39
});                                                                                                           // 36
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"dashboard":{"template.Dashboard.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/dashboard/template.Dashboard.js                                                                     //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("Dashboard");                                                                            // 2
Template["Dashboard"] = new Template("Template.Dashboard", (function() {                                      // 3
  var view = this;                                                                                            // 4
  return "Welcome to the Dashboard.";                                                                         // 5
}));                                                                                                          // 6
                                                                                                              // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"layouts":{"template.HomeLayout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/layouts/template.HomeLayout.js                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("HomeLayout");                                                                           // 2
Template["HomeLayout"] = new Template("Template.HomeLayout", (function() {                                    // 3
  var view = this;                                                                                            // 4
  return [ Spacebars.include(view.lookupTemplate("Header")), HTML.Raw('\n        <main>\n            <div class="billboard">\n                <h2>Study Together</h2>\n            </div>\n        </main>\n    '), Blaze.If(function() {
    return Spacebars.dataMustache(Spacebars.dot(view.lookup("$"), "Session", "get"), "register");             // 6
  }, function() {                                                                                             // 7
    return [ "\n        ", Spacebars.include(view.lookupTemplate("Register")), "\n    " ];                    // 8
  }, function() {                                                                                             // 9
    return [ "\n        ", Spacebars.include(view.lookupTemplate("Login")), "\n    " ];                       // 10
  }) ];                                                                                                       // 11
}));                                                                                                          // 12
                                                                                                              // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.MainLayout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/layouts/template.MainLayout.js                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("MainLayout");                                                                           // 2
Template["MainLayout"] = new Template("Template.MainLayout", (function() {                                    // 3
  var view = this;                                                                                            // 4
  return [ Spacebars.include(view.lookupTemplate("Header")), "\n    ", Spacebars.include(view.lookupTemplate("SideNav")), "\n    ", HTML.MAIN({
    class: "main-layout"                                                                                      // 6
  }, "\n        ", Blaze._TemplateWith(function() {                                                           // 7
    return {                                                                                                  // 8
      template: Spacebars.call(view.lookup("main"))                                                           // 9
    };                                                                                                        // 10
  }, function() {                                                                                             // 11
    return Spacebars.include(function() {                                                                     // 12
      return Spacebars.call(Template.__dynamic);                                                              // 13
    });                                                                                                       // 14
  }), "\n    ") ];                                                                                            // 15
}));                                                                                                          // 16
                                                                                                              // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"HomeLayout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/layouts/HomeLayout.js                                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.HomeLayout.events({                                                                                  // 1
    'click .register': function () {                                                                          // 2
        Session.set('register', true);                                                                        // 3
    }                                                                                                         // 4
});                                                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"partials":{"template.Header.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/partials/template.Header.js                                                                         //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("Header");                                                                               // 2
Template["Header"] = new Template("Template.Header", (function() {                                            // 3
  var view = this;                                                                                            // 4
  return HTML.HEADER(HTML.Raw("\n        <h1>StudyRing</h1>\n    "), Spacebars.include(view.lookupTemplate("loginButtons")), "\n    ");
}));                                                                                                          // 6
                                                                                                              // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.SideNav.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/partials/template.SideNav.js                                                                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("SideNav");                                                                              // 2
Template["SideNav"] = new Template("Template.SideNav", (function() {                                          // 3
  var view = this;                                                                                            // 4
  return HTML.Raw('<nav class="side-nav">\n        <ul>\n            <li><a href="/"><i class="fa fa-home"></i>Dashboard</a></li>\n            <li><a href="/rings"><i class="fa fa-list"></i>Rings</a></li>\n            <li><a href="/browse-rings"><i class="fa fa-list"></i>Browse Rings</a></li>\n            <li><a href="/account"><i class="fa fa-list"></i>Account Settings</a></li>\n        </ul>\n    </nav>');
}));                                                                                                          // 6
                                                                                                              // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"rings":{"template.BrowseRings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/rings/template.BrowseRings.js                                                                       //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("BrowseRings");                                                                          // 2
Template["BrowseRings"] = new Template("Template.BrowseRings", (function() {                                  // 3
  var view = this;                                                                                            // 4
  return Blaze.If(function() {                                                                                // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                      // 6
  }, function() {                                                                                             // 7
    return [ "\n        ", Blaze.Each(function() {                                                            // 8
      return Spacebars.call(view.lookup("rings"));                                                            // 9
    }, function() {                                                                                           // 10
      return [ "\n            ", Spacebars.include(view.lookupTemplate("RingInfo")), "\n        " ];          // 11
    }), "\n    " ];                                                                                           // 12
  }, function() {                                                                                             // 13
    return [ "\n        ", HTML.P("Loading"), "\n    " ];                                                     // 14
  });                                                                                                         // 15
}));                                                                                                          // 16
                                                                                                              // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.NewRing.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/rings/template.NewRing.js                                                                           //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("NewRing");                                                                              // 2
Template["NewRing"] = new Template("Template.NewRing", (function() {                                          // 3
  var view = this;                                                                                            // 4
  return HTML.DIV({                                                                                           // 5
    class: "new-ring-container"                                                                               // 6
  }, HTML.Raw('\n        <i class="fa fa-close"></i>\n        '), Blaze._TemplateWith(function() {            // 7
    return {                                                                                                  // 8
      collection: Spacebars.call("Rings"),                                                                    // 9
      id: Spacebars.call("newRingsForm"),                                                                     // 10
      type: Spacebars.call("insert"),                                                                         // 11
      class: Spacebars.call("newRingsForm")                                                                   // 12
    };                                                                                                        // 13
  }, function() {                                                                                             // 14
    return Spacebars.include(view.lookupTemplate("quickForm"));                                               // 15
  }), "\n    ");                                                                                              // 16
}));                                                                                                          // 17
                                                                                                              // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.RingInfo.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/rings/template.RingInfo.js                                                                          //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("RingInfo");                                                                             // 2
Template["RingInfo"] = new Template("Template.RingInfo", (function() {                                        // 3
  var view = this;                                                                                            // 4
  return HTML.ARTICLE({                                                                                       // 5
    class: function() {                                                                                       // 6
      return [ "ring ", Blaze.If(function() {                                                                 // 7
        return Spacebars.call(view.lookup("isPrivate"));                                                      // 8
      }, function() {                                                                                         // 9
        return "is-private";                                                                                  // 10
      }) ];                                                                                                   // 11
    }                                                                                                         // 12
  }, "\n        ", HTML.H3("\n            ", Blaze.View("lookup:name", function() {                           // 13
    return Spacebars.mustache(view.lookup("name"));                                                           // 14
  }), "\n        "), "\n        ", Blaze.If(function() {                                                      // 15
    return Spacebars.call(view.lookup("editMode"));                                                           // 16
  }, function() {                                                                                             // 17
    return [ "\n                ", Blaze._TemplateWith(function() {                                           // 18
      return {                                                                                                // 19
        collection: Spacebars.call("Rings"),                                                                  // 20
        id: Spacebars.call(view.lookup("updateRingId")),                                                      // 21
        type: Spacebars.call("update"),                                                                       // 22
        doc: Spacebars.call(view.lookup(".")),                                                                // 23
        autosave: Spacebars.call(true)                                                                        // 24
      };                                                                                                      // 25
    }, function() {                                                                                           // 26
      return Spacebars.include(view.lookupTemplate("quickForm"));                                             // 27
    }), "\n            " ];                                                                                   // 28
  }, function() {                                                                                             // 29
    return [ "\n            ", HTML.P("\n                ", Blaze.View("lookup:desc", function() {            // 30
      return Spacebars.mustache(view.lookup("desc"));                                                         // 31
    }), "\n            "), "\n            ", HTML.P("\n                ", Blaze.Each(function() {             // 32
      return Spacebars.call(view.lookup("tags"));                                                             // 33
    }, function() {                                                                                           // 34
      return [ "\n                    ", HTML.SPAN({                                                          // 35
        class: "tags"                                                                                         // 36
      }, Blaze.View("lookup:name", function() {                                                               // 37
        return Spacebars.mustache(view.lookup("name"));                                                       // 38
      })), "\n                " ];                                                                            // 39
    }), "\n            "), "\n            ", HTML.A({                                                         // 40
      href: function() {                                                                                      // 41
        return [ "/rings/", Spacebars.mustache(view.lookup("_id")) ];                                         // 42
      }                                                                                                       // 43
    }, "View Details"), "\n            ", Blaze.If(function() {                                               // 44
      return Spacebars.call(view.lookup("isPrivate"));                                                        // 45
    }, function() {                                                                                           // 46
      return [ "\n                ", HTML.BUTTON({                                                            // 47
        class: "btn-primary set-public"                                                                       // 48
      }, "Set Public"), "\n                " ];                                                               // 49
    }, function() {                                                                                           // 50
      return [ "\n                ", HTML.BUTTON({                                                            // 51
        class: "btn-deny set-private"                                                                         // 52
      }, "Set Private"), "\n            " ];                                                                  // 53
    }), "\n        " ];                                                                                       // 54
  }), HTML.Raw('\n        <i class="fa fa-pencil"></i>\n        <i class="fa fa-trash"></i>\n    '));         // 55
}));                                                                                                          // 56
                                                                                                              // 57
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.RingSingle.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/rings/template.RingSingle.js                                                                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("RingSingle");                                                                           // 2
Template["RingSingle"] = new Template("Template.RingSingle", (function() {                                    // 3
  var view = this;                                                                                            // 4
  return HTML.ARTICLE({                                                                                       // 5
    class: "ring"                                                                                             // 6
  }, "\n        ", HTML.H3("\n            ", Blaze.View("lookup:ring.name", function() {                      // 7
    return Spacebars.mustache(Spacebars.dot(view.lookup("ring"), "name"));                                    // 8
  }), "\n        "), "\n        ", HTML.P("\n            ", Blaze.View("lookup:ring.desc", function() {       // 9
    return Spacebars.mustache(Spacebars.dot(view.lookup("ring"), "desc"));                                    // 10
  }), "\n        "), "\n        ", HTML.P("\n            ", Blaze.Each(function() {                           // 11
    return Spacebars.call(Spacebars.dot(view.lookup("ring"), "tags"));                                        // 12
  }, function() {                                                                                             // 13
    return [ "\n                ", HTML.SPAN({                                                                // 14
      class: "tags"                                                                                           // 15
    }, Blaze.View("lookup:name", function() {                                                                 // 16
      return Spacebars.mustache(view.lookup("name"));                                                         // 17
    })), "\n            " ];                                                                                  // 18
  }), "\n        "), "\n    ");                                                                               // 19
}));                                                                                                          // 20
                                                                                                              // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Rings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/rings/template.Rings.js                                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("Rings");                                                                                // 2
Template["Rings"] = new Template("Template.Rings", (function() {                                              // 3
  var view = this;                                                                                            // 4
  return Blaze.If(function() {                                                                                // 5
    return Spacebars.dataMustache(Spacebars.dot(view.lookup("$"), "Session", "get"), "newRing");              // 6
  }, function() {                                                                                             // 7
    return [ "\n        ", Spacebars.include(view.lookupTemplate("NewRing")), "\n" ];                         // 8
  }, function() {                                                                                             // 9
    return [ "\n    ", HTML.BUTTON({                                                                          // 10
      class: "new-ring"                                                                                       // 11
    }, "New Ring"), "\n" ];                                                                                   // 12
  });                                                                                                         // 13
}));                                                                                                          // 14
                                                                                                              // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"BrowseRings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/rings/BrowseRings.js                                                                                //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.BrowseRings.onCreated(function () {                                                                  // 1
    var self = this;                                                                                          // 2
    self.autorun(function () {                                                                                // 3
        self.subscribe('rings');                                                                              // 4
    });                                                                                                       // 5
});                                                                                                           // 6
Template.BrowseRings.helpers({                                                                                // 8
    rings: function () {                                                                                      // 9
        return Rings.find({});                                                                                // 10
    }                                                                                                         // 11
});                                                                                                           // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NewRing.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/rings/NewRing.js                                                                                    //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.NewRing.events({                                                                                     // 1
    'click .fa-close': function () {                                                                          // 2
        Session.set('newRing', false);                                                                        // 3
    }                                                                                                         // 4
});                                                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RingInfo.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/rings/RingInfo.js                                                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.RingInfo.onCreated(function () {                                                                     // 1
    this.editMode = new ReactiveVar(false);                                                                   // 2
});                                                                                                           // 3
Template.RingInfo.events({                                                                                    // 6
    'click .set-private': function () {                                                                       // 7
        Meteor.call('togglePrivate', this._id, this.isPrivate);                                               // 8
    },                                                                                                        // 9
    'click .set-public': function () {                                                                        // 10
        Meteor.call('togglePublic', this._id, this.isPrivate);                                                // 11
    },                                                                                                        // 12
    'click .fa-trash': function () {                                                                          // 13
        Meteor.call('deleteRing', this._id);                                                                  // 14
    },                                                                                                        // 15
    'click .fa-pencil': function (event, template) {                                                          // 16
        template.editMode.set(!template.editMode.get());                                                      // 17
    }                                                                                                         // 18
});                                                                                                           // 6
Template.RingInfo.helpers({                                                                                   // 21
    updateRingId: function () {                                                                               // 22
        return this._id;                                                                                      // 23
    },                                                                                                        // 24
    editMode: function () {                                                                                   // 25
        return Template.instance().editMode.get();                                                            // 26
    }                                                                                                         // 27
});                                                                                                           // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RingSingle.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/rings/RingSingle.js                                                                                 //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.RingSingle.onCreated(function () {                                                                   // 1
    var self = this;                                                                                          // 2
    self.autorun(function () {                                                                                // 3
        var id = FlowRouter.getParam('id');                                                                   // 4
        self.subscribe('singleRing', id);                                                                     // 5
    });                                                                                                       // 6
});                                                                                                           // 7
Template.RingSingle.helpers({                                                                                 // 9
    ring: function () {                                                                                       // 10
        var id = FlowRouter.getParam('id');                                                                   // 11
        return Rings.findOne({                                                                                // 12
            _id: id                                                                                           // 12
        });                                                                                                   // 12
    }                                                                                                         // 13
});                                                                                                           // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Rings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/rings/Rings.js                                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.Rings.events({                                                                                       // 1
    'click .new-ring': function () {                                                                          // 2
        Session.set('newRing', true);                                                                         // 3
    }                                                                                                         // 4
});                                                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/main.js                                                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"routes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/routes.js                                                                                              //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
if (Meteor.isClient) {                                                                                        // 1
    Accounts.onLogin(function () {                                                                            // 2
        FlowRouter.go('dashboard');                                                                           // 3
    });                                                                                                       // 4
    Accounts.onLogout(function () {                                                                           // 6
        FlowRouter.go('home');                                                                                // 7
    });                                                                                                       // 8
}                                                                                                             // 9
                                                                                                              //
FlowRouter.triggers.enter([function (context, redirect) {                                                     // 11
    if (!Meteor.userId()) {                                                                                   // 12
        FlowRouter.go('home');                                                                                // 13
    }                                                                                                         // 14
}]);                                                                                                          // 15
FlowRouter.route('/', {                                                                                       // 17
    name: 'home',                                                                                             // 18
    action: function () {                                                                                     // 19
        if (Meteor.userId()) {                                                                                // 20
            FlowRouter.go('dashboard');                                                                       // 21
        }                                                                                                     // 22
                                                                                                              //
        BlazeLayout.render('HomeLayout');                                                                     // 23
    }                                                                                                         // 24
});                                                                                                           // 17
FlowRouter.route('/dashboard', {                                                                              // 27
    name: 'dashboard',                                                                                        // 28
    action: function () {                                                                                     // 29
        BlazeLayout.render('MainLayout', {                                                                    // 30
            main: 'Dashboard'                                                                                 // 30
        });                                                                                                   // 30
    }                                                                                                         // 31
});                                                                                                           // 27
FlowRouter.route('/rings', {                                                                                  // 35
    name: 'rings',                                                                                            // 36
    action: function () {                                                                                     // 37
        BlazeLayout.render('MainLayout', {                                                                    // 38
            main: 'Rings'                                                                                     // 38
        });                                                                                                   // 38
    }                                                                                                         // 39
});                                                                                                           // 35
FlowRouter.route('/browse-rings', {                                                                           // 42
    name: 'browse-rings',                                                                                     // 43
    action: function () {                                                                                     // 44
        BlazeLayout.render('MainLayout', {                                                                    // 45
            main: 'BrowseRings'                                                                               // 45
        });                                                                                                   // 45
    }                                                                                                         // 46
});                                                                                                           // 42
FlowRouter.route('/rings/:id', {                                                                              // 49
    name: 'ring-single',                                                                                      // 50
    action: function () {                                                                                     // 51
        BlazeLayout.render('MainLayout', {                                                                    // 52
            main: 'RingSingle'                                                                                // 52
        });                                                                                                   // 52
    }                                                                                                         // 53
});                                                                                                           // 49
FlowRouter.route('/account', {                                                                                // 56
    name: 'account-settings',                                                                                 // 57
    action: function () {                                                                                     // 58
        BlazeLayout.render('MainLayout', {                                                                    // 59
            main: 'AccountSettings'                                                                           // 59
        });                                                                                                   // 59
    }                                                                                                         // 60
});                                                                                                           // 56
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"Rings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// collections/Rings.js                                                                                       //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Rings = new Mongo.Collection('rings');                                                                        // 1
Rings.allow({                                                                                                 // 3
    insert: function (userId, doc) {                                                                          // 4
        return !!userId;                                                                                      // 5
    },                                                                                                        // 6
    update: function (userId, doc) {                                                                          // 7
        return !!userId;                                                                                      // 8
    }                                                                                                         // 9
});                                                                                                           // 3
Tags = new SimpleSchema({                                                                                     // 12
    name: {                                                                                                   // 13
        type: String                                                                                          // 14
    }                                                                                                         // 13
});                                                                                                           // 12
RingSchema = new SimpleSchema({                                                                               // 18
    name: {                                                                                                   // 19
        type: String,                                                                                         // 20
        label: "Name"                                                                                         // 21
    },                                                                                                        // 19
    desc: {                                                                                                   // 23
        type: String,                                                                                         // 24
        label: "Description"                                                                                  // 25
    },                                                                                                        // 23
    tags: {                                                                                                   // 27
        type: [Tags]                                                                                          // 28
    },                                                                                                        // 27
    isPrivate: {                                                                                              // 30
        type: Boolean,                                                                                        // 31
        defaultValue: false,                                                                                  // 32
        optional: true,                                                                                       // 33
        autoform: {                                                                                           // 34
            type: "hidden"                                                                                    // 35
        }                                                                                                     // 34
    },                                                                                                        // 30
    createdBy: {                                                                                              // 38
        type: String,                                                                                         // 39
        label: "Created By",                                                                                  // 40
        autoValue: function () {                                                                              // 41
            return this.userId;                                                                               // 42
        },                                                                                                    // 43
        autoform: {                                                                                           // 44
            type: "hidden"                                                                                    // 45
        }                                                                                                     // 44
    },                                                                                                        // 38
    createdAt: {                                                                                              // 48
        type: Date,                                                                                           // 49
        label: "Created At",                                                                                  // 50
        autoValue: function () {                                                                              // 51
            return new Date();                                                                                // 52
        },                                                                                                    // 53
        autoform: {                                                                                           // 54
            type: "hidden"                                                                                    // 55
        }                                                                                                     // 54
    }                                                                                                         // 48
});                                                                                                           // 18
Meteor.methods({                                                                                              // 60
    togglePrivate: function (id, currentState) {                                                              // 61
        Rings.update(id, {                                                                                    // 62
            $set: {                                                                                           // 63
                isPrivate: true                                                                               // 64
            }                                                                                                 // 63
        });                                                                                                   // 62
    },                                                                                                        // 67
    togglePublic: function (id, currentState) {                                                               // 68
        Rings.update(id, {                                                                                    // 69
            $set: {                                                                                           // 70
                isPrivate: false                                                                              // 71
            }                                                                                                 // 70
        });                                                                                                   // 69
    },                                                                                                        // 74
    deleteRing: function (id) {                                                                               // 75
        Rings.remove(id);                                                                                     // 76
    }                                                                                                         // 77
});                                                                                                           // 60
Rings.attachSchema(RingSchema);                                                                               // 80
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Users.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// collections/Users.js                                                                                       //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
User = new SimpleSchema({                                                                                     // 1
    username: {                                                                                               // 2
        type: String,                                                                                         // 3
        // For accounts-password, either emails or username is required, but not both. It is OK to make this  // 4
        // optional here because the accounts-password package does its own validation.                       // 5
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true                                                                                        // 7
    },                                                                                                        // 2
    emails: {                                                                                                 // 9
        type: Array,                                                                                          // 10
        // For accounts-password, either emails or username is required, but not both. It is OK to make this  // 11
        // optional here because the accounts-password package does its own validation.                       // 12
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true                                                                                        // 14
    },                                                                                                        // 9
    "emails.$": {                                                                                             // 16
        type: Object                                                                                          // 17
    },                                                                                                        // 16
    "emails.$.address": {                                                                                     // 19
        type: String,                                                                                         // 20
        regEx: SimpleSchema.RegEx.Email                                                                       // 21
    },                                                                                                        // 19
    // Make sure this services field is in your schema if you're using any of the accounts packages           // 23
    services: {                                                                                               // 24
        type: Object,                                                                                         // 25
        optional: true,                                                                                       // 26
        blackbox: true,                                                                                       // 27
        autoform: {                                                                                           // 28
            type: "hidden"                                                                                    // 29
        }                                                                                                     // 28
    }                                                                                                         // 24
});                                                                                                           // 1
Meteor.users.attachSchema(User);                                                                              // 34
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/accounts/template.AccountSettings.js");
require("./client/accounts/template.Login.js");
require("./client/accounts/template.Register.js");
require("./client/dashboard/template.Dashboard.js");
require("./client/layouts/template.HomeLayout.js");
require("./client/layouts/template.MainLayout.js");
require("./client/partials/template.Header.js");
require("./client/partials/template.SideNav.js");
require("./client/rings/template.BrowseRings.js");
require("./client/rings/template.NewRing.js");
require("./client/rings/template.RingInfo.js");
require("./client/rings/template.RingSingle.js");
require("./client/rings/template.Rings.js");
require("./lib/routes.js");
require("./client/accounts/AccountSettings.js");
require("./client/layouts/HomeLayout.js");
require("./client/rings/BrowseRings.js");
require("./client/rings/NewRing.js");
require("./client/rings/RingInfo.js");
require("./client/rings/RingSingle.js");
require("./client/rings/Rings.js");
require("./collections/Rings.js");
require("./collections/Users.js");
require("./client/main.js");