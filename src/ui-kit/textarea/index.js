import React from 'react';
import './style.scss';

export default ({ className = '', ...props }) => (
  <textarea className={`${className} TextArea`} {...props} />
);
