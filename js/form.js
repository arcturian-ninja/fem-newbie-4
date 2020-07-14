var btnSubmit = document.getElementsByName('btn_submit')[0];

btnSubmit.addEventListener('click',function(ev){
    validateForm();
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm(){
   var email = document.getElementsByName('email')[0].value;
    var errorbox = document.getElementsByClassName('error-box')[0];
    
    if(email==''){
        errorbox.innerHTML='Please provide an email address';
        return;
    }

    if(!validateEmail(email)){
        errorbox.innerHTML='Please provide a valid email.';  
        return;   
    }

    location.reload(); 
}




