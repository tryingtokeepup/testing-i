module.exports = {
  success,
  fail
};

const items = require('../items/items');
//const itemTypes = require('./itemTypes');

function success(item) {
  const item = new items('name', itemTypes.WEAPON);
  if (item.enhancementVal < 10) {
    enhancementVal + 1;
  }
}
