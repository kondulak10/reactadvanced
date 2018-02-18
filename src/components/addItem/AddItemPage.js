import React from 'react';
import { Link } from 'react-router';

class AddItemPage extends React.Component {
  render() {
    return (
      <div>
        <h1>AddItemPage</h1>
        <Link to="homepage">Add item page</Link>
      </div>
    )
  }
}

export default AddItemPage;
