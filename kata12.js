const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  const foodOnHand = bakeryA.concat(bakeryB);
  for (let i = 0; i < recipes.length; i++) {
    for (let x = 0; x < recipes[i].ingredients.length; x++) {
      for (let y = 0; y < foodOnHand.length; y++) {
        if (recipes[i].ingredients[x] === foodOnHand[y]) {
          for (let z = 0; z < foodOnHand.length; z++) {
            if (recipes[i].ingredients[x + 1] === foodOnHand[z]) {
              return recipes[i].name;
            }
          }
        }
      }
    }
  }
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
