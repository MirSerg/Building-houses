let isShowProjects = false;
let isShowConsultTick = false;
let loader = $('.loader')

$(document).ready(function () {
  
  //Блок 2 Наши проекты
  
// ! не работает
  // $('#image-popups').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   removalDelay: 500, //delay removal by X to allow out-animation
  //   callbacks: {
  //     beforeOpen: function() {
  //       // just a hack that adds mfp-anim class to markup
  //       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
  //       this.st.mainClass = this.st.el.attr('data-effect');
  //     }
  //   },
  //   closeOnContentClick: true,
  //   midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  // });

  
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }

  });

  $('.image-popup-fit-width').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 600
    }
  });
  
  // $('.popup-link').magnificPopup({
  //   type: 'image',
  //   mainClass: 'mfp-with-zoom', // this class is for CSS animation below
  //   zoom: {
  //     enabled: true, // By default it's false, so don't forget to enable it
  //     duration: 700, // duration of the effect, in milliseconds
  //     easing: 'ease-in-out', // CSS transition easing function
  //     opener: function (openerElement) {
  //       return openerElement.is('img') ? openerElement : openerElement.find('img');
  //     }
  //   }
    // callbacks: {
    //   open: function () {
    //   }
    // }
  // });
  
  
// Посмотреть ещё 3 проекта
  $('.project-more').click(function () {
    let showMoreChevron = $('#showMoreChevron');
    let showMore = $('#showMore');
    let container3 = $('.container.container3');
    container3.slideToggle(800, "linear");
    container3.css('display', 'flex')
    if (isShowProjects) {
      isShowProjects = false;
      showMore.html('Посмотреть ещё 3 проекта');
      showMoreChevron.toggleClass('fa-chevron-up fa-chevron-down');
    } else {
      isShowProjects = true;
      showMore.html('Скрыть проекты');
      showMoreChevron.toggleClass('fa-chevron-down fa-chevron-up');
    }
  });


// всплывающее меню в header
  let showMenuNavicon = $(".menu-navicon");
  let showMenuGraph = $(".menu-graph");
  let showCross = $(".cross, img");
  let showScrollDown = $(".scroll-down");
  showMenuGraph.on('click', function () {
    showMenuNavicon.addClass('open');
    showMenuGraph.css('visibility', 'hidden');
    showScrollDown.css('visibility', 'hidden');
    showMenuNavicon.css('display', 'block');
    showCross.css('padding', '20px 0');
    $('.main, .header').css('padding', '0');
  });
  
  showMenuNavicon.on('click', function () {
    showMenuNavicon.css('display', 'none');
    showMenuGraph.css('visibility', 'visible');
    showScrollDown.css('visibility', 'visible');
    showMenuGraph.css('display', 'block');
    showMenuNavicon.removeClass('open');
  })
  
  // плавное смещение по якорю
  $('a[href^=\"#\"]').on('click', function (e) {
    e.preventDefault();
    $(this.getAttribute('href'))[0].scrollIntoView({
      behavior: 'smooth'
    });
  });

