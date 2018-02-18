import React from 'react'
import ItemRow from './ItemRow';

const ItemsList = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Country</th>
          <th>AuthorId</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map(item=>
            <ItemRow key={item.id} item={item}></ItemRow>
          )
        }
      </tbody>
    </table>
  )
}

export default ItemsList;
