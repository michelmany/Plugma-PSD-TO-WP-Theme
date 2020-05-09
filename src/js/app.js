import "slick-carousel";

// Isotope Layout
const grid = document.querySelector(".portfolio-grid__items");
const gridFilterButtons = document.querySelectorAll(".portfolio-grid__filter li");

const iso = new Isotope(grid, {
  itemSelector: ".portfolio-grid__item",
  masonry: {
    gutter: 10,
  },
});

gridFilterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", () =>
    iso.arrange({ filter: filterButton.dataset.filter })
  );
});

// Go to Hash
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
      }
    }
  });

// Slick Slider

function initSlider() {
  $(".slick-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}

$(window).ready(function() {
  initSlider();
});
