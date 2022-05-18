// Create a new ID for the students
const createId = (array) => {
  let idArray;
  if (array.length) {
    idArray = array.map((el) => el.id);
  }
  return Math.max(...idArray) + 1;
};

export default createId;
