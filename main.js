const paragraph = document.getElementById("paragraph");
console.log(paragraph);

const secondmaintitle = document.querySelector("h1")
secondmaintitle.innerHTML = "je suis entrain d'essayer ! "

const maintitle = document.querySelector("h1")
maintitle.style.color = "red";


 const changeImage = () => {
    const myImage = document.getElementsByTagName('img')[0]; // - Le [0] sert à récupérer la première image trouvée dans le DOM.
    myImage.src = './assets/img/js2.png';
} 

document.getElementsByTagName('h1')[0].addEventListener('click', changeImage);

class receipe {    
    
    constructor(title) {
        this.title = title ;
    }

}

this.steps = [
    [1, "cup", "white flour", "dry"],
    [0.5, "tsp", "baking soda", "wet"],
    [0.25, "tsp", "salt", "dry"],
    [0.25, "cup", "sugar", "dry"],
    [0.25, "cup", "brow sugar", "dry"],
    [0.25, "tbsp", "soy milk", "wet"],
    [0.25, "tbsp", "oil", "wet"],
    [0.25, "tsp", "pure vanilla extract", "dry"],
    ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
    [325, 10]
  ];

 let name = "";

 name = prompt("quel est votre prenoms ?")

 console.log(`je suis thot je suis qui survi d'une generation a l'autre et qui s'apprete ${name}`)
