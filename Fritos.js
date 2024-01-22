function toggleItem(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}




document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".landingcategoria", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.inOut",
        onComplete: function () {
            // Puedes agregar lógica adicional después de la animación si es necesario
        }
    });
});



