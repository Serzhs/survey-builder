export const moveArrayItem = <T>(arr: T[], index: number, count: 1 | -1) => {
  const newIndex = index + count

  if (newIndex < 0 || newIndex >= arr.length) {
    return arr
  }

  const newArr = [...arr]
  const [item] = newArr.splice(index, 1) // remove the item
  newArr.splice(newIndex, 0, item) // insert it at the new index

  return newArr
}
