
    var form= document.getElementById("form");
    var email= document.getElementById("email");
    var emailValue= document.getElementById("email").value;
    var password= document.getElementById("password");
    var text= document.getElementById("text");
    var text2= document.getElementById("text2");
    var submitButton= document.getElementById("submitbtn");


    email.addEventListener("keydown", function(){
        var emailPattern = /^([a-zA-z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/
        if(emailPattern.test(email.value)){
            text.innerHTML = "";
        }
        else{
            text.innerHTML = "Invalid Email";
        }
    })

    password.addEventListener("keydown", function(){
        var passPattern = /^[a-zA-Z0-9@]*$/
        var correctpassword ="SmartServe@123"
        if(passPattern.test(password.value)){
            text2.innerHTML = "";
        }
        else{
            text2.innerHTML = "Invalid Password";
        }
    })

    submitButton.addEventListener("click", function(){
        var correctpassword = "SmartServe@123";
        if((password.value)===correctpassword){
            location.href = "dashboard.html";
        }
        else{
            text2.innerHTML = "Invalid Password";
        }
    })
    

  

