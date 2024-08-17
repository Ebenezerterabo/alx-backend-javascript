export default function createInt8TypedArray(length, position, value) {
  // Create a new array buffer
  const buffer = new ArrayBuffer(length);
  // Create a new view
  const dataView = new DataView(buffer);
  // set the value
  if (position >= length || position < 0) {
    throw new Error('Position outside the array');
  }
  dataView[position] = value;
  dataView.setInt8(position, value);

  return dataView;
}
