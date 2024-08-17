import getListStudents from './0-get_list_students';
import updateStudentGradeByCity from './4-update_grade_by_city';

console.log(updateStudentGradeByCity(getListStudents(), 'San Francisco'
  , [{ stundentId: 5, grade: 97 }, { stundentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), 'San Francisco'
  , [{ stundentId: 5, grade: 97 }]));
