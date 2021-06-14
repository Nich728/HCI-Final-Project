function validation(e) {
    var a = 0
    var name = document.getElementById("name").value
    var email= document.getElementById("email").value
    var subject = document.getElementById("subject").value
    var error = []

    console.log(email);

    if(!name){
        error.push("Name field must be filled!")
    }

    if(!email){
        error.push("E-Mail field must be filled!")
    } else if(email.indexOf("@")== -1 || email.indexOf(".")== -1 || email.length <= 2){
        error.push("Invalid Email!")
    }   

    if(!subject){
        error.push("Message field must be filled!")
    }

    if (error.length > a) {
        alert(error.join("\n"))
    }

}
