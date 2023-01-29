console.log("Ho!");

let colorTheme = "dark";

const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", () => {
  colorTheme === "dark" ? (colorTheme = "light") : (colorTheme = "dark");

  document.body.classList = colorTheme;

  console.log(colorTheme);
});
