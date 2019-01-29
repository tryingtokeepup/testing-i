//test code
const items = require('./items');
const itemTypes = require('./itemTypes');

const enhancer = require('../enhancement/enhancer');

test('item should have a name, a type, durability, and enhancement value', () => {
  const item = new items('name', itemTypes.WEAPON);
  expect(typeof item.name).toBe('string');
  expect(typeof item.type).toBe('string');
  expect(typeof item.enhancementVal).toBe('number');
  expect(typeof item.durabilityVal).toBe('number');
});

test('enhancing success increases enhancing level', () => {
  // arrange - setup
  const item = new items('name', itemTypes.WEAPON); // default dura = 100, enhance = 0
  console.log('item console', item);

  // act - execute SUT (System Under Test)
  const actual = enhancer.success(item); // increase the item's enhance by 1

  // assert
  expect(actual.enhancementVal).toEqual(actual.enhancementVal + 1);
});

test('enhancing an armor at level <= 5 OR enhancing a weapon at level <= 7 should succeed', () => {
  const armor = new items('genericArmor', itemTypes.ARMOR, 100, 5);
  const weapon = new items('genericWeapon', itemTypes.WEAPON, 100, 7);

  const actualArmor = enhancer.success(armor);

  const actualWeapon = enhancer.success(weapon);

  expect(actualWeapon.enhancementVal).toEqual(weapon.enhancementVal + 1);
  expect(actualArmor.enhancementVal).toEqual(armor.enhancementVal + 1);
});

// test('should repair durability', () => {
//   const actual = enhancer.repair({ durability: 0 });

//   expect(actual.durability).toBe(100);
// });

// it('repair() should not change other properties', () => {
//   const actual = enhancer.repair({ name: 'sword', durability: 0 });

//   expect(actual.durability).toEqual({ name: 'sword', durability: 100 });
// });
