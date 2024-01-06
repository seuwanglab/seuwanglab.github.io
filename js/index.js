window.onload = function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiper.el.onmouseover = function () {
    //鼠标放上暂停轮播
    swiper.autoplay.stop();
    swiper.navigation.$nextEl.removeClass("hide");
    swiper.navigation.$prevEl.removeClass("hide");
  };
  swiper.el.onmouseleave = function () {
    swiper.autoplay.start();
    swiper.navigation.$nextEl.addClass("hide");
    swiper.navigation.$prevEl.addClass("hide");
  };
};

