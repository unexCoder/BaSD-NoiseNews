window.onload = function() {
    var fName,email,age,address,city,phone,postalCode,id,password,repeatPassword;

    // get all input elements with type "text/password"
    var userInput = document.querySelectorAll('input[type=text]');
    var password = document.querySelectorAll('input[type=password]');

    // autocomplete header
    let name = 'Hello!'; 
    var hello = document.querySelector('.suscription-hello');
    userInput[0].addEventListener('keyup', function(e){
        name = e.target.value;
        hello.firstElementChild.textContent ='Hello '+name+'!';
    })
    
    // add blur/keydown event to all inputs
    for (let i = 0; i < userInput.length; i++) {
        userInput[i].addEventListener('blur',blurEvent);
        userInput[i].addEventListener('focus',focusEvent);
    }
    // add blur/keydown event to password inputs
    for (let i = 0; i < password.length; i++) {
        password[i].addEventListener('blur',blurEvent);
        password[i].addEventListener('focus',focusEvent);
    }

    function blurEvent(e) {

        // just for cleanner view / prevent warning on empty input
        if(e.target.value != '') {

            // warning element
            const warning = document.createElement('small');
            warning.style.color='#ff0000';
            warning.style.fontSize='12px';
            warning.style.justifyContent='flex-end';
            warning.className = 'warning';
    
            switch (e.target.id) {
    
                // full name validation w/regexp
                case 'full-name':
                    fName = e.target.value;
                    regexp = /^[a-zA-Z-,]+\s+[a-zA-Z-, ]+$/
                    if(regexp.test(fName)==false || fName.length < 6) {
                        const container = document.querySelector('.suscription-full-name'); 
                        // just one warning!
                        if(container.nextSibling.nodeName == '#text') {
                            warning.textContent='your name must be 6 letters or more';
                            container.parentNode.insertBefore(warning,container.nextSibling);
                        }
                    }
                break;
    
                // email validation refactored w/regexp
                case 'email':
                    email = e.target.value;
                    var regexp = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
                    if(regexp.test(email)==false) {
                        // console.log('not-valid')
                        const container = document.querySelector('.suscription-email'); 
                        // just one warning!
                        if(container.nextSibling.nodeName == '#text') {
                            warning.textContent='enter a valid email please'; 
                            container.parentNode.insertBefore(warning,container.nextSibling);
                        }
                    }
                break;
    
                // age validation w/regexp
                case 'age':
                    // age validation refacored w/regexp
                    age = e.target.value;
                    var regexp = /^(1[89]|[2-9][0-9])$/g
                    if(regexp.test(age)==false) {
                        // console.log('not-valid')
                        const container = document.querySelector('.suscription-age'); 
                        // just one warning!
                        if(container.nextSibling.nodeName == '#text') {
                            warning.textContent='your age must be 18 years or older';
                            container.parentNode.insertBefore(warning,container.nextSibling);
                        }
                    }
                break;
                    
                case 'phone':
                    // validate phone number refactored w/regexp
                    phone = e.target.value;
                    var regexp = /^[0-9]{7,10}$/g
                    if(regexp.test(phone)==false) {
                        // console.log('not-valid')
                        const container = document.querySelector('.suscription-phone'); 
                        // just one warning!
                        if(container.nextSibling.nodeName == '#text') {
                            warning.textContent='enter numbers without spaces or other chars';
                            container.parentNode.insertBefore(warning,container.nextSibling);
                        }
                    }
                break;
                    
                // address validation
                case 'address':
                    address = e.target.value;
                    var regexp = /^[A-z0-9\s\.,/-]+$/
                    if(regexp.test(address)==false || address.search(' ') < 1) {
                        // console.log('not-valid')
                        const container = document.querySelector('.suscription-address'); 
                        // just one warning!
                        if(container.nextSibling.nodeName == '#text') {
                            warning.textContent='enter street name and number';
                            container.parentNode.insertBefore(warning,container.nextSibling);
                        }
                    }
                break;
                    
                // city validation w/regexp
                case 'city':
                    city = e.target.value;
                    regexp = /^[A-Za-z]{3,}$/
                    if(regexp.test(city)==false) {
                        const container = document.querySelector('.suscription-city');
                        // just one warning!
                        if(container.nextSibling.nodeName == '#text') {
                            warning.textContent='enter at least 3 letters for city';
                            container.parentNode.insertBefore(warning,container.nextSibling);
                        }
                    }
                break;
    
                // postal code validation w/regexp
                case 'postal-code':
                    postalCode = e.target.value;
                    regexp = /^[A-Za-z0-9]{3,}$/
                    if(regexp.test(postalCode)==false) {
                        const container = document.querySelector('.suscription-postal-code');
                        // just one warning!
                        if(container.nextSibling.nodeName == '#text') {
                            warning.textContent='enter at least 3 letters or numbers for postal code';
                            container.parentNode.insertBefore(warning,container.nextSibling);
                        }
                    }
                break;
    
                // id number validation refactored w/regexp
                case 'ID-number':
                    id = e.target.value;
                    regexp = /^[0-9]{7,8}$/
                    if(regexp.test(id)==false) {
                        const container = document.querySelector('.suscription-id');
                        // just one warning!
                        if(container.nextSibling.nodeName == '#text') {
                            warning.textContent='enter a valid ID number please';
                            container.parentNode.insertBefore(warning,container.nextSibling);
                        }
                    }
                break;
                    
                // validate password w/regexp
                case 'password':
                    password = e.target.value;
                    var regexp = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/
                    if(regexp.test(password)==false) {
                        const container = document.querySelector('.suscription-password');
                        // just one warning!
                        if(container.nextSibling.nodeName == '#text') {
                            warning.textContent='enter a password with at least 1 number, 1 letter and 8 chars or more';
                            container.parentNode.insertBefore(warning,container.nextSibling);   
                        }
                    }
                break;

                // validate repeat password
                case 'repeat-password':
                    repeatPassword = e.target.value;
                    if(repeatPassword != password) {
                        const container = document.querySelector('.suscription-repeat-password');
                        // just one warning!
                        if(container.nextSibling.nodeName == '#text') {
                            warning.textContent='your password does not match';
                            container.parentNode.insertBefore(warning,container.nextSibling);
                        }
                    }
                break;
                // // // //// //// //// //// //
                default:
                break;
            }
        }
    }

    // foucs event remove warning msgs
    function focusEvent (e) {
        const warning = e.target.parentElement.nextSibling;
        if (warning.className == 'warning') {
            warning.parentElement.removeChild(warning);
        }
    }

    // submit form
    var submit = document.querySelector('input[type=submit]');
    submit.parentElement.parentElement.addEventListener('submit',submitEvent);
       
    // delete modal on cross click
    document.querySelector('.cross-icon-modal').addEventListener("click", function(){
        document.querySelector('.modal-container').style.display="none";
    });    
    
    // auto fill form
    const all_inputs = document.querySelectorAll('input');
    console.log(all_inputs);
    all_inputs.forEach((item,index) => {
        console.log(item,index)
        console.log(localStorage)
        if(item.type !== 'submit') {
            item.value = localStorage.getItem(item.name);
        }
    })
    
    function submitEvent(e){
        e.preventDefault();
        // prevent submittings while warnings       
        var warnings = document.querySelectorAll('.warning');
        if(fName == null || email == null || age == null || phone == null ||
            address == null || city == null || postalCode == null || id == null ||
            password == null ||repeatPassword == null) {
                // alert('please, complete all submission form');
                const modal = document.querySelector('.modal-container')
                const msg = document.querySelector('#modal-msg')
                msg.innerHTML = "Complete all fields, please" 
                modal.style.display="block";                

        } else if (warnings.length < 1 && localStorage.getItem('name') !== fName && 
        localStorage.getItem("email")!== email) {
            // fetch
            const URL = 'http://curso-dev-2021.herokuapp.com/newsletter'
            const args = `?name=${fName}&email=${email}&password=${password}&age=${age}&phone=${phone}&address=${address}&city=${city}&postal Code=${postalCode}&id=${id}`
                
            fetch(URL+args)
            .then( (res) => res.json() )
            .then((user_info) => {
                const info = Object.entries (user_info);
                const item_list = document.createElement('ul');
                info.forEach(item => {
                    // console.log(item[1]);
                    if(item[0] !== 'password') { // dont show password
                        const item_show = document.createElement('li');
                        item_show.innerHTML = item[0].substring(0,1).toUpperCase()+
                        item[0].substring(1) +': '+item[1];
                        item_list.appendChild(item_show);
                    }
                    // local storage
                    localStorage.setItem(item[0],item[1]);
                })

                const modal = document.querySelector('.modal-container');
                const msg = document.querySelector('#modal-msg');
                msg.innerHTML = "Welcome!";
                modal.appendChild(item_list); 
                modal.style.display="block";                
            }).catch((err) => {
                // console.log(err)
                const modal = document.querySelector('.modal-container');
                const msg = document.querySelector('#modal-msg');
                msg.innerHTML = "Your suscription failed :("; 
                modal.style.display="block";                
            }) 
         } else if (localStorage.getItem("name") === fName || localStorage.getItem("email") === email) {
            //  console.log("YOU ARE ALREADY SUSCRIPTED")
            const modal = document.querySelector('.modal-container');
            const msg = document.querySelector('#modal-msg');
            msg.innerHTML = "You are already suscripted!"; 
            modal.style.display="block";                
        }   
    }
}