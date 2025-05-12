// Check if user preferences are stored
let isAnimationEnabled = localStorage.getItem("animationEnabled");

// If no preference is set, default to true
if (isAnimationEnabled === null) {
  localStorage.setItem("animationEnabled", "true");
  isAnimationEnabled = "true";
}

// Function to toggle animation on button click
function toggleAnimation() {
  const button = document.querySelector("button");

  // Retrieve animation preference from localStorage
  if (isAnimationEnabled === "true") {
    // Add animation class
    button.classList.add("animate-color", "animate-transform");

    // Remove animation class after animation ends
    button.addEventListener("animationend", () => {
      button.classList.remove("animate-color", "animate-transform");
    });
  }
}

// Listen for button click to trigger animation
document.querySelector("button").addEventListener("click", toggleAnimation);

// Function to toggle animation preference
function togglePreference() {
  if (isAnimationEnabled === "true") {
    localStorage.setItem("animationEnabled", "false");
    isAnimationEnabled = "false";
  } else {
    localStorage.setItem("animationEnabled", "true");
    isAnimationEnabled = "true";
  }
}
