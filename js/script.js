

    $("#navMain").on("click", ".nav-link", function(){
        $("#navMain .nav-link").removeClass("nav-link--active"); // удаляем класс
        $(this).addClass("nav-link--active"); // добавляем
    });

    /// отменяем нажатие телефона на десктопах с несколькими номерами
    if (window.innerWidth >= 768) {
        var tel = document.getElementsByClassName('header__phones-link');
        
        for (var i = 0; i < tel.length; i++) {
            tel[i].addEventListener('click', function(e){
                e.preventDefault();
            });
        };

        var telFooter = document.getElementsByClassName('footer__phone-link');
        
        for (var i = 0; i < tel.length; i++) {
            telFooter[i].addEventListener('click', function(e){
                e.preventDefault();
            });
        };
    };
  
  
  
    /// Yandex map

    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.965337, 30.278202],
            zoom: 17,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });
        
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.965057, 30.278776], {
            hintContent: '',
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map/marker.png',
            // Размеры метки.
            iconImageSize: [218, 69],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-25, -69]
        });

        myPlacemark2 = new ymaps.Placemark([54.930991, 37.425813], {
            hintContent: '',
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map/marker.png',
            // Размеры метки.
            iconImageSize: [218, 69],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-25, -59]
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark2);

        // myMap.controls.remove('geolocationControl');
        // myMap.controls.remove('searchControl');
        // myMap.controls.remove('trafficControl');
        // myMap.controls.remove('typeSelector');
       
        
    });




    //////// popup open and close //////////////

    var modal = document.getElementById('popup');
    var myBtn = document.getElementsByClassName('button-open');
    var close = document.getElementsByClassName('close')[0];

    /// formSale open

    var formSale = document.getElementById('formSale');
    var btnSale = document.getElementsByClassName('button__stock');

    for (var i = 0; i < btnSale.length; i++) {
        btnSale[i].addEventListener('click', function(e) {
        e.preventDefault();
        formSale.classList.add("popup--active");
        })
    };

    var closeSale = document.getElementById('closeSale');
    
        closeSale.addEventListener('click',function(){
        formSale.classList.remove("popup--active");
        });

        window.onclick = function(event) {
            if (event.target == formSale) {
                formSale.classList.remove("popup--active");
            };
            
        };    

/// formWork open

var formWork = document.getElementById('formWork');
var btnWork = document.getElementsByClassName('button__work');

for (var i = 0; i < btnWork.length; i++) {
    btnWork[i].addEventListener('click', function(e) {
      e.preventDefault();
      formWork.classList.add("popup--active");
    })
};

var closeWork = document.getElementById('closeWork');
   
    closeWork.addEventListener('click',function(){
    formWork.classList.remove("popup--active");
    });

        


/// закрываем Спасибо 

var closeSuccess = document.getElementById('closeSuccess');
var success = $('.success__wrapper');

closeSuccess.addEventListener('click',function(){
    success.css('display','none');
})