//Блок 5 Построили более 200 домов за 10 лет
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    focusOnSelect: true,
    // arrows: true,
    // appendArrows: '.card',
    // autoplay: true,
    // autoplaySpeed: 2000,
    variableWidth: true
    // beforeChange: function (slick, currentSlide, nextSlide) {
  });
  
  // let slideCur = $(".slick-current");
  // if (slideCur) {
  //   $(".slick-current .item-inner-desc").css('display', 'flex');
  // }
  
  // let sliderActive = $('.slider').slickCurrentSlide();
  // // let sliderActive = $('.slider').slickGetOption();
  // console.log('sliderActive= ', sliderActive);
  
  
  // $('.slick-next').click(function () {
  // console.log('slideNext');
  // $(".slick-current .item-inner-desc").css('display', 'flex');
  // $('.slick').slick("slickSetOption", 'speed', 1, true)
  // $('.slick').slick("slickNext")
  // $('.slick').slick("slickSetOption", 'speed', 5000, true)
  
  //   slideCur = $(".slick-current");
  //   if (slideCur) {
  //     console.log('slideCur');
  //     $(".slick-current .item-inner-desc").css('display', 'flex');
  //   } else {
  //     console.log('slideNext');
  //   }
  // });
  //
  //
  // $(not(".slick-current,.item-inner-desc")).css('display', 'none');
  
  
  // $(".slick-prev .item-inner-desc").css('display', 'none');
  
  
  // $('.sld').slickPlay();
  // let sliderActive = $('.sld').slickCurrentSlide();
  // let sliderActive = $('.slider').slickGetOption();
  // console.log('sliderActive= ', sliderActive);
  
  // Слайд активный (показывается)
  // .slick-slide.slick-active{}
  // Слайд основной
  // .slick-slide.slick-current{}
  
  // Get the current slide
  // let sliderActive = $('.slider').slick('slickCurrentSlide');
  // let sliderActive = $('.slider .slick-active');
  // let sliderActive = $('.slider');
  // console.log('sliderActive= ' + sliderActive);
  // let props = Object.getOwnPropertyNames(sliderActive);
  // console.log('props=' + props);
  
  
  // console.log(sliderActive[length]);
  
  
  // Object.defineProperty(sliderActive, 'id', {
  //   value: 42
  // });
  
  // let propsKey = Object.keys(sliderActive);
  // console.log('propsKey=' + propsKey);
  
  // const obj = { key1: 'value1', key2: 'value2' };
  
  // $('.SlickContainer').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   var CurrentSlideDom=$(slick.$slides.get(currentSlide));
  //   console.log('CurrentSlideDom= ' + CurrentSlideDom);
  //   var NextSlideDom=$(slick.$slides.get(nextSlide));
  // });
  
  // console.log('OBJsliderActive= ' + sliderActive.values(obj));
  // console.log(sliderActive[0]);
  // console.log(sliderActive[1]);
  // console.log(sliderActive[2]);
  // console.log(sliderActive['data-slick-index']);
  
  // let sliderCenter = $('.slider .slick-current');
  // console.log('sliderCenter= ' + sliderCenter);
  // if (currentSlide) {
  //   console.log('currentSlide= ' + currentSlide);
  // } else {
  //   console.log('item-inner-desc= ' + currentSlide);
  //   $(".item-inner-desc").css('display', 'none');
  // }
  
  
  let hasError = false;

// Нужна консультация
// согласие на обработку персональных данных
  let showConsultBox = $('.consult-assent-box');
  let showConsultTick = $('.consult-assent-image');
  showConsultBox.click(function () {
    // console.log('consult-assent-box= click');
    if (isShowConsultTick) {
      isShowConsultTick = false;
      showConsultTick.css('visibility', 'visible');
    } else {
      isShowConsultTick = true;
      showConsultTick.css('visibility', 'hidden');
    }
  })
  
  document.querySelector('#inputPhoneConsult').onkeydown = function (e) {
    inputphone(e, document.querySelector('#inputPhoneConsult'))
  }
