function validation(e) {
    var a = 0
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var city = document.getElementById("city").value
    var pay = document.getElementById("paymethod").value
    var cardnum = document.getElementById("cardnum").value
    var valid = document.getElementById("validity").value
    var cvv = document.getElementById("cvv").value
    var confirm = document.getElementById("terms1").checked
    console.log(confirm)
    var error = []

    if(!name){
        error.push("Name must be filled!")
    }

    if(!email){
        error.push("E-Mail must be filled!")
    }else if(email.indexOf("@")== -1 || email.indexOf(".")== -1 || email.length <= 2){
        error.push("Invalid Email!")
    }

    if(!city){
        error.push("City must be filled!")
    }

    if(!cardnum && pay == "visa"){
        error.push("Card Number must be filled!")
    }else if(isNaN(cardnum)){
        error.push("Card Number input is invalid!")
    }

    if(!valid && pay == "visa"){
        error.push("Validity must be filled!")
    }else if(pay == "visa" && valid.indexOf("/")== -1 || isNaN(valid)){
        error.push("Validity input is invalid!")
    }

    if(!cvv && pay == "visa"){
        error.push("CVV number must be filled!")
    }else if(isNaN(cvv)){
        error.push("CVV input is invalid!")
    }

    if(!confirm){
        error.push("You must agree to the terms.");
    }

    if (error.length > a) {
        alert(error.join("\n"))
    }

}