var recipes = {
  "Cake": "Frosting",
  "Veggie Burrito": "Beans",
  "Stir Fry": "Tempeh"
};

function updateObjectWithKeyAndValue(recipes, recipeKey, ingredient) {
  recipes[recipeKey] = ingredient;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, recipeKey, ingredient) {
  recipes[recipeKey] = ingredient;
  return recipes;
}

function deleteFromObjectByKey(recipes, recipeKey) {
  let newRecipe = Object.assign({}, recipes);
  delete newRecipe[recipeKey];
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(recipes, recipeKey) {
  delete recipes[recipeKey];
  return recipes;
}
