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
  
  // Предварительная загрузка картинок
  //создаем JQuery функцию, которая будет подгружать изображения в буфер
  // jQuery.preloadImages = function()
  // {
  //   for(var i = 0; i < arguments.length; i++)
  //   {
  //     jQuery("<img>").attr("src", arguments[ i ]);
  //   }
  // };
  // //указываем путь к изображению, которое нужно подгрузить
  // $.preloadImages("/images/BIG/project-house003-image1.jpg");
  
  let popupLink = $('.popup-link');
  popupLink.magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
      duration: 700, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    // callbacks: {
    //   open: function () {
    //   }
    // }
  });


// Посмотреть ещё 3 проекта
  $('.project-more').click(function () {
    let showMoreChevron = $('#showMoreChevron');
    let showMore = $('#showMore');
    let container3 = $('.container.container3');
    let blockProjects = $('.projects');
    // let container3 = $('.container3');
    container3.slideToggle(800, "linear");
    container3.css('display', 'none')
    // console.log('window.visualViewport.width= '+window.visualViewport.width);
    if (isShowProjects) {
      isShowProjects = false;
      // console.log("1= " + isShowProjects);
      showMore.html('Посмотреть ещё 3 проекта');
      showMoreChevron.toggleClass('fa-chevron-up fa-chevron-down');
    } else {
      isShowProjects = true;
      // console.log("2= " + isShowProjects);
      showMore.html('Скрыть проекты');
      container3.css('display', 'flex')
      showMoreChevron.toggleClass('fa-chevron-down fa-chevron-up');
      if (window.visualViewport.width < 620) {
        console.log("620= " + isShowProjects);
        blockProjects.css('padding', '102px 0 10px 0');
      }
      if (window.visualViewport.width < 380) {
        console.log("380= " + isShowProjects);
        blockProjects.css('padding', '152px 0 780px 0');
      }
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

//Блок 3 Технологии строительства
  if (window.visualViewport.width > 620) {
    console.log("visualViewport.width > 620");
    
    let guarantTitleTwo = $('.guarant-title-two');
    guarantTitleTwo.css('display', 'none');
    let guarant = $('#guarant');
    guarant.html("Гарантии и условия оплаты")
  } else {
    // console.log('window.visualViewport.width= ' + window.visualViewport.width);
    let technoItemCycle1 = $('.techno-item-cycle1');
    // console.log("technoItemCycle1=" + technoItemCycle1);
    technoItemCycle1.on('click', function () {
      console.log("technoItemCycle1");
    });
    let technoItemCycle2 = $('.techno-item-cycle2');
    // console.log("technoItemCycle1=" + technoItemCycle1);
    technoItemCycle2.on('click', function () {
      console.log("technoItemCycle2");
    });
    
    let technoItemCycle3 = $('.techno-item-cycle3');
    // console.log("technoItemCycle1=" + technoItemCycle1);
    technoItemCycle3.on('click', function () {
      console.log("technoItemCycle3= click");
      
      let technoItemHeader3 = $('.techno-item-desc3 .item-header');
      console.log("techno-item-desc3= " + technoItemHeader3.html());
      technoItemHeader3= technoItemHeader3.html();
      console.log("techno-item-header3= " + technoItemHeader3);
      
      let technoItemHeader1 = $('#techno-item-header1');
      console.log("начальное значение: techno-item-header1= " + technoItemHeader1.html());
      technoItemHeader1.html(technoItemHeader3);
      console.log("новое значение: techno-item-header1= " + technoItemHeader1.html());
    });
    
    let technoItemCycle4 = $('.techno-item-cycle4');
    // console.log("technoItemCycle1=" + technoItemCycle1);
    technoItemCycle4.on('click', function () {
      console.log("technoItemCycle4");
    });
    let technoItemCycle5 = $('.techno-item-cycle5');
    // console.log("technoItemCycle1=" + technoItemCycle1);
    technoItemCycle5.on('click', function () {
      console.log("technoItemCycle5");
    });
  }

  
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
    // adaptiveHeight: false,
    variableWidth: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 2, // показывать по 2 слайда
        slidesToScroll: 2, // скроллить по 2 слайда
      }
    }, {
      breakpoint: 688,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
    // beforeChange: function (slick, currentSlide, nextSlide) {}
  });
  if (window.visualViewport.width < 620) {
    // console.log('window.visualViewport.width= '+window.visualViewport.width);
    let itemInnerText11 = $('.item-inner-text11');
    itemInnerText11.css('display', 'none');
    let itemInnerText12 = $('.item-inner-text12');
    itemInnerText12.css('display', 'block');
  }
  
  
  let hasError = false;

//Блок 7 Получите индивидуальную консультацию
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
          if (window.visualViewport.width < 381) {
            showThank.css('margin', '0');
          } else {
            showThank.css('margin', '120px');
          }
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

//Блок 8 Запишитесь на экскурсию
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
// // showMoreChevron.toggleClass('fa fa-chevron-up fa_custom fa-1x').toggleClass('fa fa-chevron-down fa_custom fa-1x');
//       showMoreChevron.removeClass('fa fa-chevron-up fa_custom fa-1x');
//       showMoreChevron.addClass('fa fa-chevron-down fa_custom fa-1x');
//     } else {
//       isShowProjects = true;
//       showMore.html('Скрыть проекты');
// // showMoreChevron.toggleClass('fa fa-chevron-down fa_custom fa-1x').toggleClass('fa fa-chevron-up fa_custom fa-1x');
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
//   // let container3=$('.container.container3');
//   let container3=$('.container3');
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


