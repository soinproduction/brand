// -----------------  Слайдера --------------------

  const Sliders = {
    MAIN_SLIDER: {
      ELEMENT: $(".main-slider"),
      SETTINGS: {
        accessibility: true,
        arrows: true,
        prevArrow: $(".prev-arrow"),
        nextArrow: $(".next-arrow"),
        dots: false,
        speed: 750,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        responsive: [
          {
            breakpoint: 992,
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

  $(".search-btn").click(function () {
    $(".form-item").toggleClass("form-item--active");
    $(".opacity-item").toggleClass("opacity-item--active");

  });


  $(".search-btn").click(function () {
    $('.mobile-search').addClass("mobile-search--active");
    $('.mobile-menu').removeClass("mobile-menu--active");
    $('.mobile-more__btn').removeClass("mobile-more__btn--active");
  });

  $(".mobile-search__back").click(function () {
    $('.mobile-search').removeClass("mobile-search--active");
  });

  // $("select").niceSelect();

  $(this).find(".current-menu-ancestor > a").trigger("click");

  $("sidebar-menu .menu-item-has-children > a").click(function (event) {
    event.preventDefault();
  });

  $(".mobile-menu__list .menu-item-has-children > a").click(function (event) {
    event.preventDefault();
  });


  function getMonthFormatted() {
      const date = new Date();
      const month = date.getMonth();
      return month;
  }


  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function() {
  // var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     $(".header-box").removeClass("hide").slideDown('0');
  //     $("main").css('margin-top', '105px')
  //   } else {
  //     $(".header-box").addClass("hide").slideUp('0');
  //     $("main").css('margin-top', '0px')
  //   }
  //   prevScrollpos = currentScrollPos;
  // }