// var sucess = $('#sucess');
// var popupMain = $('.popup__main');
/*
А это в цикле прокручиваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (var i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function(e) {
    e.preventDefault();
    openModalWindow();
  })
};
// это обработчик события, который в нутри этой функции выполнят ту функцию 
//которая закрывает окно модальное
close.addEventListener('click', function() {
  closeModalWindow();
});

//это функция, которая открывает окно
function openModalWindow() {
//   popupMain.css('display','flex');
//   sucess.css('display','none');
    
  modal.classList.add("popup--active");
  
}

//это функция, которая закрывает окно
function closeModalWindow() {
  modal.classList.remove("popup--active");
 
}

//////////////// form ajax /////////////




$('#formPopup').submit(function(e) {
	// var textSuccess = $('.form-how__sucess');
    var $form = $(this);
    $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    success: function(res) {
        
        $('#formPopup')[0].reset();
      }
    }).done(function() {
        modal.classList.remove('popup--active');
		success.css('display','flex');
        console.log('success');
    }).fail(function() {
        console.log('fail');
    });
      //отмена действия по умолчанию для кнопки submit
    e.preventDefault(); 
});

$('#formQuestion').submit(function(e) {
	// var textSuccess = $('.form-how__sucess');
    var $form = $(this);
    $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    success: function(res) {
        
        $('#formQuestion')[0].reset();
      }
    }).done(function() {
        // modal.classList.remove('popup--active');
        // textSuccess.css('display','block');
        success.css('display','flex');
        console.log('success');
    }).fail(function() {
        console.log('fail');
    });
      //отмена действия по умолчанию для кнопки submit
    e.preventDefault(); 
});

$('#formHero').submit(function(e) {
	// var textSuccess = $('.form-how__sucess');
    var $form = $(this);
    $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    success: function(res) {
        
        $('#formHero')[0].reset();
      }
    }).done(function() {
        // modal.classList.remove('popup--active');
        // textSuccess.css('display','block');
        success.css('display','flex');
        console.log('success');
    }).fail(function() {
        console.log('fail');
    });
      //отмена действия по умолчанию для кнопки submit
    e.preventDefault(); 
});

$('#fSale').submit(function(e) {
	// var textSuccess = $('.form-how__sucess');
    var $form = $(this);
    $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    success: function(res) {
        
        $('#fSale')[0].reset();
      }
    }).done(function() {
        // modal.classList.remove('popup--active');
        formSale.classList.remove("popup--active");
        success.css('display','flex');
        console.log('success');
    }).fail(function() {
        console.log('fail');
    });
      //отмена действия по умолчанию для кнопки submit
    e.preventDefault(); 
});

$('#fConsult').submit(function(e) {
	// var textSuccess = $('.form-how__sucess');
    var $form = $(this);
    $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    success: function(res) {
        
        $('#fConsult')[0].reset();
      }
    }).done(function() {
        // modal.classList.remove('popup--active');
        formWork.classList.remove("popup--active");
        success.css('display','flex');
        console.log('success');
    }).fail(function() {
        console.log('fail');
    });
      //отмена действия по умолчанию для кнопки submit
    e.preventDefault(); 
});
//////// slick on width 768px //////////////

     if (window.innerWidth <= 768) {
        $('.features__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots:true
        });
       } else { 

     };

     if (window.innerWidth <= 768) {
        $('.work__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots:true
        });
       } else { 

     };





$(document).ready(function(){

    
    $('.stock__slider-list').slick({
        prevArrow: $('.arrow-stock-prev'),
        nextArrow: $('.arrow-stock-next'),

    });

    $('.about__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.arrow-about-prev'),
        nextArrow: $('.arrow-about-next'),
        fade: true,
        asNavFor: '.about__slider-nav'

    });

    $('.about__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.about__slider',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
      });

      $('.project__list').slick({
        prevArrow: $('.arrow-project-prev'),
        nextArrow: $('.arrow-project-next'),

    });

    $('.partner__list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('.arrow-partner-prev'),
        nextArrow: $('.arrow-partner-next'),
        responsive: [
            {
                breakpoint:600,
                settings: {
                    slidesToShow:3
                }
            }
        ]

    });

      
    
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
         
         });
    });

    if (window.innerWidth <= 480 ) {
        $('a[href^="#"]').bind('click.smoothscroll',function (e) {
            e.preventDefault();
    
            var target = this.hash,
            $target = $(target);
    
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 77
             
             });
        });

    };

    ///////// hack to safari vh ///////////////
    $('.section-hero').height(window.innerHeight + 'px');

    $("#phone1").inputmask({"mask": "+7(999) 999-9999"});
    $("#phone2").inputmask({"mask": "+7(999) 999-9999"});
    $("#phone3").inputmask({"mask": "+7(999) 999-9999"});
    $("#phone4").inputmask({"mask": "+7(999) 999-9999"});
    $("#phone5").inputmask({"mask": "+7(999) 999-9999"});

    

});


/// кнопка вверх

$(function() {

    $(window).scroll(function() {
   
    if($(this).scrollTop() != 0) {
   
    $('#toTop').fadeIn();
    
    } else {
   
    $('#toTop').fadeOut();
   
    }
   
    });
    
    $('#toTop').click(function() {
   
    $('body,html').animate({scrollTop:0},800);
   
    });
    
   });


