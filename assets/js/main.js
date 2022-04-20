document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".form__input"),r=document.querySelector(".form__input--tel");console.log(r),e.forEach(r=>{r.addEventListener("input",e=>{""!=r.value?r.classList.add("form__input--active"):r.classList.remove("form__input--active")})});let s=new Inputmask("+7(999) 999 99 99",{placeholder:"_",clearMaskOnLostFocus:!1});s.mask(r);const o=new JustValidate(".form");o.addField(".form__input--name",[{rule:"required",errorMessage:"Имя обязательно"},{rule:"minLength",value:3,errorMessage:"Имя должно содержать не менее 3 символов"},{rule:"maxLength",value:30}]).addField(".form__input--tel",[{rule:"required",errorMessage:"Телефон обязателен"},{rule:"function",validator:function(){return 10===r.inputmask.unmaskedvalue().length},errorMessage:"Введите корректный телефон"}]);new Swiper(".blog-swiper",{slidesPerView:1,spaceBetween:20,speed:500,navigation:{nextEl:".blog-swiper-arrows__arrow-next",prevEl:".blog-swiper-arrows__arrow-prev"},breakpoints:{930:{slidesPerView:2}}});function t(){window.innerWidth<1025&&new Swiper(".benefits__items",{slidesPerView:1,speed:500,navigation:{nextEl:".benefits__arrow-next",prevEl:".benefits__arrow-prev"},breakpoints:{425:{slidesPerView:2},576:{slidesPerView:3}}})}t();new Swiper(".explore-slider",{slidesPerView:1,spaceBetween:20,centeredSlides:!0,speed:500,loop:!0,navigation:{nextEl:".explore-slider__arrows__arrow-next",prevEl:".explore-slider__arrows__arrow-prev"},breakpoints:{930:{slidesPerView:2}}});const n=document.querySelector("#hero"),i=document.querySelector(".header");function a(){var e=n.offsetHeight,r=i.offsetHeight/2,s=window.scrollY;1025<window.innerWidth&&(r<s?i.classList.add("header-static"):i.classList.remove("header-static"),e<s?i.classList.add("header-fixed"):i.classList.remove("header-fixed")),window.innerWidth<1025&&(i.classList.remove("header-static"),i.classList.remove("header-fixed"))}function l(){m.classList.remove("nav--active"),d.classList.remove("burger--active"),i.classList.remove("header-m--white"),document.body.classList.remove("no-scroll")}function c(){window.addEventListener("scroll",()=>{a()})}window.addEventListener("resize",()=>{c(),t(),t(),1025<window.innerWidth&&l()}),a(),c(),1025<window.innerWidth&&l();const d=document.querySelector(".burger"),m=document.querySelector(".nav"),u=(d.addEventListener("click",()=>{m.classList.contains("nav--active")?(m.classList.remove("nav--active"),d.classList.remove("burger--active"),i.classList.remove("header-m--white"),document.body.classList.remove("no-scroll")):(m.classList.add("nav--active"),d.classList.add("burger--active"),document.body.classList.add("no-scroll"),i.classList.add("header-m--white"))}),document.querySelectorAll(".nav__item--submenu")),v=(u.forEach(e=>{e.addEventListener("click",s=>{if(window.innerWidth<1025){let e=s.currentTarget,r=e.querySelector(".sub-menu");s=r.scrollHeight;r&&(r.classList.contains("sub-menu--open")?(r.classList.remove("sub-menu--open"),r.style.maxHeight=0):(r.classList.add("sub-menu--open"),r.style.maxHeight=s+"px"))}})}),ymaps.ready(()=>{let e=new ymaps.Map("map",{center:[55.70974573269126,37.6198313958018],zoom:16});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.behaviors.disable(["scrollZoom"])}),document.querySelector(".modal")),w=document.querySelector("[data-modal]"),p=document.querySelector(".modal__close");w.addEventListener("click",e=>{e.preventDefault(),v.classList.add("modal--open"),document.body.classList.add("no-scroll")}),p.addEventListener("click",()=>{v.classList.remove("modal--open"),document.body.classList.remove("no-scroll")}),v.addEventListener("click",e=>{let r=e.target;r.classList.contains("modal")&&(v.classList.remove("modal--open"),document.body.classList.remove("no-scroll"))})});