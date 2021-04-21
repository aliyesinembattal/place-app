import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: 'calc(100vh)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '560px',
          backgroundColor: 'transparent',
          padding: '80px 30px',
          margin: '100px auto',
          borderRadius: '10px',
          flex: '1',
        }}
      >
        <div
          style={{
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <h1>Page not found</h1>
          <p>The page is deprecated, deleted, or does not exist at all</p>
          <h1>404 —</h1>
          <Link to="/" className="btn">
            &larr; Go back to the home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
