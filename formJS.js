function inputvalidator(){
    var password = document.getElementById("pass").value;
    var input = document.getElementById("bday").value;
    var year = input.split("-") [0];
    var age = 2023-year;

        if (password.length < 8){
            document.getElementById("message1").innerHTML="Password must be at least 8 characters";
        }
        if (age < 21){
            document.getElementById("message2").innerHTML="Minors are not allowed!";
        }

        if(age >= 21 && password.length >= 8){
            document.getElementById("message3").innerHTML="Hooray! Your account has been successfully created.";
        }
      
}