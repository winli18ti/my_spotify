export const filterById = (arr) => {
  return arr.filter((value, index, self) => {
    return (
      self.findIndex((v) => v.id === value.id) === index
    );
  });
}