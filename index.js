window.onload = function(){
    const btn = document.getElementById('mobile-menu-button');
    const btn2 = document.getElementById('mobile-menu-button2');
    const btn3 = document.getElementById('mobile-menu-button3');
    const btn4 = document.getElementById('mobile-menu-button4');
    const btn6 = document.getElementById('mobile-menu-button6');

    const menu = document.getElementById('mobile-menu');

    btn.addEventListener("click", loadMenu);
    btn2.addEventListener("click", unload);
    btn3.addEventListener("click", unload);
    btn4.addEventListener("click", unload);
    btn6.addEventListener("click", unload);

    function loadMenu(){
            menu.classList.toggle("-bottom-30");
            menu.classList.toggle("transtion-all");
            menu.classList.toggle("linear");
            menu.classList.toggle("duration-500");
    }
    function unload(){
        loadMenu();
    }

}
