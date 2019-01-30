// item constructor

// const default_durability = 100;

// const default_enhancement_level = 0;

class Items {
  constructor(name, type, durability = 100, enhancement = 0) {
    (this.name = name),
      (this.type = type),
      (this.durabilityVal = durability),
      (this.enhancementVal = enhancement);
  }
}

module.exports = Items;
