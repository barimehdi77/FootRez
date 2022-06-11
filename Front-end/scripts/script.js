let lightMode = "disabled";

const modeToggle = document.querySelector("#mode-toggle");

const enableLightMode = () => {
  lightMode = "enabled";
  document.body.classList.add("lightmode");
};

const disableLightMode = () => {
  lightMode = "disabled";
  document.body.classList.remove("lightmode");
};

modeToggle.addEventListener("click", () => {
  if (lightMode === "disabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
