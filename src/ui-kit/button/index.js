import React from 'react';
import './style.scss';

export default ({ className = '', ...props }) => (
  <button className={`Button ${className}`} {...props}>{props.children}</button>
);
