/*list*/
const click = document.querySelectorAll(".list-item-title");
const text = document.querySelectorAll(".list-item");
const arrow = document.querySelectorAll(".img");

click.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (text[index].classList.contains("active")) {
      text[index].classList.remove("active");
    } else {
      text.forEach((element) => {
        element.classList.remove("active");
      });
      text[index].classList.add("active");
    }
  });
});

click.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (arrow[index].classList.contains("img-active")) {
      arrow[index].classList.remove("img-active");
    } else {
      arrow.forEach((element) => {
        element.classList.remove("img-active");
      });
      arrow[index].classList.add("img-active");
    }
  });
});


/* Swiper */

const swiper = new Swiper(".swiper__specialists", {
    slidesPerView: 'auto',
    spaceBetween: 36,
    observer: true,
    breakpoints: {
      768: {
        spaceBetween: 0,
        enabled: false,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
  });