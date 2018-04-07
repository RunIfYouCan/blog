import React, { PureComponent } from 'react';
import './style.scss';

export default class SidePanel extends PureComponent { //eslint-disable-line
  render() {
    return (
      <aside className="col-md-2 SidePanel">
        <div className="SidePanel__header">
          Contact us today for more information. <span className="triangle" />
        </div>
        <div className="SidePanel__popular">
          <div className="SidePanel__title">
            <i className="fa fa-star SidePanel__title-icon" />
            Popular
          </div>
          <div className="SidePanel__article">
            <div className="SidePanel__article-title">
              Articles of Incorporation
            </div>
            <div className="SidePanel__article-text">
              A document that establishes the existence of your corpora-
            </div>
          </div>
          <div className="SidePanel__article">
            <div className="SidePanel__article-title">
              Articles of Incorporation
            </div>
            <div className="SidePanel__article-text">
              A document that establishes the existence of your corpora-
            </div>
          </div>
        </div>
        <div className="SidePanel__archive">
          <div className="SidePanel__title">
            <i className="fa fa-archive SidePanel__title-icon" />
            Archive
          </div>
        </div>
        <div className="SidePanel__year">
          <div className="SidePanel__title SidePanel__title--toggler">
            <div className="SidePanel__title-text">
              <i className="fa fa-calendar SidePanel__title-icon" />
              2016
            </div>
            <i className="fa fa-angle-up SidePanel__title-icon SidePanel__title-icon--angle" />
          </div>
          <ul className="SidePanel__years-list">
            <li className="SidePanel__years-item">
              <span>January</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>February</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>March</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>April</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>May</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>June</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>July</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>August</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>September</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>October</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>November</span>
              <span>(20)</span>
            </li>
            <li className="SidePanel__years-item">
              <span>December</span>
              <span>(20)</span>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}
