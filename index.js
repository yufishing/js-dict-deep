var hasOwnProp = Object.prototype.hasOwnProperty;

module.exports = deep;

function isSafeKey (key) {
  return key !== '__proto__' && key !== 'prototype' && key !== 'constructor';
}


function deep (obj, path, value, append) {
  if (arguments.length === 3 || arguments.length === 4) return set.apply(null, arguments);
  return get.apply(null, arguments);
}


function _get_ (obj, key){
  if (s = key.match(/(.*)\[(.*)\]/)) {
    if(hasOwnProp.call(obj, key)){
      obj = obj[key];  
    }else{
      obj = obj[s[1]];
      var f = s[2];
      if (Array.isArray(obj)) {
        if (s = f.match(/(.*)=(.*)/)) {
          for (var j = 0; j < obj.length; j++){
            if (hasOwnProp.call(obj[j], s[1]) && obj[j][s[1]] == s[2]){
              obj = obj[j];
              return obj;
            }
          }
          obj = undefined
        }
        else if (s = f.match(/(\d+)/)) {
          obj = obj[parseInt(s)];
        }
      }
    }
  }
  else {
    obj = obj[key];
  }
  return obj
}


function get (obj, path) {
  var keys = Array.isArray(path) ? path : path.split('.');
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!obj || !isSafeKey(key)) {
      obj = undefined;
      break;
    }
    else 
      obj = _get_(obj, key)
  }
  return obj;
}


function set (obj, path, value, append) {
  var keys = Array.isArray(path) ? path : path.split('.');
  for (var i = 0; i < keys.length - 1; i++) {
    var key = keys[i]; 
    if (!isSafeKey(key)) return;
    var _obj = _get_(obj, key);
    if (!_obj && append) {
      
        if (s = key.match(/(.*)\[(.*)\]/)) {
          key = s[1]
          var f = s[2]
          if(!hasOwnProp.call(obj, key)) obj[key] = []
          _obj = obj[key]
          obj = {}
          if (s = f.match(/(.*)=(.*)/)) {
            obj[s[1]] = s[2]
            _obj.push(obj)
          }
          else if (s = f.match(/(\d+)/)) {
            _obj.push(obj)
          }
        }
        else{
          obj[key] = {};
          obj = obj[key]  
        }
    }
    else if (_obj) {
      obj = _obj
    }
    else
      return
  }
  key = keys[i]
    if (s = key.match(/(.*)\[(.*)\]/)) {
    key = s[1]
    var f = s[2]
    if(!hasOwnProp.call(obj, key)) obj[key] = []
    _obj = obj[key]
    if (s = f.match(/(.*)=(.*)/)) {
      var has = false
      for (var j = 0; j < _obj.length; j++) {
        if (hasOwnProp.call(_obj[j], s[1]) &&_obj[j][s[1]] == s[2]){
          value[s[1]] = s[2];
          _obj[j] = value;
          has = true;
          break;
        }
      }
      if (!has){
        value[s[1]] = s[2]
        _obj.push(value)
      }
    }
    else if (s=f.match(/(\d+)/)) {
      parseInt(s) > _obj.length ? _obj.push(value) : (_obj[parseInt(s)] = value)
    }
  }
  else
    obj[key] = value;
  return 1;
}
