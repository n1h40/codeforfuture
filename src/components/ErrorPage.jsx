import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" style={{ color: '#007BFF', textDecoration: 'none' }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
