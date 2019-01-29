module.exports = {
  success,
  fail,
  repair
};

function success(item) {
  if (item.enhancementVal <= 5 && item.type === 'ARMOR') {
    item.enhancementVal += 1;
    return item;
  }
  if (item.enhancementVal <= 7 && item.type === 'WEAPON') {
    item.enhancementVal += 1;
    console.log('console ITEM', item);
    return item;
  }
}

function fail(item) {}

function repair(item) {
  if (item.durability < 100) {
    return (item.durability = 100);
  }
}
