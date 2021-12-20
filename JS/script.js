let buttonMenu = document.querySelector('#button-menu');
let menu = document.querySelector('#menu');

let arrow1 = document.getElementById("down-arrow1");
let arrow2 = document.getElementById("down-arrow2");
let portfolio = document.getElementById('portfolio');
let main_info = document.getElementById('main-info');

//FLECHE DE DEFILEMENT
arrow1.addEventListener('click', function(){
    portfolio.scrollIntoView();
});

//GESTION DU MENU
buttonMenu.addEventListener('click',function(){
  menu.classList.toggle('show-menu');
  buttonMenu.classList.toggle('close');
});


//INTRO ANIMATION
window.onload = function visitors(){
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  let i = 0;
  while (i<1){
    tl.to(".text-anim", { y: "0%", duration: 0.9, stagger: 0.25 });
    tl.to(".slider-anim", { y: "-100%", duration: 1.5, delay: 1.3 });
    tl.to(".intro-anim", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo(".introducing", { opacity: 0 }, { opacity: 1, duration: 0.8});
    tl.fromTo("#button-menu", { opacity: 0 }, { opacity: 1, duration: 0.8});
    tl.fromTo("#menu", { opacity: 0 }, { opacity: 1, duration: 1.15}); 
    i++
  }
}