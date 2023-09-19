function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x.length <= 5) {
      alert("Name must be more than 5 characters");
      return false;
    }

    x = document.forms["myForm"]["email"].value;
    if (!validateEmail(x)) {
        alert("Email address must be valid");
        return false; 
    }

    x = document.forms["myForm"]["subject"].value;
    if (x.length <= 15) {
      alert("Subject must be more than 15 characters");
      return false;
    }

    x = document.forms["myForm"]["message"].value;
    if (x.length <= 25) {
      alert("Message must be more than 25 characters");
      return false;
    }
  }

console.log(validateForm);

function validateEmail(email) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }
  