//   $('#inputPhoneConsult').keydown(function ({
//                                               inputphone(e, $('#inputPhoneConsult'))
//
// })
// );
  
  
  function inputphone(e, phone) {
    function stop(evt) {
      evt.preventDefault();
    }
    
    let key = e.key, v = phone.value;
    not = key.replace(/([0-9])/, 1)
    
    if (not == 1 || 'Backspace' === not) {
      if ('Backspace' != not) {
        if (v.length < 3 || v === '') {
          phone.value = '+7('
        }
        if (v.length === 6) {
          phone.value = v + ') '
        }
        if (v.length === 11) {
          phone.value = v + '-'
        }
        if (v.length === 14) {
          phone.value = v + '-'
        }
        // console.log("v.length= "+ v.length);
        if (v.length > 16) {
          alert("Телефонный номер - не более 10 цифр");
          return false;
        }
      }
    } else {
      stop(e)
    }
  }
  
  
  let showConsultAdvantagesItems = $(".consult-advantages-items");
  let orderSubmitConsult = $('#btn-signup-consult');
  let showThank = $('.thank-you');
  let showThankConsult = $('.tank-you.tank-you-consult');
  let showThankConsultText = $('.tank-you-text');
  orderSubmitConsult.on('click', function () {
    let name = $('#inputNameConsult');
    let phone = $('#inputPhoneConsult');
    // phone.mask("+7(999) 999-99-99");
    const ORDER_BORDER_COLOR = 'rgb(255, 255, 255)';
    const ORDER_BORDER_NOTE = 'rgb(255, 0, 0)'  // - красная рамка
    hasError = false;
    $('.error').hide();
    $('.btn').css('border-color', ORDER_BORDER_COLOR);
    
    if (!name.val()) {
      name.css('border-color', ORDER_BORDER_NOTE);
      // name.focus();
      name.next().show();
      hasError = true;
    }
    
    if (!phone.val()) {
      phone.css('border-color', ORDER_BORDER_NOTE);
      // phone.focus();
      phone.next().show();
      hasError = true;
    }
    
    // согласие на обработку персональных данных
    if (isShowConsultTick) {
      hasError = true;
    }
    
    // Если все элементы формы валидны - отправлять POST запрос на адрес https://testologia.ru/checkout
    // с данными из полей: Имя (name), Телефон (phone).
    if (!hasError) {
      // alert('Спасибо за заказ!');
      showConsultAdvantagesItems.css('display', 'none');
      loader.css('display', 'flex');
      // Если отправляется name itlogia - в ответ приходит объект со свойством success = 1, если другие данные - success = 0
      $.ajax({
        method: "POST",
        url: "http://testologia.ru/checkout",
        data: {name: name.val(), phone: phone.val()}
      })
        .done(function (msg) {
          console.log(msg);
          loader.hide();
          showThank.css('margin', '120px');
          if (msg.success) {
            // alert('Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!');
          } else {
            alert('Возникла ошибка при оформлении заявки, позвоните нам и получите консультацию');
            $('#thankYouConsult').html('Возникла ошибка при оформлении заявки, позвоните нам и получите консультацию');
            showThank.css('font-size', '22px');
            showThank.css('color', '#FFF');
            // showThankConsult.css('display', 'block');
            // showThank.css('margin', '120px');
          }
          showThank.css('display', 'block');
        });
    }
  });


// Записаться на экскурсию
  let orderSubmit = $("#btn-signup");
  let showOrderExcur = $(".order-contacts");
  let showExcursionBlock = $('.excursion-block');
  let showExcursionHeader = $('.excursion-header');
  let showExcursionText = $('.excursion-text');
  let showExcursionAction = $('.excursion-action');
  let showThankExcur = $('#thankYouExcur');
  orderSubmit.on('click', function () {
    showOrderExcur.css('display', 'block');
    showOrderExcur.css('margin-top', '-460px');
    showOrderExcur.css('margin-left', '54px');
  });
  
  let orderSubmitPopup = $('#btn-signup-popup');
  orderSubmitPopup.on('click', function () {
    
    let name = $('#inputName');
    let phone = $('#inputPhone');
    const ORDER_BORDER_COLOR = 'rgb(255, 255, 255)';
    const ORDER_BORDER_NOTE = 'rgb(255, 0, 0)'  // - красная рамка
    hasError = false;
    $('.error').hide();
    $('.btn').css('border-color', ORDER_BORDER_COLOR);
    
    if (!name.val()) {
      name.css('border-color', ORDER_BORDER_NOTE);
      // name.focus();
      name.next().show();
      hasError = true;
    }
    
    if (!phone.val()) {
      phone.css('border-color', ORDER_BORDER_NOTE);
      // phone.focus();
      phone.next().show();
      hasError = true;
    }
    
    // согласие на обработку персональных данных
    if (isShowConsultTick) {
      hasError = true;
    }
    
    // Если все элементы формы валидны - отправлять POST запрос на адрес https://testologia.ru/checkout
    // с данными из полей: Имя (name), Телефон (phone).
    if (!hasError) {
      // alert('Спасибо за заказ!');
      showOrderExcur.css('display', 'none');
      showExcursionBlock.css('padding-bottom', '330px');
      showExcursionHeader.css('display', 'none');
      showExcursionText.css('display', 'none');
      showExcursionAction.css('display', 'none');
      loader.css('display', 'flex');
      // Если отправляется name itlogia - в ответ приходит объект со свойством success = 1, если другие данные - success = 0
      $.ajax({
        method: "POST",
        url: "http://testologia.ru/checkout",
        data: {name: name.val(), phone: phone.val()}
      })
        .done(function (msg) {
          console.log(msg);
          loader.hide();
          if (msg.success) {
            // alert('Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!');
          } else {
            alert('Возникла ошибка при оформлении заявки, позвоните нам и сделайте заявку');
            $('#thankYouExcur').html('Возникла ошибка при оформлении заявки, позвоните нам и оформите экскурсию');
            showThank.css('font-size', '22px');
            showThank.css('color', '#FFF');
          }
          showThank.css('padding-top', '95px');
          showThankExcur.css('display', 'block');
        });
    }
  });
  
  // let showCancel = $(".order-contacts-cancel, img");
  let showCancel = $(".order-contacts-cancel");
  showCancel.on('click', function () {
    // console.log('showCancel= click' + showCancel);
    showOrderExcur.css('display', 'none');
  });
  
})

