/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const project = {
  id: 1,
  name: 'Meaning of ICT',
  duration: '24 hours',
  status: 'Not started',
  description: 'What is the meaning of ICT',
  instructorId: {
    id: 1,
    firstName: 'Ojok',
    middleName: 'Simon',
    lastName: 'Peter',
    gender: 'Male',
    country: 'Uganda',
  },
  courseId: {
    id: 1,
    name: 'Computer Litracy',
    courseCode: 2201,
    duration: '3 months',
  },
};

console.log('Project Name:', project.name);
console.log('Project Description:', project.description);
console.log('Course:', project.courseId.name);
console.log(
  'Instructor:',
  project.instructorId.firstName +
    ' ' +
    project.instructorId.middleName +
    ' ' +
    project.instructorId.lastName
);
