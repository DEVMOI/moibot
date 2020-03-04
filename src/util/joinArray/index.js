export default function joinArray(array, join = ',', prefix = '') {
  let arr = [];
  array.forEach(prof => {
    arr.push(prefix + prof);
  });
  return arr.join(join);
}
