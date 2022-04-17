let button = document.querySelector(".change");
let IDcolor = document.querySelector(".idColor");
let body = document.getElementById("body");
let Main = document.querySelector(".Asli");
console.log(Main);
let color = [
  "Red",
  "brown",
  "blue",
  "green",
  "yellow",
  "#623CEA",
  "#EF798A",
  "#988B8E",
  "#5A5A66",
  "#1A936F",
];

button.addEventListener("click", () => {
  let Number = Math.floor(Math.random() * 10);
  let combine = color[Number];
  console.log(combine);
  IDcolor.innerHTML = combine;
  body.style.backgroundColor = combine;
  button.style.backgroundColor = combine;
});
