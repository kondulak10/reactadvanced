import React from 'react';
import { Link } from 'react-router';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1>LoginPage</h1>
        <Link to="/">Homepage</Link>
      </div>
    )
  }
}

export default LoginPage;
