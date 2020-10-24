// Form
function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var last = document.forms["myForm"]["lname"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;

   
   
    if (name == "") {
      alert("First Name must be filled out");
      return false;
    
    } else if (last == "") {
        alert("Last Name must be filled out");
        return false;
    
    } else if (email == "") {
        alert("Email must be filled out");
        return false;
    
    } else if (password == "") {
        alert("Password must be filled out");
        return false;
    
    } else{
        alert("Error");  
    }

}
// Password
function password() {
    var x = document.getElementById("pass-input");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
