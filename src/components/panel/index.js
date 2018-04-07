import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default () => (
  <div className="Panel">
    <div className="container">
      <Link to="/posts">
        Blog
      </Link>
    </div>
  </div>
);
