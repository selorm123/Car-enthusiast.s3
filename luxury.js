// Simple JS for filter buttons to highlight active state and demo filtering
const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".lux-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    const type = button.getAttribute("data-type");

    // Show/hide cards based on type selected
    cards.forEach((card) => {
      if (type === "all" || card.getAttribute("data-type") === type) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
