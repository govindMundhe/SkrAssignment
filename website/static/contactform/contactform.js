<script>
var contactForm = function(settings){
  var reset = settings && settings.reset ? settings.reset : false;
  var self = window.location.toString();
  var querystring = self.split("?");
  if (querystring.length > 1) {
    var pairs = querystring[1].split("&");
    for (i in pairs) {
      var keyval = pairs[i].split("=");
      if (reset || sessionStorage.getItem(keyval[0]) === null) {
        sessionStorage.setItem(keyval[0], keyval[1]);
      }
    }
  }
  var hiddenFields = document.querySelectorAll("input[type=hidden]");
  for (var i=0; i<hiddenFields.length; i++) {
    var param = sessionStorage.getItem(hiddenFields[i].name);
    if (param) document.getElementById(hiddenFields[i].name).value = param;
  }
}
queryForm();
</script>
      }
    });
    return false;
  });

});
