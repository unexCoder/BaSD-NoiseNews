window.onload = function() {

    var fName,email,age,address,city,phone,postalCode,id,password,repeatPassword;

    // get all input elements with type "text/password"
    var userInput = document.querySelectorAll('input[type=text]');
    var password = document.querySelectorAll('input[type=password]');

    // autocomplete header
    let name = 'Hello!' 
    var hello = document.querySelector('.suscription-hello')
    userInput[0].addEventListener('keyup', function(e){
        name = e.target.value;
        hello.firstElementChild.textContent ='Hello '+name+'!'
    })
    
    // add blur/keydown event to all inputs
    for (let i = 0; i < userInput.length; i++) {
        userInput[i].addEventListener('blur',blurEvent);
        userInput[i].addEventListener('keydown',keyDownEvent);
    }
    // add blur/keydown event to password inputs
    for (let i = 0; i < password.length; i++) {
        password[i].addEventListener('blur',blurEvent);;
        password[i].addEventListener('keydown',keyDownEvent);
    }

    function blurEvent(e) {

        // just for cleanner view
        if(e.target.value != '') {

            // warning element
            const warning = document.createElement('small')
            warning.style.color='#ff0000'
            warning.style.fontSize='12px'
            warning.style.justifyContent='flex-end'
            warning.className = 'warning'
    
            switch (e.target.id) {
    
                // full name validation w/regexp
                case 'full-name':
                    fName = e.target.value
                    regexp = /^[a-zA-Z-,]+\s+[a-zA-Z-, ]+$/
                    if(regexp.test(fName)==false || fName.length < 6) {
                        warning.textContent='your name must be at least 6 letters long'
                        const container = document.querySelector('.suscription-full-name') 
                        container.parentNode.insertBefore(warning,container.nextSibling)
                    }
                break;
    
                // email validation refactored w/regexp
                case 'email':
                    email = e.target.value
                    var regexp = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
                    if(regexp.test(email)==false) {
                        // console.log('not-valid')
                        warning.textContent='enter a avalid email'
                        const container = document.querySelector('.suscription-email') 
                        container.parentNode.insertBefore(warning,container.nextSibling)
                    }
                break;
    
                // age validation w/regexp
                case 'age':
                    // age validation refacored w/regexp
                    age = e.target.value
                    var regexp = /^(1[89]|[2-9][0-9])$/g
                    if(regexp.test(age)==false) {
                        // console.log('not-valid')
                        warning.textContent='your age must be at least 18 years old'
                        const container = document.querySelector('.suscription-age') 
                        container.parentNode.insertBefore(warning,container.nextSibling)
                    }
                    break;
                    
                    case 'phone':
                        // validate phone number refactored w/regexp
                        phone = e.target.value
                        var regexp = /^[0-9]{7,10}$/g
                        if(regexp.test(phone)==false) {
                            // console.log('not-valid')
                            warning.textContent='enter phone number without spaces or other chars'
                            const container = document.querySelector('.suscription-phone') 
                            container.parentNode.insertBefore(warning,container.nextSibling)
                        }
                    break;
                    
                    // address validation
                    case 'address':
                        address = e.target.value
                        var regexp = /^[A-z0-9\s\.,/-]+$/
                        if(regexp.test(address)==false || address.search(' ') < 1) {
                            // console.log('not-valid')
                            warning.textContent='enter street name and number'
                            const container = document.querySelector('.suscription-address') 
                            container.parentNode.insertBefore(warning,container.nextSibling)    
                        }
                    break;
                    
                    // city validation w/regexp
                    case 'city':
                        city = e.target.value
                        regexp = /^[A-Za-z]{3,}$/
                        if(regexp.test(city)==false) {
                            warning.textContent='enter at least 3 letters fot city'
                            const container = document.querySelector('.suscription-city') 
                            container.parentNode.insertBefore(warning,container.nextSibling)                       
                        }
                    break;
    
                    // postal code validation w/regexp
                    case 'postal-code':
                        postalCode = e.target.value
                        regexp = /^[A-Za-z0-9]{3,}$/
                        if(regexp.test(postalCode)==false) {
                            warning.textContent='enter at least 3 letters or numbers for postal code'
                            const container = document.querySelector('.suscription-postal-code') 
                            container.parentNode.insertBefore(warning,container.nextSibling)    
                        }
                    break;
    
                    // id number validation refactored w/regexp
                    case 'ID-number':
                        id = e.target.value
                        regexp = /^[0-9]{7,8}$/
                        if(regexp.test(id)==false) {
                            warning.textContent='enter a valid ID number please'
                            const container = document.querySelector('.suscription-id') 
                            container.parentNode.insertBefore(warning,container.nextSibling)        
                        }
                    break;
                    
                    // validate password w/regexp
                    case 'password':
                        password = e.target.value
                        var regexp = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/
                        if(regexp.test(password)==false) {
                            warning.textContent='enter a password with at least 1 number, 1 letter and 8 chars long'
                            const container = document.querySelector('.suscription-password') 
                            container.parentNode.insertBefore(warning,container.nextSibling)                               
                        }
                    break;

                    // validate repeat password
                    case 'repeat-password':
                        repeatPassword = e.target.value
                        if(repeatPassword != password) {
                            warning.textContent='your password does not match'
                            const container = document.querySelector('.suscription-repeat-password') 
                            container.parentNode.insertBefore(warning,container.nextSibling)                               
                        }
                    // // // //// //// //// //// //
                    break;
                default:
                    break;
            }
        }
    }

    // keydown event remove warning msgs
    function keyDownEvent (e) {
        var warnings = document.querySelector('.warning')
        if (warnings != null) {
            warnings.parentElement.removeChild(warnings)
        }
    }

    // submit form
    var submit = document.querySelector('input[type=submit]');
    // the submit event should be added to <form> tag
    submit.parentElement.parentElement.addEventListener('submit',submitEvent)
    
    function submitEvent(e){
        // prevent submittings while warnings
        var warnings = document.querySelector('.warning')
        if (warnings == null) {
            e.preventDefault()
            const str = 'Hello '+fName+'!'+'\n'+'Your submission info are:'+'\n'+
            'Email: '+email+'\n'+'Age: '+age+'\n'+'Phone: '+phone+'\n'+'Address: '+
            address+'\n'+'City: '+city+'\n'+'Postal Code: '+postalCode+'\n'+
            'ID Number: '+id
            alert(str)
        } else {
            alert(warnings.innerHTML)
        }
    }
}
            
            