// ! скролл не работает
// $('.scrollto-projects a').click(function () {
//   elementClick = $(this).attr("href")
// смещение сверху
//   dest = $(elementClick).offset().top - 100;
// скорость смещения
//   $("html:not(:animated),body:not(:animated)").animate({scrollTop: dest}, 1100);
// })

// JS
// document.querySelectorAll('a[href^="#"]').forEach(
//   anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });


//  Источник: https://vaden-pro.ru/blog/java-script/slayder-slick
// $('.middle').slick({
//   centerMode: true, //центруем текущий слайд
//   centerPadding: '150px', //слегка увеличиваем текущий слайд
//   slidesToShow: 3 //выводим 3 слайда для просмотра
//   });


// let isShowProjects = false;
// $(document).ready(function () {
//   $('.project-more').click(function () {
//     let showMoreChevron = $('#showMoreChevron');
//     let showMore = $('#showMore');
//     let container3 = $('.container.container3');
//     container3.slideToggle(800, "linear");
//     if (isShowProjects) {
//       isShowProjects = false;
//       showMore.html('Посмотреть ещё 3 проекта');
//// showMoreChevron.toggleClass('fa fa-chevron-up fa_custom fa-1x').toggleClass('fa fa-chevron-down fa_custom fa-1x');
//       showMoreChevron.removeClass('fa fa-chevron-up fa_custom fa-1x');
//       showMoreChevron.addClass('fa fa-chevron-down fa_custom fa-1x');
//     } else {
//       isShowProjects = true;
//       showMore.html('Скрыть проекты');
//// showMoreChevron.toggleClass('fa fa-chevron-down fa_custom fa-1x').toggleClass('fa fa-chevron-up fa_custom fa-1x');
//       showMoreChevron.removeClass('fa fa-chevron-down fa_custom fa-1x');
//       showMoreChevron.addClass('fa fa-chevron-up fa_custom fa-1x');
//     }
//   });
// })

// можно менять через изменение свойств css
// let isShowProjects = false;
// $('.project-more').click(function () {
//   let showMoreChevron=$('#showMoreChevron');
//   let showMore=$('#showMore');
//   let container3=$('.container.container3');
//   if (isShowProjects){
//     isShowProjects = false;
//     showMore.html('Посмотреть ещё 3 проекта');
//     showMoreChevron.removeClass('fa fa-chevron-up fa_custom fa-1x');
//     showMoreChevron.addClass('fa fa-chevron-down fa_custom fa-1x');
//     container3.css('display', 'none');
//   } else {
//     isShowProjects = true;
//     showMore.html('Скрыть проекты');
//     showMoreChevron.removeClass('fa fa-chevron-down fa_custom fa-1x');
//     showMoreChevron.addClass('fa fa-chevron-up fa_custom fa-1x');
//     container3.css('display', 'block');
//   }
// })


