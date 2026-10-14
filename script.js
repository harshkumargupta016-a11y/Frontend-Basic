const details = document.querySelectorAll("details[name='faq']");

details.forEach((target) => {
  target.addEventListener("toggle", () => {
    if (target.open) {
      details.forEach((el) => el !== target && (el.open = false));
    }
  });
});
