let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .bar .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".certifications-slider",{
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});