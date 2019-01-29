module.exports = {
  success,
  fail,
  repair
};

function success(item) {
  if (item.enhancementVal <= 5 && item.itemTypes === 'ARMOR') {
    item.enhancementVal + 1;
    return item;
  }
  if (item.enhancementValu <= 7 && item.itemTypes === 'WEAPON') {
    item.enhancementVal + 1;
    return item;
  }
}

function fail(item) {}

function repair(item) {
  if (item.durability < 100) {
    return (item.durability = 100);
  }
}
