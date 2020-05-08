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
