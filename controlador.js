var contador = document.getElementById('num');
var valor = 0;
var botn = document.querySelector('.inc');
var botn1 = document.querySelector('.dec');
var botn2 = document.querySelector('.reset');
botn.addEventListener("click", function () { setValue(++valor); });
botn1.addEventListener("click", function () { setValue(--valor); });
botn2.addEventListener("click", function () {
    valor = 0;
    setValue(valor);
    var mybody = document.getElementById("body");
    console.log("stop here");
});
function setValue(value) {
    contador.textContent = value.toString();
    if (value < 0) {
        contador.classList.add("redText");
        contador.classList.remove("blackText");
    }
    else {
        contador.classList.remove("redText");
        contador.classList.add("blackText");
    }
}
