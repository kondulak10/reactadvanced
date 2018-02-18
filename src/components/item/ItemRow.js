import React from 'react';

const ItemRow = ({item}) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.brand}</td>
      <td>{item.country}</td>
      <td>{item.authorId}</td>
    </tr>
  )
}

export default ItemRow;
