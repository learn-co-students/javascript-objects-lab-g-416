const recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  let newObject = object[key] = value
  return Object.assign({}, object, newObject)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  let objCopy = Object.assign({}, object);
  delete objCopy[key]
  return objCopy
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
