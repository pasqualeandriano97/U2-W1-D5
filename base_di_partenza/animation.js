addEventListener("scroll", () => {});

window.addEventListener("scroll", () => {
  const button = document.getElementsByClassName("nav1")[0];
  const nav = document.getElementsByTagName("nav")[0];
  let lastKnownScrollPosition = 0;
  lastKnownScrollPosition = this.scrollY;
  if (lastKnownScrollPosition >= 200) {
    nav.classList.add("transition");
    button.classList.add("transitionbutton");
  } else if (lastKnownScrollPosition >= 200 || 0) {
    nav.classList.add("transition");
    button.classList.add("transitionbutton");
    console.log(lastKnownScrollPosition);
  } else if (lastKnownScrollPosition < 200) {
    nav.classList.remove("transition");
    button.classList.remove("transitionbutton");
  }
});
