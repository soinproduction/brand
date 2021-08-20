
// -----------------  Слайдера --------------------
  const Sliders = {
    MAIN_SLIDER: {
      ELEMENT: $(".first-slider"),
      SETTINGS: {
        accessibility: true,
        arrows: true,
        prevArrow: $(".prev-arrow1"),
        nextArrow: $(".next-arrow1"),
        dots: false,
        speed: 750,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },

    SECOND_SLIDER: {
      ELEMENT: $(".second-slider"),
      SETTINGS: {
        accessibility: true,
        arrows: true,
        prevArrow: $(".prev-arrow2"),
        nextArrow: $(".next-arrow2"),
        dots: false,
        speed: 750,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },

    HARD_SLIDER: {
      ELEMENT: $(".hard-slider"),
      SETTINGS: {
        accessibility: true,
        arrows: true,
        prevArrow: $(".prev-arrow4"),
        nextArrow: $(".next-arrow4"),
        dots: false,
        speed: 750,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        asNavFor: $(".nav-second"),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },

    NAV_SLIDER: {
      ELEMENT: $(".nav-second"),
      SETTINGS: {
        accessibility: true,
        asNavFor: $(".hard-slider"),
        arrows: true,
        prevArrow: $(".prev-nav"),
        nextArrow: $(".next-nav"),
        dots: false,
        focusOnSelect: true,
        speed: 750,
        slidesToShow: 5,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: ("40px"),
              initialSlide: 2,
            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },

    CATALOG_SLIDER: {
      ELEMENT: $(".catalog-slider"),
      SETTINGS: {
        accessibility: true,
        arrows: true,
        prevArrow: $(".prev-arrow3"),
        nextArrow: $(".next-arrow3"),
        dots: false,
        speed: 750,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        asNavFor: $(".nav-first"),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              centerMode: true,
            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },

    NAV_SLIDER_FIRST: {
      ELEMENT: $(".nav-first"),
      SETTINGS: {
        accessibility: true,
        asNavFor: $(".catalog-slider"),
        arrows: true,
        prevArrow: $(".prev-nav2"),
        nextArrow: $(".next-nav2"),
        dots: false,
        focusOnSelect: true,
        speed: 750,
        slidesToShow: 6,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: ("40px"),
              initialSlide: 2,
            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },
  };

  function initialazeSlickSlider(slider) {
    const { BREAKPOINT, SETTINGS, ELEMENT } = slider;
    (document.documentElement.clientWidth <= BREAKPOINT ||
      BREAKPOINT === undefined) &&
      ELEMENT.slick(SETTINGS);
  }

  function toggleSlider(slider) {
    const { BREAKPOINT, ELEMENT, SETTINGS } = slider;
    document.documentElement.clientWidth > BREAKPOINT &&
      ELEMENT.hasClass("slick-initialized") &&
      ELEMENT.slick("unslick");
    document.documentElement.clientWidth <= BREAKPOINT &&
      !ELEMENT.hasClass("slick-initialized") &&
      ELEMENT.slick(SETTINGS);
  }

  function toggleExtraClass(slider) {
    const { BREAKPOINT, ELEMENT, CLASSNAME } = slider;
    document.documentElement.clientWidth > BREAKPOINT &&
      !ELEMENT.hasClass(CLASSNAME) &&
      ELEMENT.addClass(CLASSNAME);
    document.documentElement.clientWidth <= BREAKPOINT &&
      ELEMENT.hasClass(CLASSNAME) &&
      ELEMENT.removeClass(CLASSNAME);
  }

  initialazeSlickSlider(Sliders.MAIN_SLIDER);
  initialazeSlickSlider(Sliders.SECOND_SLIDER);
  initialazeSlickSlider(Sliders.HARD_SLIDER);
  initialazeSlickSlider(Sliders.NAV_SLIDER);
  initialazeSlickSlider(Sliders.CATALOG_SLIDER);
  initialazeSlickSlider(Sliders.NAV_SLIDER_FIRST);



  // -----------------  Селект  --------------------

  // переменная не переназначается, поэтому используем const
  // используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
  const select = document.querySelectorAll(".select");

  // если массив не пустой, пробегаемся в цикле по каждой найденой сущности
  if (select.length) {
    select.forEach((item) => {
      // достаем из текущей сущности .select__current
      const selectCurrent = item.querySelector(".select__current");

      item.addEventListener("click", (event) => {
        const el = event.target.dataset.choice;
        const text = event.target.innerText;

        // Проверяем является ли это choosen и не выбрано ли его значение уже
        if (el === "choosen" && selectCurrent.innerText !== text) {
          selectCurrent.innerText = text;
        }

        item.classList.toggle("is-active");
      });
    });
  }

  $('.favorite-bnt').click(function(){
    $(this).toggleClass('favorite-bnt--active');
  })

  // -----------------  Гамбургер  --------------------

  var menu = $(".mobile-menu");
  var more = $(".mobile-more__btn");
  var body = $("body");

  more.click(function (event) {
    more.toggleClass("mobile-more__btn--active"),
      menu.toggleClass("mobile-menu--active");
    body.toggleClass("body--fixed");
    $('.mobile-search').removeClass("mobile-search--active");
  });

  // ------------ Поиск --------------

  $(".search-btn").click(function (event) {
    event.preventDefault();
    $(".form-item").toggleClass("form-item--active");
    $(".opacity-item").toggleClass("opacity-item--active");

  });

  var header = $('.header-box');
  var main = $('.main');
	scrollPrev = 0;

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 350 && scrolled > scrollPrev ) {
      header.addClass('out');
      main.addClass('out');
    } else {
      header.removeClass('out');
      main.removeClass('out');
    }
    scrollPrev = scrolled;
  });

 const buttons = [...document.querySelectorAll(".mobile-replace")]; // --- масассив кнопок
 const newBody = document.querySelector(".replace-btn");
 const oldBody = document.querySelector(".main-slide__bottom");

 let slides = document.querySelectorAll(".fifth-slide");
 const arrSlides = [...slides];





 window.addEventListener('DOMContentLoaded', () => {
  if ( $(window).width() >= 320 && $(window).width() < 768 ) {
    buttons.forEach(function(button){   // i - index
      newBody.insertAdjacentElement("afterbegin", button);
    });

  } else {
    buttons.forEach(function(button){   // i - index
      oldBody.insertAdjacentElement("afterbegin", button);
    });
  };
});

window.addEventListener('DOMContentLoaded', () => {
  if ( $(window).width() >= 320 && $(window).width() < 576 ) {
    arrSlides.forEach(function(slide) {
      const fifthBody = slide.querySelector(".main-slide__descr--replace");
      const imageBlock = slide.querySelector(".main-slide__image--replace");
      fifthBody.insertAdjacentElement("afterbegin", imageBlock);
    });

  } else {
    return
  };
});




window.addEventListener('DOMContentLoaded', () => {
  if ( $(window).width() > 320 && $(window).width() < 576 ) {
    arrSlides.forEach(function(slide) {
      const fifthBody = slide.querySelector(".main-slide__descr--replace");
      const imageBlock = slide.querySelector(".main-slide__image--replace");
      fifthBody.insertAdjacentElement("afterbegin", imageBlock);
    });
  }
});

window.addEventListener('resize', () => {
  if ( $(window).width() > 320 && $(window).width() < 576 ) {
    arrSlides.forEach(function(slide) {
      const fifthBody = slide.querySelector(".main-slide__descr--replace");
      const imageBlock = slide.querySelector(".main-slide__image--replace");
      fifthBody.insertAdjacentElement("afterbegin", imageBlock);
      return
    });
  }
});

window.addEventListener('resize', () => {
  if ( $(window).width() < 768 ) {
    buttons.forEach(function(button){   // i - index
      newBody.insertAdjacentElement("afterbegin", button);
    });
  } else {
    buttons.forEach(function(button){   // i - index
      oldBody.insertAdjacentElement("afterbegin", button);
    });
  };
});

$(window).scroll(function(){
  if($(this).scrollTop() > 500) {
      $('.top-link').fadeIn();
  } else {
      $('.top-link').fadeOut();
  }
});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// const bodyCatalog = document.querySelector('.big-catalog');

// const viewMoreButton = bodyCatalog.querySelector('.view-more');

// console.log({viewMoreButton});

// const bigBody = document.querySelector('.big-body');

// const bodyItems = [...bigBody.querySelectorAll('.big-body__item')];

// const totalItems = bodyItems.length;

// console.log({totalItems})
// console.log({bodyItems})
// let startIndex = 0;
// let endIndex = 4;
// const STEP = 4;


// const slicedItems = bodyItems.slice(startIndex, endIndex);

// console.log({slicedItems});

// slicedItems.forEach((item) => {
//   item.classList.add('big-body__item--show');
// });

// const viewMoreButtonClickHandler = () => {
//   startIndex += STEP;
//   endIndex += STEP;
//   const slicedItems = bodyItems.slice(startIndex, endIndex);
//   slicedItems.forEach((item) => {
//     item.classList.add('big-body__item--show');
//   });

// }

// viewMoreButton.addEventListener('click', viewMoreButtonClickHandler)




