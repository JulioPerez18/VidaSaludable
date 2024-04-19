window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

/* CAJA DE TEXTO */
window.addEventListener('scroll', function() {
    var caja = document.querySelector('.cajaanimado');
    var cajaTop = caja.offsetTop;
    var windowHeight = window.innerHeight;

    if (window.scrollY > cajaTop - (windowHeight / 2)) {
      caja.style.opacity = 1;
      caja.style.transform = 'translateY(0)';
    }
  });