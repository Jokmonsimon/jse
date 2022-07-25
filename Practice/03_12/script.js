/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */
import Student from './Student.js';

const createStudent = new Student(
  'Akot Oliver',
  'Female',
  '12/12/2000',
  'Uganda',
  'akotoliver@gmail.com',
  'password123'
);

const createStudent1 = new Student(
  'Opio Tonny',
  'Male',
  '21/02/1996',
  'Kenya',
  'tonnyO@gmail.com',
  'password123'
);

const createStudent2 = new Student(
  'Odora James',
  'Male',
  '18/06/2003',
  'Tanzania',
  'odorajames@gmail.com',
  'password123'
);

const createStudent3 = new Student(
  'Adong Jennifer',
  'Female',
  '30/10/2001',
  'Rwanda',
  'adong.j@gmail.com',
  'password123'
);

console.log('Student Object', createStudent);
console.log('Student Name:', createStudent.name);
console.log('Student email address:', createStudent.email);

console.log('Student Object', createStudent1);
console.log('Student Name:', createStudent1.name);
console.log('Student email address:', createStudent1.email);

console.log('Student Object', createStudent2);
console.log('Student Name:', createStudent2.name);
console.log('Student email address:', createStudent2.email);

console.log('Student Object', createStudent3);
console.log('Student Name:', createStudent3.name);
console.log('Student email address:', createStudent3.email);
