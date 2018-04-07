import React from 'react';
import './style.scss';

export default ({ type = 'text', className = '', ...props }) => (
  <input className={`${className} Input`} type={type} {...props} />
);
