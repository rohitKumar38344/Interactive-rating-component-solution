"use strict";

const ratingCard = document.querySelector(".card");
const score = document.querySelector(".score");
const ratingSummary = document.querySelector(".thankyou");
const ratingsEl = document.querySelectorAll(".radio__input");

let userRating;
ratingsEl.forEach((rating) => {
  console.log(rating);
  rating.addEventListener("click", function (e) {
    userRating = this.value;
  });
});

document.querySelector(".submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  ratingCard.style.display = "none";
  ratingSummary.classList.remove("hidden");
  score.textContent = userRating;
});
