const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasslists();
    panel.classList.add("active");
  });
});

function removeActiveClasslists() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

//Review Section
function myFunction(imgs) {
  // Get the expanded image
  const expandImg = document.getElementById("expandedImg");
  // Get the image text
  const imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  // imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
