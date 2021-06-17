const hamburgerBtn = document.querySelector(".nav__wraphamburger");
const navigation = document.querySelector(".nav__ul");
const gallery = document.querySelector(".textgallery");
const galleryBTN = gallery.querySelector(".textgallery__next");
const blobs = document.querySelectorAll(".decor");
//Hamburger menu toggle dosnt work on IE 10
hamburgerBtn.addEventListener('click', function(){
  navigation.classList.toggle('nav__ul--active');
  document.querySelector(".nav__hamburger").classList.toggle('nav__hamburger--active');
})

//text gallery
galleryBTN.addEventListener('click', function(){
  gallery.querySelectorAll(".textgallery__p").forEach((textBlock, i) => {
    textBlock.classList.toggle("textgallery__p--active");
    gallery.querySelectorAll(".textgallery__h1")[i].classList.toggle("textgallery__h1--active");
  });

})
//blobs
window.addEventListener('scroll', function(){
  scrollApear();
  blobs.forEach((blob, i) => {
    let value = window.scrollY;
    blob.style.transform = "translateY(-"+value *0.5*(0.5/((i%5)+1)) +'px)';
  });
})

//animations
document.addEventListener('DOMContentLoaded', function(event){
  document.querySelector('.loader').classList.add('loader--loaded');
  let loader_anim = 2400;
  setTimeout(function(){
    document.querySelector('.header__p').style.animation="text-animation 0.85s ease 0s forwards 1 normal";
    document.querySelectorAll('.header__h1 span').forEach((span, i) => {
      span.style.animation="text-animation 0.85s ease "+0.1*i+"s forwards 1 normal";
    });
    document.querySelector('.header__scroll').classList.add("header__scroll--active");
    blobs.forEach((blob, i) => {
      blob.style.animation="blob-onload 1.5s ease "+0.1*i+"s forwards 1 normal";
    });
  }, loader_anim);
})

function scrollApear(){
  let containers = document.querySelectorAll(".container__50");
  containers.forEach((container, i) => {
    let conPosition = container.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.3;
    if(conPosition<screenPosition){
      container.classList.add('container__50--show');
    }
  });

}
