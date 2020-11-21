$(function () {
  //menu
  let menu = document.querySelector(".burger__burger");

  let nav = document.querySelector(".side-nav");
  menu.addEventListener("click", () => {
    nav.classList.toggle("active_g");
    menu.classList.toggle("active");
    document.body.classList.toggle("over");
  });

  //menu
  //slider
  $(".page-4__slider").slick({
    nextArrow:
      '<button type="button" class = "slick-arrow slick-next"><img src="img/icons/slider__arrow.svg" alt="next"></button>',
    prevArrow:
      '<button type="button" class = "slick-arrow slick-prev"><img src="img/icons/slider__arrow.svg" alt="back"></button>',
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 1.442,
    infinite: false,
    dots: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1.14,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1.22,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          nextArrow:
            '<button type="button" class = "slick-arrow slick-next"><img src="img/icons/slider__arrow.svg" alt="next"></button>',
          prevArrow:
            '<button type="button" class = "slick-arrow slick-prev"><img src="img/icons/slider__arrow.svg" alt="back"></button>',
          slidesToShow: 1,
        },
      },
    ],
  });

  let slick_prev = document.querySelector(".slick-prev");
  let slick_next = document.querySelector(".slick-next");
  let slider__texts = document.querySelector(".page-4__texts");
  let slider__count = 0;

  let slider__buttons__dis = function () {
    slick_prev.style.pointerEvents = "none";
    setTimeout(() => {
      slick_prev.style.pointerEvents = "auto";
    }, 600);
    slick_next.style.pointerEvents = "none";
    setTimeout(() => {
      slick_next.style.pointerEvents = "auto";
    }, 600);
  };
  let switch__slider = () => {
    switch (slider__count) {
      case 0:
        slider__texts__inner(
          0,
          "User-friendly interface",
          "Responsive and easy-to-use interface"
        );
      case 1:
        slider__texts__inner(
          1,
          "Whalesburg Key Features",
          "Informative charts and calculations show your income and deviations"
        );
      case 2:
        slider__texts__inner(
          2,
          "Data transparency ",
          "Detailed reports for advanced analytics"
        );
      case 3:
        slider__texts__inner(
          3,
          "Uploading detailed reports",
          "We work clearly and anyone can upload data for study and analysis"
        );
      case 4:
        slider__texts__inner(
          4,
          "Profit",
          "The main goal is to get the highest income, we are constantly optimizing the pool operation in order to have a competitive advantage"
        );
      case 5:
        slider__texts__inner(
          5,
          "Telegram Bot",
          "Keeps you informed and promptly updates on the availability of rigs and payments from the pool"
        );
      case 6:
        slider__texts__inner(
          6,
          "Referral program",
          "Just invite your mining friends and increase your income"
        );
      case 7:
        slider__texts__inner(
          7,
          "Profitswitching",
          "Profitswitching is automatic, switching between the most profitable coins on the ETHASH algorithm"
        );
      case 8:
        slider__texts__inner(
          8,
          "Contact us in any messenger and get the full presentation",
          "",
          "In any of the messengers"
        );
    }
  };

  slick_next.addEventListener("click", function () {
    if (slider__count === 8) {
      slider__count = 8;
    } else {
      slider__count = slider__count + 1;
    }
    slider__texts.classList.add("animat");
    setTimeout(() => {
      switch__slider();
      slider__texts.classList.remove("animat");
    }, 600);
    slider__buttons__dis();
  });
  slick_prev.addEventListener("click", function () {
    if (slider__count === 0) {
      slider__count = 0;
    } else {
      slider__count = slider__count - 1;
    }
    slider__texts.classList.add("animat");
    setTimeout(() => {
      switch__slider();
      slider__texts.classList.remove("animat");
    }, 600);
    slider__buttons__dis();
  });

  let slider__buttons = document.querySelector(".slick-dots").children;
  slider__buttons[0].onclick = () => {
    slider__count = 0;
    switch__slider();
  };
  slider__buttons[1].onclick = () => {
    slider__count = 1;
    switch__slider();
  };
  slider__buttons[2].onclick = () => {
    slider__count = 2;
    switch__slider();
  };
  slider__buttons[3].onclick = () => {
    slider__count = 3;
    switch__slider();
  };
  slider__buttons[4].onclick = () => {
    slider__count = 4;
    switch__slider();
  };
  slider__buttons[5].onclick = () => {
    slider__count = 5;
    switch__slider();
  };
  slider__buttons[6].onclick = () => {
    slider__count = 6;
    switch__slider();
  };
  slider__buttons[7].onclick = () => {
    slider__count = 7;
    switch__slider();
  };
  slider__buttons[8].onclick = () => {
    slider__count = 8;
    switch__slider();
  };

  let slider__texts__inner = function (count, title, text, subtitle) {
    if (slider__count === count) {
      slider__texts.innerHTML = ``;
      slider__texts.innerHTML = `
          <h4 class="subtitle">${title}${
        subtitle ? `<span>${subtitle}</span>` : "<b></b>"
      }</h4>
            <p class="text">${text}</p>
          `;
    }
  };

  //slider

  ///menu
  let menu_1 = document.querySelector(".menu_1 a");
  let menu_2 = document.querySelector(".menu_2 a");
  let menu_3 = document.querySelector(".menu_3 a");
  let menu_4 = document.querySelector(".menu_4 a");
  let menu_5 = document.querySelector(".menu_5 a");
  let menu_6 = document.querySelector(".menu_6 a");
  let menu_7 = document.querySelector(".menu_7 a");
  let menuArr = [menu_1, menu_2, menu_3, menu_4, menu_5, menu_6, menu_7];
  let changeMenuArr = function () {
    switch (content__counter) {
      case 0:
        menu_1.classList.add("menu-active");
        break;
      case 1:
        menu_2.classList.add("menu-active");
        break;
      case 2:
        menu_3.classList.add("menu-active");
        break;
      case 3:
        menu_4.classList.add("menu-active");
        break;
      case 4:
        menu_5.classList.add("menu-active");
        break;
      case 5:
        menu_6.classList.add("menu-active");
        break;
      case 6:
        menu_7.classList.add("menu-active");
        break;
      default:
        break;
    }
  };
  let menuDelete = function () {
    for (let i = 0; i < menuArr.length; i++) {
      menuArr[i].classList.remove("menu-active");
    }
  };
  let change__counter_menu = function (link, count) {
    link.addEventListener("click", function () {
      menuDelete();
      changeMenuArr();
      if (document.documentElement.clientWidth > 613) {
        document.querySelector(".slider__hidden").style.opacity = "0";
      }

      document.body.classList.remove("over");
      //debugger
      content__counter = count;
      content.classList.add("animat");
      content.style.opacity = "0";
      setTimeout(() => {
        content.innerHTML = "";
        change__inner();
        content.classList.remove("animat");
        content.style.opacity = "1";
      }, 600);
      nav.classList.remove("active_g");
      menu.classList.remove("active");
    });
  };
  change__counter_menu(menu_1, 0);
  change__counter_menu(menu_2, 1);
  change__counter_menu(menu_3, 2);
  change__counter_menu(menu_4, 3);
  change__counter_menu(menu_5, 4);
  change__counter_menu(menu_6, 5);
  change__counter_menu(menu_7, 6);
  //menu
  //main__slider

  let content__counter = 0;
  let count__wheels__plus = 0;
  let one__wheel__plus = 0;
  let count__wheels__min = 0;
  let one__wheel__min = 0;
  let content = document.querySelector(".section__inner");

  let slider__hidden = function () {
    document.querySelector(".slider__hidden").classList.remove("hidden");
    content.classList.add("hidden");
  };
  let slider__hidden__reverse = function () {
    //debugger
    let g = document.querySelector(".slider__hidden");
    document.querySelector(".slider__hidden").classList.add("hidden");
    content.classList.remove("hidden");
  };

  function change__inner() {
    window.addEventListener("wheel", findScrollDirectionOtherBrowsers);
    menuDelete();
    changeMenuArr();

    if (content__counter != 2) {
      //debugger;
      slider__hidden__reverse();
      document.querySelector(".slider__hidden").style.opacity = "0";
    }

    switch (content__counter) {
      case 0:
        content.innerHTML = `
        <section class="page page-1">
        <div class="page-1__container container">
          <h6 class="title">Mining on the Stable and Convenient Pool</h6>
          <div class="page-1__items">
            <div class="page-1__item">
              <p class="text">
                ETH payouts every 20 minutes with the amount you define by yourself
              </p>
            </div>
            <div class="page-1__item">
              <p class="text">24/7 Support team</p>
            </div>
            <div class="page-1__item">
              <p class="text">
                Easy-to-use personal account with the transparent analytics
              </p>
            </div>
            <div class="page-1__item">
              <p class="text">US Based</p>
            </div>
          </div>
          <div class="page-1__img">
            <img src="img/first_bg.svg" alt="" />
          </div>
          <div class="page-1__img-mob">
            <img src="img/mobil/1__1.png" alt="" />
          </div>
        </div>
      </section>
      
          `;
        break;
      case 1:
        content.innerHTML = `
          <section class="page page-2">
    <div class="page-2__container container">
      <h6 class="title">What kind of hardware do you need to connect?</h6>
      <h3>Grow with Whalesburg</h3>
      <h4 class="subtitle">
      You can connect to the pool regardless if you have a single video card or a big mining farm.
      </h4>
      <a class="page-2__arrow"  href="https://whalesburg.com/start_mining">
        <img class="arrow1 page_2_arr-desc" src="img/icons/arr_left.svg" alt="" />
        <img class="arrow1 page_2_arr-mob" src="img/icons/arr_left_mob.svg" alt="" />
        <p>Get the connection instructions</p>
      </a>
      <div class="page-2__items">
        <div class="page-2__item">
          <div class="page-2__item-img">
            <img src="img/second__img-1.svg" alt="" />
          </div>
          <p>Single video card </p>
        </div>
        <div class="page-2__item">
          <div class="page-2__item-img">
            <img src="img/second__img-2.svg" alt="" />
          </div>
          <p>Rig</p>
        </div>
        <div class="page-2__item">
          <div class="page-2__item-img">
            <img src="img/second__img-3.svg" alt="" />
          </div>
          <p>Mining farm</p>
        </div>
      </div>
    </div>
  </section>
          `;
        break;
      case 2:
        slider__hidden();
        document.querySelector(".slider__hidden").style.opacity = "1";
        break;
      case 3:
        content.innerHTML = `<section class="page page-3">
          <div class="page-3__container container">
            <h6 class="title">Income growth</h6>
            <h4 class="page-3__text text">
            Our tools help you (allow you)  to increase your mining income by optimizing your hardware.
            </h4>
            <div class="page-3__items">
              <div class="page-3__item">
                <p class="text">
                Data from the deviation block shows incorrectly working rigs.
                </p>
              </div>
              <div class="page-3__item">
                <p class="text">
                The deviation level indicates the necessity for verification of the equipment or the connections.
                </p>
              </div>
            </div>
            <div class="page-3__img">
              <img src="img/third.png" alt="" />
              <a href="img/third.png" data-fancybox="1"></a>
            </div>
            <div class="page-3__img-mob">
              <img src="img/mobil/3_3svg.svg" alt="" />
            </div>
          </div>
        </section>`;
        break;

      case 4:
        content.innerHTML = `<section class="page page-5" id="section_5">
        <div class="page-5__container container">
          <div class="title">Russian community</div>
          <div class="page-5__items">
            <div class="page-5__item">
              <h5 class="page-5__item-title">
                Telegram chat with 2200+ users
              </h5>
              <p class="page-5__item-text">
                Join, chat and get the real feedback from Whalesburg users
              </p>
              <div class="page-5__item-imgs">
                <div class="page-5__item-img page-5__item-img-1">
                  <img src="img/fifth/1.png" alt="" />
                  <a href="img/fifth/1.png" data-fancybox="5__galerry"></a>
                </div>
                <div class="page-5__item-img page-5__item-img-1">
                  <img src="img/fifth/2.png" alt="" />
                  <a href="img/fifth/2.png" data-fancybox="5__galerry"></a>
                </div>
              </div>
            </div>
            <div class="page-5__item">
              <h5 class="page-5__item-title">24/7 Online support</h5>
              <p class="page-5__item-text">
                The polite and professional Whalesburg support managers will
                help you with any related questions
              </p>
              <div class="page-5__item-imgs">
                <div class="page-5__item-img page-5__item-img-2">
                  <img src="img/fifth/3.png" alt="" />
                  <a href="img/fifth/3.png" data-fancybox="5__galerry"></a>
                </div>
                <div class="page-5__item-img page-5__item-img-2">
                  <img src="img/fifth/4.png" alt="" />
                  <a href="img/fifth/4.png" data-fancybox="5__galerry"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
        break;
      case 5:
        content.innerHTML = `<section class="page page-6" id="section_6">
        <div class="page-6__container container">
          <h6 class="title">Earn money with a reliable pool</h6>
          <div class="page-6__items">
            <div class="page-6__item">
              <div class="page-6__img">
                <img src="img/sixth__img__1.svg" alt="" />
              </div>
              <div class="page-6__texts">
                <h6 class="page-6__title">
                  22 000+ working hours spent $ 350,000+ spent to create the
                  pool
                </h6>
                <p class="page-6__text">ICO results</p>
              </div>
            </div>
            <div class="page-6__item">
              <div class="page-6__img">
                <img src="img/sixth__img__2.svg" alt="" />
              </div>
              <div class="page-6__texts">
                <h6 class="page-6__title">
                  3800 ETH in 4 hours <br />
                  711 investors <br />
                  100% working product
                </h6>
                <p class="page-6__text">ICO results</p>
              </div>
            </div>
            <div class="page-6__item">
              <div class="page-6__img">
                <img src="img/sixth__img__3.svg" alt="" />
              </div>
              <div class="page-6__texts">
                <h6 class="page-6__title">State check in</h6>
                <p class="page-6__text">
                  Company registered in the Czech Republic in Prague.
                  Identifikační číslo: 029 14 506
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>`;
        break;
      case 6:
        content.innerHTML = `<section class="page page-7" id="section_7">
        <div class="page-7__container container">
          <div class="title">Get the Full Access to Whalesburg</div>
          <div class="page-7__items">
            <div class="page-7__item">
              <div class="page-7__img">
                <img src="img/seventh_5.svg" alt="" />
              </div>
              <p class="page-7__text">
                Detailed presentation on video
              </p>
            </div>
            <div class="page-7__item">
              <div class="page-7__img">
                <img src="img/seventh_2.svg" alt="" />
              </div>
              <p class="page-7__text">
                Reviews from popular miners on YouTube
              </p>
            </div>
            <div class="page-7__item">
              <div class="page-7__img">
                <img src="img/seventh_3.svg" alt="" />
              </div>
              <p class="page-7__text">
                Access to Telegram chat with 2200+ successful miners
              </p>
            </div>
            <div class="page-7__item">
              <div class="page-7__img">
                <img src="img/seventh_4.svg" alt="" />
              </div>
              <p class="page-7__text">
                Instructions and assistance in connecting to the pool
              </p>
            </div>
          </div>
          <div class="page-7__info">
            <p>Send me the presentation</p>
            <div class="page-7__info-items">
              <a href="social/telegram.html" class="page-7__info-item">
                <img src="img/seventh__social/1.svg" alt="" />
              </a>
              <!-- <a href="social/whatsApp.html" class="page-7__info-item">
                <img src="img/seventh__social/2.svg" alt="" />
              </a> -->
              <a href="social/viber.html" class="page-7__info-item">
                <img src="img/seventh__social/3.svg" alt="" />
              </a>
              <a href="social/vk.html" class="page-7__info-item">
                <img src="img/seventh__social/5.svg" alt="" />
              </a>
              <a href="social/facebook.html" class="page-7__info-item">
                <img src="img/seventh__social/4.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>`;
        break;
    }
  }
  if (document.documentElement.clientWidth > 613) {
    window.addEventListener("wheel", function () {
      if (document.body.classList.contains("fancybox-active")) {
        content__counter = content__counter;
      } else {
        content.classList.add("animat");
        document.querySelector(".slider__hidden").style.opacity = "0";
        if (content__counter === 6 || 0) {
          content.style.opacity = "1";
        }
        content.style.opacity = "0";
        setTimeout(
          () => {
            content.innerHTML = "";
            change__inner();
            content.classList.remove("animat");
            // document.querySelector(".slider__hidden").style.opacity = "1";
            content.style.opacity = "1";
          },
          document.documentElement.clientWidth < 613 ? 900 : 500
        );
        if (document.documentElement.clientWidth > 768) {
          document.querySelector(".section__inner").style.transition = "0.5s";
        }
      }
    });
  }

  change__inner();
  function findScrollDirectionOtherBrowsers(event) {
    //debugger
    var delta;
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    } else {
      delta = -1 * event.deltaY;
    }

    if (delta < 0) {
      count__wheels__plus = count__wheels__plus + 1;
      if (content__counter === 6) {
        content__counter = content__counter;
        // content__counter = 0;
        setTimeout(() => {
          one__wheel__plus = one__wheel__plus + 1;
        }, 200);
      } else {
        setTimeout(() => {
          one__wheel__plus = one__wheel__plus + 1;
          if (one__wheel__plus < count__wheels__plus) {
          } else {
            content__counter = content__counter + 1;
          }
          // console.log("plus", one__wheel__plus, count__wheels__plus);
        }, 200);
      }
    } else if (delta > 0) {
      count__wheels__min = count__wheels__min + 1;
      if (content__counter === 0) {
        setTimeout(() => {
          one__wheel__min = one__wheel__min + 1;
        }, 200);
        content__counter = content__counter + 0;
        // content__counter = 6;
      } else {
        setTimeout(() => {
          one__wheel__min = one__wheel__min + 1;
          if (one__wheel__min < count__wheels__min) {
          } else {
            content__counter = content__counter - 1;
          }
          // console.log("minus", one__wheel__min, count__wheels__min);
        }, 200);
      }
    }
  }
  if (document.documentElement.clientWidth < 613) {
    let sl = document.querySelector(".page-4");
    sl.classList.remove("hidden");
    sl.classList.remove("slider__hidden");
    sl.style.opacity = "1";
  }
  document.addEventListener("click", function () {
    if (document.body.classList.contains("fancybox-active")) {
      document.body.style.overflow = "hidden";
    }
    setTimeout(() => {
      document
        .querySelector(".fancybox-button--close")
        .addEventListener("click", function () {
          document.body.style.overflow = "visible";
        });
    }, 0);
  });
});
