/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: 'Everyday Backpack',
  volume: 30,
  color: 'grey',
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function (updateName) {
    this.name = updateName;
  },
  newVolume: function (updateVolume) {
    this.volume = updateVolume;
  },
};

console.log('Backpack Name Before:', backpack.name);
backpack.newName('Back Bag');
console.log('Backpack Name After:', backpack.name);

console.log('Back Bag Volume Before:', backpack.volume);
backpack.newVolume(55);
console.log('Back Bag Volume After:', backpack.volume);
