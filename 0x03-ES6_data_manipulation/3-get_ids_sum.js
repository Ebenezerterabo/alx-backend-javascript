export default function getListStudentIdsSum (list) {
  if (!Array.isArray(list)) {
    return 0;
  }
  return list.reduce((acc, student) => acc + student.id, 0);
}
