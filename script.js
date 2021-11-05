window.onload = function() {

    // modal mobile navbar 
    var crosss = document.querySelectorAll('.cross-icon-modal')    
    console.log(crosss)
    for(let i=0; i<crosss.length; i++){
        crosss[i].addEventListener("click", function(){
            document.querySelector('#suscription-accepted').style.display="none";
            document.querySelector('#suscription-fails').style.display="none";
        });
    }
            
    var cross = document.querySelector('.cross-icon');
    cross.addEventListener('click',function(){
        document.querySelector('.mobile-nav').style.display="none";
    })
    
    var hamburguer = document.querySelector('.hamburguer-menu')
    hamburguer.addEventListener('click',function(){
        document.querySelector('.mobile-nav').style.display="block";
    })
}