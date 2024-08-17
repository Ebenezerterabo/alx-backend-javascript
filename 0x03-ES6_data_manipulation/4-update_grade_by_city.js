export default function updateStudentGradeByCity(lists, city, newGrade) {
  const matchedCity = lists.filter((student) => student.location === city);
  const updatedStudents = matchedCity.map((student) => {
    const studentGrade = newGrade.find((grade) => grade.stundentId === student.id);
    // if (studentGrade) {
    //   student.grade = studentGrade.grade;
    // } else {
    //   student.grade = 'N/A';
    // }
    return {
      ...student, grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
  return updatedStudents;
}
