let value = null;
const buttons = Array.from(document.querySelectorAll("[valueButton]"));
buttons.forEach((i) => {
  i.addEventListener("click", () => {
    removeActive();
    value = i.value;
    addActive();
  });
});
const removeActive = () => {
  buttons.find((i) => i.value === value)?.classList.remove("active");
};
const addActive = () => {
  buttons.find((i) => i.value === value)?.classList.add("active");
};

const scored = document.querySelector(".scored");
const firstCard = document.querySelector(".card");
const thankYouCard = document.querySelector(".card-after-submit");
const submit = document.querySelector(".submitButton");
submit.addEventListener("click", () => {
  value === null
    ? alert("You must pick some rate!")
    : (firstCard.classList.add("hidden"),
      thankYouCard.classList.remove("hidden"),
      (scored.innerHTML = value));
});
