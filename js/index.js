//Els
var ca_tos = document.getElementById("ca_tos"),
  ca_btn = document.getElementById("ca_btn");

//Enable/Disable SignUp Button
ca_tos.onchange = function() {
  if (ca_tos.checked) {
    ca_btn.removeAttribute("disabled");
  } else {
    ca_btn.setAttribute("disabled", "");
  }
};

//Els
var pw = document.getElementById("pw"),
  pw_c = document.getElementById("pw_c");

//Update Pattern attribute
pw.onchange = function() {
  pw_c.setAttribute("pattern", pw.value);
};