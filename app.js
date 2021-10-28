window.onload = function() {
    console.log("hello dom");
    
    // get all input elements with type "text"
    var userInput = document.querySelectorAll('input[type=text]')
    console.log(userInput)

    // autocomplete header
    let name = 'Hello!' 
    var hello = document.querySelector('.suscription-hello')
    userInput[0].addEventListener('keyup', function(e){
        name = e.target.value
        // console.log(name)
        hello.firstElementChild.textContent ='Hello '+name+'!'
    })
    
    // add blur event to all inputs
    for (let i = 0; i < userInput.length; i++) {
        userInput[i].addEventListener('blur',runEvent);
    }
        
    function runEvent(e) {
        // console.log(e.target.id)
        switch (e.target.id) {

            // full name validation
            case 'full-name':
                const fName = e.target.value
                const warning = document.createElement('small')
                warning.style.color='#ff0000'
                warning.style.fontSize='12px'
                warning.style.justifyContent='flex-end'
                
                if(fName.length<6) {
                    warning.textContent='your name must be at least 6 letters long'
                    console.log(warning)
                } 
                if(fName.search(' ') < 1) {
                    warning.textContent='your must enter your name and last name'
                    console.log(warning)
                }
                const container = document.querySelector('.suscription-full-name') 
                console.log(container)
                container.parentNode.insertBefore(warning,container.nextSibling)
            break;

            // email validation 
            case 'email':
                const email = e.target.value
                var regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(regexp.test(email)==false) {
                    console.log('not-valid')
                }
            break;

            // age validation
            case 'age':
                // age validation
                let age = e.target.value
                age = parseInt(age,10)
                if (Number.isInteger(age)&&age<18 || typeof(age) === NaN) {
                    console.log('not-valid')
                }
                break;
                
                // pgone number validation
                case 'phone':
                    // validate phone number
                    const phone = e.target.value
                    if(phone.length < 7) {
                        console.log('not-valid')
                    }              
                    // regexp
                    var regexp = /[(|)| |-]/g;
                    var myArray = regexp.exec(phone);
                    if(regexp.lastIndex > 0) {
                        console.log('not-valid') 
                    }
                break;
                
                // address validation
                case 'address':
                    const address = e.target.value
                    var regexp = /^[A-z0-9\s\.,/-]+$/
                    if(regexp.test(address)==false || address.search(' ') < 1) {
                        console.log('not-valid')
                    }
                break;
                
                // city validation
                case 'city':
                    const city = e.target.value
                    if(city.length < 3) {
                        console.log('not-valid')
                    }               
                break;

                // postal code validation 
                case 'postal-code':
                    const postalCode = e.target.value
                    if(postalCode.length < 3) {
                        console.log('not-valid')
                    }
                break;

                // id number validation 
                case 'ID-number':
                    const id = e.target.value
                    if(id.length < 7 || id.length > 8) {
                        console.log('not-valid')
                    }
                break;
                
            default:
                break;
        }
    }
}
            
            