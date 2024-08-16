export default function getStudentsByLocation(lists, location) {
  return lists.filter((student) => student.location === location);
}
