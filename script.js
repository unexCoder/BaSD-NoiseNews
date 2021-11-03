window.onload = function() {

    // modal mobile navbar 
    var cross = document.querySelector('.cross-icon')
    cross.addEventListener('click',function(){
        cross.parentElement.parentElement.style.display="none"
    })

    var hamburguer = document.querySelector('.hamburguer-menu')
    hamburguer.addEventListener('click',function(){
        cross.parentElement.parentElement.style.display="block"
    })
}