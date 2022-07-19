var contador = document.getElementById('num');
let valor = 0;
let botn = document.querySelector('.inc');
let botn1 = document.querySelector('.dec');
let botn2 = document.querySelector('.reset');

botn.addEventListener ("click", () => {setValue(++valor)});
botn1.addEventListener("click", () => {setValue(--valor)});
botn2.addEventListener("click", () => {
    valor=0;
    setValue(valor)
    let mybody = document.getElementById("body")
    console.log("stop here")
});

function setValue(value:Number){
    contador.textContent = value.toString()
    if(value<0){
        contador.classList.add("redText")
        contador.classList.remove("blackText")
    }else{
        contador.classList.remove("redText")
        contador.classList.add("blackText")
    }
    
}