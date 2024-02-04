let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let h3 = document.querySelector("h3");
let body = document.querySelector("body");

color1.oninput = (event) => {
  setBackgroundGradient();
};
color2.oninput = (event) => {
  setBackgroundGradient();
};

// FOR HEX CODE FORMAT
let setBackgroundGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  if (color1.value !== "#00ff00") {
    h3.textContent = `New gradient: linear-gradient(to right, ${color1.value}, ${color2.value})`;
  }
};

//FOR RGB FORMAT
// function hexToRgb(hex) {
//   let r = parseInt(hex.slice(1, 3), 16),
//     g = parseInt(hex.slice(3, 5), 16),
//     b = parseInt(hex.slice(5, 7), 16);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// let setBackgroundGradient = () => {
//   body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
//   if (color1.value !== "#00ff00") {
//     let rgbColor1 = hexToRgb(color1.value);
//     let rgbColor2 = hexToRgb(color2.value);
//     h3.textContent = `New gradient: linear-gradient(to right, ${rgbColor1}, ${rgbColor2})`;
//   }
// };
