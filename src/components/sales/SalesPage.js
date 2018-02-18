import React from 'react';
import { Link } from 'react-router';

class SalesPage extends React.Component {
  render() {
    return (
      <div>
        <h1>SalesPage</h1>
        <Link to="/">Homepage</Link>
      </div>
    )
  }
}

export default SalesPage;
