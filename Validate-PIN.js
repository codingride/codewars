function validatePIN (pin) {
  //return true or false
  if(/^[0-9]*$/g.test(pin)){
    return pin.length === 4 || pin.length === 6 ? true : false;
  } else {
    return false;
  }
}
