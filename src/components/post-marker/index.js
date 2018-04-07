import React from 'react';
import moment from 'moment';
import './style.scss';

export default ({ date }) => {
  const mDate = moment(date, 'DD-MM-YYYY HH:mm');
  const monthDay = mDate.format('DD');
  const weekDay = mDate.format('dddd');
  const monthYear = mDate.format('MMMM,YYYY');
  return (
    <div className="PostMarker" >
      <div className="PostMarker__month-day">{monthDay}</div>
      <div className="PostMarker__dates">
        <div className="PostMarker__day">{weekDay}</div>
        <div className="PostMarker__month-year">{monthYear}</div>
      </div>
    </div>
  );
};
