var recipies = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value
  return object
}

function deleteFromObjectByKey(object, key) {
  const newObject = object.assign({}, object)

  delete newObject[key]

  return newObject
}

function destructivelydeleteFromObjectByKey(object, key) {
  delete object.key

  return object
}