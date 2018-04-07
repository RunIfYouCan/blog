import React from 'react';
import { Link } from 'react-router-dom';
import { PostMarker } from '../../../components/index';
import './style.scss';
import img from './img.png';

export default ({
  created,
  _id,
  body,
  title,
}) => (
  <div key={_id} className="ListPost">
    <div className="ListPost__thumb">
      <PostMarker
        date={created}
      />
      <img className="ListPost__img" src={img} alt="Mountains and air balloons" />
    </div>
    <div className="ListPost__content">
      <div className="ListPost__title" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="ListPost__text" dangerouslySetInnerHTML={{ __html: body }} />
      <Link to={`/posts/${_id}`} className="ListPost__button">
        continue reading
      </Link>
    </div>
  </div>
);
