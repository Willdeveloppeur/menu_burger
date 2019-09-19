const burger = document.getElementById('burger');

burger.addEventListener('click', () =>{
    burger.classList.toggle('active');
    
});

openMenu();
function openMenu(){
    var burgDisplay = document.getElementById('menu-right').style.display;
    var burger = document.getElementById('burger');
    burger.addEventListener('click', openMenu);
    if (burgDisplay == 'none'){
        document.getElementById('menu-right').style.display='block';
        document.getElementById('menu-left').style.display='block';
        document.getElementById("menu-right").animate([
            { transform: 'translateX(100%)' }, 
            { transform: 'translateX(0%)' }
          ], { 
            duration: 500
          });
          document.getElementById("menu-left").animate([
            { transform: 'translateX(100%)' }, 
            { transform: 'translateX(0%)' }
          ], { 
            duration: 500
          });
    }else{
        document.getElementById('menu-right').style.display='none';
        document.getElementById('menu-left').style.display='none';
        
    }
}

