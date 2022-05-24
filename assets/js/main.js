
document.addEventListener('DOMContentLoaded', ()=>{
  // Слайдер блога
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const formInput= document.querySelectorAll('.form__input');
  const telSelector = document.querySelector('.form__input--tel');
  const navItem = document.querySelectorAll('.nav__item--submenu');
  const hero = document.querySelector('#hero');
  const header = document.querySelector('.header');

  
  //Не пустой input 
  formInput.forEach((element)=>{
    element.addEventListener('input', (e)=>{
      if(element.value != ''){
        element.classList.add('form__input--active');
      }else{
        element.classList.remove('form__input--active');
      }
    })
  });


    // Маска телефона 
    let inputMask = new Inputmask('+7(999) 999 99 99',  {"placeholder": "_", clearMaskOnLostFocus : false});
    inputMask.mask(telSelector);
    
    // Валидация формы 
    const validation = new JustValidate('.form');
      validation
        .addField('.form__input--name', [
          {
            rule: 'required',
            errorMessage: 'Имя обязательно',
          },
          {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Имя должно содержать не менее 3 символов',
          },
          {
            rule: 'maxLength',
            value: 30,
          },
        ])
        .addField('.form__input--tel', [
          {
            rule: 'required',
            errorMessage: 'Телефон обязателен',
          },
          {
            rule: 'function',
            validator: function(){
              const phone = telSelector.inputmask.unmaskedvalue();
              return  phone.length === 10
            },
            errorMessage: 'Введите корректный телефон',
          },
        ])

  const blogSlider = new Swiper('.blog-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    navigation: {
      nextEl: '.blog-swiper-arrows__arrow-next',
      prevEl: '.blog-swiper-arrows__arrow-prev',
    },
    breakpoints: {
      930: {
        slidesPerView: 2,
      },
    }
  });
  function benefitsSlider() {
    if(window.innerWidth < 1025){
      const benegitsSwiper = new Swiper('.benefits__items', {
        slidesPerView: 1,
        speed: 500,
        navigation: {
          nextEl: '.benefits__arrow-next',
          prevEl: '.benefits__arrow-prev',
        },
        breakpoints: {
          425: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
        }
      })
    }
    
  }
  benefitsSlider();

  const exploreSlider = new Swiper('.explore-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    speed: 500,
    loop: true,
    navigation: {
      nextEl: '.explore-slider__arrows__arrow-next',
      prevEl: '.explore-slider__arrows__arrow-prev',
    },
    breakpoints: {
      930: {
        slidesPerView: 2,
      },
    }
  });


  
  

  
  // Фиксирование header-a 
    function headerFixed(){
      let heroHeight = hero.offsetHeight;
      let headerHeigth = header.offsetHeight / 2;
      let srcollTop = window.scrollY;

      if(window.innerWidth > 1025){
        if(headerHeigth < srcollTop){
          header.classList.add('header-static')
        }else{
          header.classList.remove('header-static')
        }

        if(heroHeight < srcollTop){
          header.classList.add('header-fixed')
        }else{
          header.classList.remove('header-fixed')
        }
      }
      if(window.innerWidth < 1025){
        header.classList.remove('header-static');
        header.classList.remove('header-fixed');
      }
    }
    function menuClose(){
     
    }
    function scroll(){
      window.addEventListener('scroll', ()=>{
        headerFixed()
      });
    }

    window.addEventListener('resize', ()=>{
      scroll();
      benefitsSlider();
      benefitsSlider();
      if(window.innerWidth > 1025){
        nav.classList.remove('nav--active');
        burger.classList.remove('burger--active');
        header.classList.remove('header-m--white');
        document.body.classList.remove('no-scroll')
      }
    })
    headerFixed();
    scroll();
    if(window.innerWidth > 1025){
      nav.classList.remove('nav--active');
      burger.classList.remove('burger--active');
      header.classList.remove('header-m--white');
      document.body.classList.remove('no-scroll')
    }

 // Меню

  burger.addEventListener('click', ()=>{
    if(!nav.classList.contains('nav--active')){
      nav.classList.add('nav--active');
    burger.classList.add('burger--active');
    document.body.classList.add('no-scroll');
    header.classList.add('header-m--white');
    }else{
      nav.classList.remove('nav--active');
      burger.classList.remove('burger--active');
      header.classList.remove('header-m--white');
      document.body.classList.remove('no-scroll');
    }
  });

  // Подменю на мобиках 

  navItem.forEach((element)=>{
    element.addEventListener('click', (e)=>{
      if(window.innerWidth < 1025){
        let self = e.currentTarget;
        let subMenu = self.querySelector('.sub-menu');
        let subMenuHeight = subMenu.scrollHeight;

        if(subMenu){
          if(!subMenu.classList.contains('sub-menu--open')){
            subMenu.classList.add('sub-menu--open')
            subMenu.style.maxHeight = subMenuHeight+'px';
          }else{
            subMenu.classList.remove('sub-menu--open')
            subMenu.style.maxHeight = 0;
          }
          
        }
        
      }
    })
  })



  ymaps.ready(()=>{
    let myMap = new ymaps.Map('map', {
        center: [55.70974573269126,37.6198313958018], 
        zoom: 16
    })

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  });

  const modal = document.querySelector('.modal');
  const modalOpen = document.querySelector('[data-modal]');
  const modalClose = document.querySelector('.modal__close');

  if (modalOpen) {
    modalOpen.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('modal--open');
      document.body.classList.add('no-scroll');
    })
  }
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('modal--open');
      document.body.classList.remove('no-scroll');
    }) 
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      let self = e.target
      if (self.classList.contains('modal')) {
        modal.classList.remove('modal--open');
        document.body.classList.remove('no-scroll');
      }
    }) 
  }
  
  
  

});
