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





  document.addEventListener('DOMContentLoaded', (event) => {
    let hasAnimated = false;
  
    window.addEventListener('scroll', () => {
      const image = document.querySelector('.image-human');
      const position = image.getBoundingClientRect();
      const threshold = 0.7; 
  
      if (position.top < window.innerHeight * threshold && position.bottom >= 0 && !hasAnimated) {
        image.classList.add('image-visible');
        hasAnimated = true;
      }
    });
  });
  
    const targetElement = document.getElementById('my-paragraph');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          targetElement.parentElement.classList.add('in-view');
        }
      });
    }, { threshold: 0.5 });

    observer.observe(targetElement);


