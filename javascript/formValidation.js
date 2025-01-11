function submitForm(){
    if(formValidate()){
        console.log("Form submitted successfully")
        console.log(sumbmit);
    }
    else{
        console.log("Form not submitted")
        console.log(" formValidate failed")
    }


}

function formValidate(){
    email ="Sece@gmail.com";
    password="123456";
    if(email==="Sece@gmail.com" &&password){
        return true
    }
    else{
        return false
    }
  
}