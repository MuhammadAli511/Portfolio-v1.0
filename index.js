window.onload = function(){
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener("click", loadMenu);

    function loadMenu(){
            menu.classList.toggle("-bottom-30");
            menu.classList.toggle("transtion-all");
            menu.classList.toggle("linear");
            menu.classList.toggle("duration-500");
    }

}
