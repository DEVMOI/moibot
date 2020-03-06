export default function joinArray(array, join = ',') {
  let arr = [];
  array.forEach(prof => {
    arr.push(prof);
  });
  return arr.join(join);
}
