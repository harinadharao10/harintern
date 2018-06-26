function validate(){
    var F = document.form.First_Name.value;
    var L = document.form.Last_Name.value;
    var M = document.form.Mobile_Number.value;


    if (F == "") {
        
        return false;
    }
    else if (L == "") {
        alert("please enter Lastname");

        return false;
    }
    
    else if(M.length<10){
        alert("mobile number is not valid");
        return false;
    }
    return true;
}
function validateEmail() { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email_Id);
} 