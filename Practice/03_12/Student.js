/**
 * Student Object Class
 * Class declaration: class Name {}
 * Class expression: const Name = class {}
 */

const Student = class {
  constructor(
    // Object Parameters
    name,
    gender,
    dateOfBirth,
    country,
    email,
    password
  ) {
    // Object Properties
    this.name = name;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.country = country;
    this.email = email;
    this.password = password;
  }
};

export default Student;
