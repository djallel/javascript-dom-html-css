const rouge = document.querySelector(".rouge");
const vert = document.querySelector(".vert");
const bleu = document.querySelector(".bleu");

console.log(rouge.parentElement.children);
console.log(vert.parentElement.children);
console.log(bleu.parentElement.children);




function windowReady() {
    console.log("c'est un eventHandler djallel")
}

window.onload = windowReady;


window.onload = function(){
    const parent = document.querySelector("#parent");
    const enfant = document.querySelector("#enfant");


    enfant.addEventListener("click", enfantFonction, true);
    parent.addEventListener("click", parentFonction,true);

    function enfantFonction(event) {
        console.log("c'est un enfantFonction djallel")

    }
    function parentFonction(event) {
        console.log("c'est un parentFonction djallel")

    }
};
