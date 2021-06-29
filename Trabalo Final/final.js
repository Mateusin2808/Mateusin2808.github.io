var veri = 1;
var menuloja = document.getElementById('menu');

menuloja.addEventListener("click", aba);

function aba(){
    var menu = document.getElementById('menuII');
    
    if (veri == 1) {
        menu.style.left = "0px";
        veri = 0;
    }
    
    else{
        menu.style.left = "-100%";
        veri = 1;
    }
}



