const ratingCard = document.querySelector(".rating__card");
const thankCard = document.querySelector(".thank__card");
const submitBtn = document.getElementById("submit");
const rate = document.getElementById("rate");
const rates = document.querySelectorAll(".rating__btn");

submitBtn.addEventListener("click", () => {
  thankCard.classList.remove("hidden");
  ratingCard.classList.add("hidden");
});

rates.forEach((i) => {
  i.addEventListener("click", () => {
    rate.innerHTML = i.innerHTML;
  });
});
