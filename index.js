var recipes = {};

function updateObjectWithKeyAndValue (recipes, key, value) {
  return Object.assign({}, recipes, {
    [key]: value
  });
};

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value;
  return recipes;
};

function deleteFromObjectByKey (recipes, key) {
  let recipesClone = Object.assign({}, recipes);
  delete recipesClone[key];
  return recipesClone;
};

var destructivelyDeleteFromObjectByKey = (recipes, key) => {
  delete recipes.name;
  return recipes;
};
