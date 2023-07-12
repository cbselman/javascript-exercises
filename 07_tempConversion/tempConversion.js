const ftoc = function(temp) {
  let newTemp = (temp - 32) * 5/9;
  let roundTemp = Math.round(newTemp * 10) / 10;
  return roundTemp;
};

const ctof = function(temp) {
  let newTemp = temp * (9/5) + 32;
  let roundTemp = Math.round(newTemp * 10) / 10;
  return roundTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
