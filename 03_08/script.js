/**
 * Create a Backpack object.
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
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log('The backpack object:', backpack);
console.log('The pocketNum value:', backpack.pocketNum);
console.log('Strap Length Left Before:', backpack.strapLength.left);
console.log('Strap Length Right Before:', backpack.strapLength.right);
backpack.newStrapLength(18, 23);
console.log('Strap Length Left After:', backpack.strapLength.left);
console.log('Strap Length Right After:', backpack.strapLength.right);
