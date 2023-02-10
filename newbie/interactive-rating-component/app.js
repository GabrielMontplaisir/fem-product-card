let id = (id) => document.getElementById(id);

let ratingText = id("ratingText"),
  form = id("form-container"),
  submit = id("submitBtn"),
  feedbackCard = id("feedback"),
  confirmCard = id("confirmation"),
  // errorText = id("errorText"),
  ratings = document.getElementsByName("rating");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selection = form.rating.value;
  ratingText.innerText = selection;
  feedbackCard.classList.add("slide-out");
});

feedbackCard.addEventListener("animationend", () => {
  feedbackCard.classList.add("hidden");
  confirmCard.classList.remove("hidden");
  confirmCard.classList.add("slide-in");
});

ratings.forEach((r) => {
  r.onclick = () => {
    submit.removeAttribute("disabled");
  };
});
