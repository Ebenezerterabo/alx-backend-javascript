export default class HolbertonCourse {
  constructor (name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._students = students;
  }

  // name attribute
  get name () {
    return this._name;
  }

  set name (newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // length attribute
  get length () {
    return this._length;
  }

  set length (newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // students attribute
  get students () {
    return this._students;
  }

  set students (newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
