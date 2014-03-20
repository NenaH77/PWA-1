/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    var fields = {
        username:document.querySelector('#f_username'),
        email:document.querySelector('#f_email'),
        phone:document.querySelector('#f_phone'),
        password:document.querySelector('#f_password'),
        ssn:document.querySelector('#f_ssn')
    };

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        //validateField(e);  //id = is the form input field ID

        validateField(fields.username);
        validateField(fields.email);
        validateField(fields.phone);
        validateField(fields.password);
        validateField(fields.ssn);

        e.preventDefault();
        return false;
    };

    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
            var pattern = /^([A-Z][a-z]+)\s([A-Z][a-z]+)$/;

        }else if (inputName.name === 'f_email'){
                var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        }else if (inputName.name === 'f_phone'){
            var pattern = /((\(d{3}\)?)|(\d{3}-))?\d{3}-\d{4}/;

        }else if (inputName.name === 'f_password'){
            var pattern = /^a-zA-Z\w{3,14}$/;

        }else if (inputName.name === 'f_ssn'){
            var pattern = /^\d{3}-?\d\d-?\d{4}$/;
        }

        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



