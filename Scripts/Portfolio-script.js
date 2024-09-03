const headerElement=document.querySelector('.header');
const navAnchor=document.querySelectorAll('.navbar a');
const sections=document.querySelectorAll('section');
checkSize();
// Opacity on Page Load
window.addEventListener('load',()=>{
  document.body.classList.add('fade-in');
  document.querySelector('.home .image-box').classList.add('box-fade-in');
});

// Header Active on scroll
window.addEventListener('resize',()=>{
  checkSize();
});

function  checkSize(){
  if(window.innerWidth>738){
    window.addEventListener('scroll',()=>{
      if(scrollY>300){
        document.querySelector('.header').style.background='rgb(97 97 97 / 55%)';
        document.querySelector('.header').style.backdropFilter='blur(10px)';
      }
      else{
        document.querySelector('.header').style.background='transparent';
        document.querySelector('.header').style.backdropFilter='blur(0px)';
      }
    });
  }
  else{
    document.querySelector('.header').style.background='rgb(97 97 97 / 55%)';
  }
}

// Smooth Scroll on Anchor Tags
navAnchor.forEach((navAnchors)=>{
  navAnchors.addEventListener('click',(event)=>{
    event.preventDefault();
    const id=navAnchors.dataset.id;
    if(id==='home'){
      window.scrollTo({top:0,behavior:'smooth'});
    }
    else{
      const section=document.getElementById(`${id}`);
      section.scrollIntoView({behavior:'smooth'});
    }
  });
});

// Hamburger Menu
const menu=document.querySelector('.hamburger-menu');
const navbar=document.querySelector('.navbar');
const overlay=document.querySelector('.js-overlay');
let isActive=false;
menu.addEventListener('click',(event)=>{
  event.preventDefault();
  if(isActive===false){
    navbar.classList.add('navbar-phone');
    overlay.classList.add('overlay-blur');
    menu.innerHTML='<i class="fa-solid fa-x fa-2x menu hidden" style="scale:0.85;  animation: view 0.3s forwards;"></i>';
    isActive=true;
  }
  else{
    navbar.classList.remove('navbar-phone');
    overlay.classList.remove('overlay-blur');
    menu.innerHTML='<i class="fa-solid fa-bars fa-2x menu hidden" style="animation: view 0.3s forwards"></i>';
    isActive=false;
  }
});