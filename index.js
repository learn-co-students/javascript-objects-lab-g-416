var recipes = {}

const updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, {[key]: value})
}

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign(object, object[key] = value)
}

const deleteFromObjectByKey = (object, key) => {
  let obj = Object.assign({}, object)
  
  delete obj[key]
  return obj
}

const destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key]
  return object
}