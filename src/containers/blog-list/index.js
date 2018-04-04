import React, { Component } from 'react';
import './style.scss';
import img from './img.png';

export default class BlogList extends Component { //eslint-disable-line
  render() {
    return (
      <div className="BlogList">
        <div className="Panel">
          <div className="container">
            Blog
          </div>
        </div>
        <div className="container BlogList__content">
          <div className="row">
            <div className="col-md-10">
              <div className="BlogList__posts" >
                <div className="Post">
                  <div className="Post__thumb">
                    <div className="Post__date-container" >
                      <div className="Post__date">30</div>
                      <div className="Post__dates">
                        <div className="Post__day">Monday</div>
                        <div className="Post__month-year">January, 2017</div>
                      </div>
                    </div>
                    <img className="Post__img" src={img} alt="Mountains and air balloons" />
                  </div>
                  <div className="Post__content">
                    <div className="Post__title">
                      Affidavit of Publication
                    </div>
                    <div className="Post__text">
                      An official notice from each newspaper in which you are required to
                      publish your notice of
                      formation of LLC. The affidavit verifies that the notice has run in
                      the newspaper for the
                      required six weeks. Affidavits of publication are required in New York State.
                    </div>
                    <div className="Post__button">
                      continue reading
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="col-md-2 SidePanel">
              <div className="SidePanel__header">
                Contact us today for more information. <span className="triangle" />
              </div>
              <div className="SidePanel__popular">
                <div className="SidePanel__title">
                  <i className="fa fa-star" />
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
            </aside>
          </div>
        </div>
      </div>
    );
  }
}
