function checkUser(){
    let name = document.getElementById("username").value;
    let age = document.getElementById("age").value;
    let result = document.getElementById("result");
    let massage = document.getElementById("massage");

    if(name == "" || age == ""){
        alert("Please fill all field!");
        return
    }
    
    if(age>=18){
        result.innerText = "Hello. " + name + " -You are Eligible";
        result.style.color = "green";
        
    } else {
      result.innerText = "Sorry, " + name + " -You are Eligible";
      result.style.color = "red";
    }
    }