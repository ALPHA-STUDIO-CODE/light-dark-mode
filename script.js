const THEME_KEY = "theme";

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);
const toggleLabel = document.querySelector("#toggle-icon span");
const toggleIcon = document.querySelector("#toggle-icon i");
const images = [
  document.querySelector("#image1"),
  document.querySelector("#image2"),
  document.querySelector("#image3"),
];

const IMAGE_SRCS = [
  [
    "./img/undraw_proud_coder_light.svg",
    "./img/undraw_proud_coder_dark.svg",
  ],
  [
    "./img/undraw_feeling_proud_light.svg",
    "./img/undraw_feeling_proud_dark.svg",
  ],
  [
    "./img/undraw_conceptual_idea_light.svg",
    "./img/undraw_conceptual_idea_dark.svg",
  ],
];

function applyTheme(isDark) {
  const theme = isDark ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);

  toggleSwitch.checked = isDark;
  toggleLabel.textContent = isDark ? "Dark Mode" : "Light Mode";
  toggleIcon.classList.toggle("fa-sun", !isDark);
  toggleIcon.classList.toggle("fa-moon", isDark);

  for (let i = 0; i < images.length; i++) {
    images[i].src = IMAGE_SRCS[i][isDark ? 1 : 0];
  }
}

toggleSwitch.addEventListener("change", (e) => applyTheme(e.target.checked));

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) {
  applyTheme(savedTheme === "dark");
}
