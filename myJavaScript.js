function showData(){
   var putEmail =  localStorage.getItem("email");
   document.getElementById("showEmail").innerHTML = putEmail ;
   f
   var putPhone = localStorage.getItem("phone");
   document.getElementById("showPhone").innerHTML = putPhone ;
   var putCompany = localStorage.getItem("comapny");
   document.getElementById("showCompany").innerHTML = putCompany;
   var putDescription = localStorage.getItem("description");
   document.getElementById("showDescription").innerHTML = putDescription;
   }
    
function submitData(){
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var company = document.getElementById("company").value;
    var description = document.getElementById("description").value;
    if(email == null || email === undefined || email.length <= 0 ){
        emailEmpty();
    }
    else if(phone == null || phone === undefined || phone.length <= 0){
        phoneEmpty();
    }
    else if(company == null || company === undefined || company.length <= 0){
        companyEmpty();
    }
    else if(description == null || description === undefined || description.length <= 0){
        descriptionEmpty();
    }
    else{

        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("comapny", company);
        localStorage.setItem("description", description);
        alert("Thank you for reaching via " + company + ". We will get back to you at " + email);
    }
}
function emailEmpty(){
    email.setCustomValidity("Please enter email.")
}
function phoneEmpty(){
    phone.setCustomValidity("Please enter your phone number.")
}
function companyEmpty(){
    company.setCustomValidity("Please enter your company name.")
}
function descriptionEmpty(){
    description.setCustomValidity("Please enter pleas enter detail.")
}