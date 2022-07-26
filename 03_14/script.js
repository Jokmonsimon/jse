/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from './Backpack.js';
import Book from './Book.js';

const everydayPack = new Backpack(
  'Everyday Backpack',
  30,
  'grey',
  15,
  26,
  26,
  false,
  'December 5, 2018 15:00:00 PST'
);

console.log('The everydayPack object:', everydayPack);
console.log('The pocketNum value:', everydayPack.pocketNum);
console.log('Days since aquired:', everydayPack.backpackAge());

const book = new Book(
  1,
  'Song of Lawino',
  'Okot Btek',
  48,
  'The Best selling book in Africa',
  'imgUrl',
  'Black',
  'Hard'
);

console.log('Book Object', book);
console.log('Book Title Before:', book.title);
console.log('Book Author', book.author);
console.log('Book Pages:', book.pages);
console.log('Book Description:', book.description);

const book1 = new Book(
  1,
  'Song of Lawino',
  'Okot Btek',
  48,
  'The Best selling book in Africa',
  'imgUrl',
  'Black',
  'Hard'
);

console.log('Book Object', book1);
console.log('Book Title Before:', book1.title);
console.log('Book Author', book1.author);
console.log('Book Pages:', book1.pages);
console.log('Book Description:', book1.description);

const book2 = new Book(
  1,
  'Song of Lawino',
  'Okot Btek',
  48,
  'The Best selling book in Africa',
  'imgUrl',
  'Black',
  'Hard'
);

console.log('Book Object', book2);
console.log('Book Title Before:', book2.title);
console.log('Book Author', book2.author);
console.log('Book Pages:', book2.pages);
console.log('Book Description:', book2.description);

const book3 = new Book(
  1,
  'Song of Lawino',
  'Okot Btek',
  48,
  'The Best selling book in Africa',
  'imgUrl',
  'Black',
  'Hard'
);

console.log('Book Object', book3);
console.log('Book Title Before:', book3.title);
console.log('Book Author', book3.author);
console.log('Book Pages:', book3.pages);
console.log('Book Description:', book3.description);

const book4 = new Book(
  1,
  'Song of Lawino',
  'Okot Btek',
  48,
  'The Best selling book in Africa',
  'imgUrl',
  'Black',
  'Hard'
);

console.log('Book Object', book4);
console.log('Book Title Before:', book4.title);
console.log('Book Author', book4.author);
console.log('Book Pages:', book4.pages);
console.log('Book Description:', book4.description);

const book5 = new Book(
  6,
  'JavaScript Essentials',
  'Afande Ojok',
  789,
  'Introduction JavaScript for beginners',
  'imgUrl',
  'Blue',
  'Soft'
);

console.log('Book Object', book5);
console.log('Book Title Before:', book5.title);
console.log('Book Author', book5.author);
console.log('Book Pages:', book5.pages);
console.log('Book Description:', book5.description);
