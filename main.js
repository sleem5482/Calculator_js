let inputShow = document.querySelectorAll(".show");
let display = document.querySelector(".display input");
let AC = document.querySelector(".AC");
let DE = document.querySelector(".DE");
let equal = document.querySelector(".equal");
// console.log(AC)

inputShow.forEach((inp) => {
    inp.addEventListener("click", function () {
        // console.log(inp)
        display.value += inp.value;
    });
});
AC.addEventListener("click", function () {
    display.value = "";
});
DE.addEventListener("click", function () {
    display.value = display.value.slice(0, -1);
});
equal.onclick = function () {
    display.value = eval(display.value); //evaluate javascript code
};
