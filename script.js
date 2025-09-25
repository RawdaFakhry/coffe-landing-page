const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
 
  breakpoints: {
    0:{
      slidesPerView: 1,  
    },
    768:{
      slidesPerView: 2,  
    },
    1024:{
      slidesPerView: 3,  
    },
  }
});

const darkbtn = document.querySelectorAll(".darkbtn");

darkbtn.forEach(btn => {
btn.addEventListener("click", function () {
  const nav = document.getElementsByClassName("fix")[0];
  const header = document.getElementsByClassName("homebg")[0];

  header.classList.toggle("darkbg");
  nav.classList.toggle("darkbg");

  // h1
  const h1s = document.querySelectorAll("h1");
  h1s.forEach(h1 => {
    h1.classList.toggle("h1dark");
  });

  // h2
  const h2s = document.querySelectorAll("h2");
  h2s.forEach(h2 => {
    h2.classList.toggle("h2dark");
  });

  // h3
  const h3s = document.querySelectorAll("h3");
  h3s.forEach(h3 => {
    h3.classList.toggle("h3dark");
  });

  // paragraphs
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(p => {
    p.classList.toggle("darktext");
  });


const main=document.querySelector("main");
    main.classList.toggle("maindark");

  // icon
  btn.classList.toggle("fa-sun");
  btn.classList.toggle("fa-moon");

const icons=document.querySelectorAll("i");
icons.forEach(icon=>{
  icon.classList.toggle("darktext");

})

//menu
const menu=document.getElementsByClassName("menuu")[0];
menu.classList.toggle("darkbg")
// testmonial 

const testmonial=document.getElementById("testmonial");
testmonial.classList.toggle("maindark");


const gallery=document.getElementById("gallery");
gallery.classList.toggle("darkbg");

const contact=document.getElementsByClassName("contact")[0];
contact.classList.toggle("maindark");



const footer=document.querySelector("footer");
footer.classList.toggle("darkbg");



});
})
