import React from 'react';
import {Link} from "react-router"

const ItemRow = ({item}) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>
      <Link to={"item/"+item.id}>{item.title}</Link>
      </td>
      <td>{item.brand}</td>
      <td>{item.country}</td>
      <td>{item.authorId}</td>
    </tr>
  )
}

export default ItemRow;
