export function formattedForSelect (items, value, text) {
  return items.map(item =>{
    return {
      value: item[id],
      text: item[text]
    }
  })
}
