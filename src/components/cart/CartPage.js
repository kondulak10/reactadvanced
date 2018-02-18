import React from 'react';
import { Link } from 'react-router';

class CartPage extends React.Component {
  render() {
    return (
      <div>
        <h1>CartPage</h1>
        <Link to="/">Homepage</Link>
      </div>
    )
  }
}

export default CartPage;
