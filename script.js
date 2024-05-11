//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 17000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}




window.addEventListener('scroll', function() {
    const threshold = 300;
    const thumbnail = document.querySelector('.thumbnail');
  
    if (window.scrollY > threshold) {
      thumbnail.classList.add('fade-on-scroll');
    } else {
      thumbnail.classList.remove('fade-on-scroll');
    }
  });


  window.addEventListener('scroll', function() {
    const threshold = 400; 
    const thumbnail = document.querySelector('.arrows');
  
    if (window.scrollY > threshold) {
      thumbnail.classList.add('fade-on-scroll');
    } else {
      thumbnail.classList.remove('fade-on-scroll');
    }
  });


  window.addEventListener('scroll', () => {
    const image = document.querySelector('.image-human');
    const position = image.getBoundingClientRect();
    const threshold = 0.7;

    if (position.top < window.innerHeight * threshold && position.bottom >= 0) {
        image.classList.add('image-visible');
      }
    });

    window. addEventListener('scroll', function () {
      var element = document.querySelector('.scroll-element')
      var position = element.getBoundingClientRect ()
      
      if (position.top < window.innerHeight && position.bottom >= 0){
      element.classList.add('visible')
      
      }
    });

    window. addEventListener('scroll', function () {
      var element = document.querySelector('.scroll-element2')
      var position = element.getBoundingClientRect ()
      
      if (position.top < window.innerHeight && position.bottom >= 0){
      element.classList.add('visible')

      }
    });

    window. addEventListener('scroll', function () {
      var element = document.querySelector('.scroll-element3')
      var position = element.getBoundingClientRect ()
      
      if (position.top < window.innerHeight && position.bottom >= 0){
      element.classList.add('visible')

      }
    });

    window. addEventListener('scroll', function () {
      var element = document.querySelector('.scroll-element4')
      var position = element.getBoundingClientRect ()
      
      if (position.top < window.innerHeight && position.bottom >= 0){
      element.classList.add('visible')

      }
    });

    window. addEventListener('scroll', function () {
      var element = document.querySelector('.scroll-element5')
      var position = element.getBoundingClientRect ()
      
      if (position.top < window.innerHeight && position.bottom >= 0){
      element.classList.add('visible')

      }
    });








    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
      }
    );
    
    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
    

    








    