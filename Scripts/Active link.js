const section=document.querySelectorAll('section');
const links=document.querySelectorAll('.header .navbar a');

if(window.innerWidth>738){
  activeLinks();
}

window.addEventListener('resize',()=>{
  if(window.innerWidth>738){
    activeLinks();
  }
  else{
    links.forEach((links)=>{
      links.classList.remove('active');
    });
  }
});

window.addEventListener('scroll',()=>{
  if(window.innerWidth>738){
    activeLinks();
  }
});

function activeLinks(){
  section.forEach((section)=>{
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if(top >= offset && top < offset + height){
      links.forEach((link)=>{
        link.classList.remove('active');
      });
      document.querySelector(`.header .navbar a[href='#${id}']`).classList.add('active');
      if(document.querySelector(`.header .navbar a[href='#skills']`).classList.contains('active')){
        document.querySelector('.header').style.background='#081b29';
        document.querySelector('.header').style.backdropFilter='blur(0px)';
      }
      else if(scrollY>300){
        document.querySelector('.header').style.background='rgb(97 97 97 / 55%)';
        document.querySelector('.header').style.backdropFilter='blur(10px)';
      }
      else{
        document.querySelector('.header').style.background='transparent';
        document.querySelector('.header').style.backdropFilter='blur(0px)';
      }
    }
  });
}

if(window.innerWidth>738){
  document.querySelector(`.header .navbar a[href='#connect']`).addEventListener('click',()=>{
    setTimeout(()=>{
        console.log('Timeout Executed');
        if(document.querySelector(`.header .navbar a[href='#projects']`).classList.contains('active')){
          document.querySelector(`.header .navbar a[href='#projects']`).classList.remove('active');
          document.querySelector(`.header .navbar a[href='#connect']`).classList.add('active');
        }
    },200);
    });
}


