export default function createInt8TypedArray(length, position, value) {
  // Create a new array buffer
  const buffer = new ArrayBuffer(length);
  // Create a new view
  const dataView = new DataView(buffer);
  // set the value
  dataView[position] = value;
  dataView.setInt8(position, value);

  return dataView;
}
