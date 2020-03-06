export default function createQuery(string, remove, split = ' ') {
  let query;
  remove === ' ' || remove === null
    ? (query = string.split(split))
    : (query = string.replace(remove, '').split(split));
  return query;
}
