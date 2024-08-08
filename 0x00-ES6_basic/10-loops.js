export default function appendedToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const value of array) {
    newArray.push(appendString + value); // newArray = appendString + value;
  }

  return newArray;
}
