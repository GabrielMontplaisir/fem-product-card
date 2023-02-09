let id = (id) => document.getElementById(id);

let ratingText = id("ratingText"),
  submit = id("submitBtn"),
  feedbackCard = id("feedback"),
  confirmCard = id("confirmation"),
  errorText = id("errorText"),
  ratings = document.querySelectorAll('input[name="rating"');

submit.addEventListener("click", () => {
  let selection;
  for (const radioBtn of ratings) {
    if (radioBtn.checked) {
      selection = radioBtn.value;
      break;
    }
  }

  ratingText.innerText = selection;

  if (selection) {
    confirmCard.classList.remove("hidden");
    feedbackCard.classList.add("hidden");
  } else {
    errorText.classList.remove("hidden");
  }
});
