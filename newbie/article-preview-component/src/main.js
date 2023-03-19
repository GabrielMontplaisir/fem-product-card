const share_btn = document.querySelector(".share__btn");
const section_share = document.getElementById("share");
let expanded = !share_btn.getAttribute("aria-expanded");

// Display or hide the tooltip

function expand(value) {
  section_share.setAttribute("aria-expanded", value);
  share_btn.setAttribute("aria-expanded", value);
}

// When 'Share' button is clicked

share_btn.addEventListener("click", () => {
  expanded = !expanded;
  expand(expanded);
});

// When page is clicked elsewhere and not the Tooltip.

document.addEventListener("click", (e) => {
  if (!e.target.closest(".share__btn") && !e.target.closest("#share")) {
    expanded = false;
    expand(expanded);
  }
});

// For accessibility reasons, if the tooltip is open and 'Esc' is pressed, then hide the tooltip.
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    expanded = false;
    expand(expanded);
  }
});
