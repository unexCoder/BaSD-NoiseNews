window.onload = function() {
            
    var cross = document.querySelector('.cross-icon');
    cross.addEventListener('click',function(){
        document.querySelector('.mobile-nav').style.display="none";
    })
    
    var hamburguer = document.querySelector('.hamburguer-menu')
    hamburguer.addEventListener('click',function(){
        document.querySelector('.mobile-nav').style.display="block";
    })
}