var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key){
  return Object.assign({}, obj, delete obj.key)
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
