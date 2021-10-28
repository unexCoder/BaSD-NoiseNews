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
                case 'email':
                    console.log(e.target.value)
                    const email = e.target.value
                break;
            case 'age':
                console.log(e.target.value)
                break;
            case 'phone':
                console.log(e.target.value)
                break;
            case 'address':
                console.log(e.target.value)
                break;
            case 'city':
                console.log(e.target.value)
                break;
            case 'postal-code':
                console.log(e.target.value)
                break;
            case 'ID-number':
                console.log(e.target.value)
                break;
                
            default:
                break;
        }
    }
}
            
            