// Menu Hamburger
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.getElementById('menu-links');


    // Abrir/fechar menu
    menuToggle.addEventListener('click', function() {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
       
        menuToggle.setAttribute('aria-expanded', !isOpen);
        menuLinks.classList.toggle('active');
    });


    // Fechar menu ao clicar em um link
    const links = menuLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuLinks.classList.remove('active');
        });
    });


    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInsideNav = event.target.closest('nav');
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';


        if (!isClickInsideNav && isOpen) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuLinks.classList.remove('active');
        }
    });
});
