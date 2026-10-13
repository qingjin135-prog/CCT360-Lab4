let ingredient = "";
let method = "";

const ingredientScreen = document.querySelector("#ingredient-screen");
const methodScreen = document.querySelector("#method-screen");
const resultScreen = document.querySelector("#result-screen");
const ingredientCards = document.querySelectorAll(".ingredient-card");
const chosenIngredient = document.querySelector("#chosen-ingredient");
const methodOptions = document.querySelector("#method-options");
const resultTitle = document.querySelector("#result-title");
const resultText = document.querySelector("#result-text");
const resultImage = document.querySelector("#result-image");
const restartButton = document.querySelector("#restart-button");


ingredientCards.forEach(function (card) 
{card.addEventListener("click", function ()
    { ingredient = card.dataset.ingredient;
        ingredientScreen.style.display = "none";
        methodScreen.style.display = "block";
        showMethods();});});


function showMethods() 
    { methodOptions.innerHTML = "";
          console.log("ingredient is:", ingredient);
          console.log("methodScreen:", methodScreen, "methodOptions:", methodOptions);
    if (ingredient === "fish")
         { chosenIngredient.textContent = "You chose Fish.";
        createMethodButton("Pan-Fry", "pan-fry"); createMethodButton("Bake", "bake");} 
        else if (ingredient === "chicken") 
            {chosenIngredient.textContent = "You chose Chicken.";
        createMethodButton("Fry", "fry"); createMethodButton("Roast", "roast");} 

    else if (ingredient === "beef") 
        { chosenIngredient.textContent = "You chose Beef.";
        createMethodButton("Grill", "grill"); createMethodButton("Pan-Sear", "pan-sear");}}


function createMethodButton(buttonText, methodName) 
{console.log("Creating button:", buttonText, methodName);
     const button = document.createElement("button");
    button.textContent = buttonText; button.classList.add("method-button");
    button.addEventListener("click", function () 
    { method = methodName; showResult();});
 methodOptions.appendChild(button);}

function showResult() 
{methodScreen.style.display = "none"; resultScreen.style.display = "block";

    if (ingredient === "fish" && method === "pan-fry")
         { resultImage.src = "images/pan-fried-fish.png";
        resultTitle.textContent = "Pan-Fried Fish";
        resultText.textContent = "Crispy outside, tender inside.";} 
    else if (ingredient === "fish" && method === "bake") 
        { resultImage.src = "images/baked-fish.png";
        resultTitle.textContent = "Baked Fish";
        resultText.textContent = "Warm and tender";} 
    else if (ingredient === "chicken" && method === "fry") 
        { resultImage.src = "images/fried-chicken.png";
        resultTitle.textContent = "Fried Chicken";
        resultText.textContent = "Golden, crispy, and ready to eat.";} 
    else if (ingredient === "chicken" && method === "roast") 
        { resultImage.src = "images/roasted-chicken.png";
        resultTitle.textContent = "Roasted Chicken";
        resultText.textContent = "Juicy, savory, and perfectly roasted.";} 
    
    else if (ingredient === "beef" && method === "grill") 
        { resultImage.src = "images/grilled-steak.png";
        resultTitle.textContent = "Grilled Steak";
        resultText.textContent = "Smoky, juicy, and fresh from the grill.";} 
    
    else if (ingredient === "beef" && method === "pan-sear") 
        { resultImage.src = "images/pan-seared-steak.png";
        resultTitle.textContent = "Pan-Seared Steak";
        resultText.textContent = "Rich, tender, and beautifully seared.";}}

restartButton.addEventListener("click", function () 
{ ingredient = ""; method = "";
    resultScreen.style.display = "none";
    ingredientScreen.style.display = "block";});