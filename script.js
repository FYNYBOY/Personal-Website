
const colors = [
    "rgb(115, 115, 212)",
    "rgb(212, 115, 160)",
    "rgb(115, 190, 150)",
    "rgb(230, 180, 90)"
];

let index = 0;
const button = document.getElementById("color-btn");

button.addEventListener("click", function () {
    index = (index + 1) % colors.length;
    document.body.style.backgroundColor = colors[index];
});
