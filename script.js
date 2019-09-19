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
        
    }else{
        document.getElementById('menu-right').style.display='none';
        document.getElementById('menu-left').style.display='none';
    }
}

