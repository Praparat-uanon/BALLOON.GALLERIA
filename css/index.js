const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasslists();
    panel.classList.add("active");
  });
});

function removeActiveClasslists() {
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      panel.classList.remove("active");
    });
  });
}
