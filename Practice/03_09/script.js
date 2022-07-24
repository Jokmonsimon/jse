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
  newColor: function (updateColor) {
    this.color = updateColor;
  },
  newpocketNum: function (updatePocketNum) {
    this.pocketNum = updatePocketNum;
  },
};

// Update Backpack Name
console.log('Backpack Name Before:', backpack.name);
backpack.newName('My New Backpack');
console.log('Backpack Name After:', backpack.name);

// Update Backpack Volume
console.log('Back Bag Volume Before:', backpack.volume);
backpack.newVolume(55);
console.log('Back Bag Volume After:', backpack.volume);

// Update Backpack Color
console.log('Backpack Color Before:', backpack.color);
backpack.newColor('Black');
console.log('Backpack Color After:', backpack.color);

// Update Backpack Pocket Number
console.log('Backpack Pocket Number Before:', backpack.pocketNum);
backpack.newpocketNum(24);
console.log('Backpack Pocket Number After:', backpack.pocketNum);
