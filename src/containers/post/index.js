import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { Panel, SidePanel, PostMarker } from '../../components';
import { Input, Button, TextArea } from '../../ui-kit/index';
import { loadArticle, postComment } from '../../redux/articles/actions';
import { fontSizesFromTo } from '../../utils/editor';
import Comments from './comments';
import './style.scss';
import img from './img.png';

class Post extends Component {
  state = {}
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.loadArticle(id);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { article } = this.props;
    const { text, author } = this.state;

    this.props.postComment({
      articleId: article._id,
      authorName: author,
      text,
      author,
    });
  }

  handleInputChange = ({ target }) => {
    this.setState(() => ({
      [target.getAttribute('id')]: target.value,
    }));
  }

  handleEditorChange = (e) => {
    this.setState(() => ({
      comment: e.target.getContent(),
    }));
  }

  render() {
    const { article } = this.props;
    return (
      <div className="Post">
        <Panel />
        <div className="container Post__content">
          <div className="row">
            {article &&
            <div className="col-md-10">
              <div className="Post__img">
                <PostMarker date={article.created} />
                <img src={img} alt="Mountains and balloons" />
                <div className="Post__img-footer">
                  <div className="Post__tags">
                    <i className="fa fa-tags" />
                    <ul>
                      <li>Tag</li>
                      <li>Tag</li>
                      <li>Tag</li>
                      <li>Tag</li>
                    </ul>
                  </div>
                  <div className="Post__comments-count">
                    <i className="fa fa-comment" />
                    (999)
                  </div>
                  <div className="Post__views-count">
                    <i className="fa fa-eye" />
                    (999)
                  </div>
                </div>
              </div>
              <div className="Post__body">
                <div className="Post__title">
                  {article.title}
                </div>
                <div dangerouslySetInnerHTML={{ __html: article.body }} />
              </div>
              <div className="Post__comments">
                <Comments commentsId={article.comments} />
              </div>
              <form onSubmit={this.handleSubmit} className="row Post__form">
                <div className="col-md-8 form-group">
                  <Input required onChange={this.handleInputChange} placeholder="Name" id="author" />
                </div>
                <div className="col-md-4 form-group">
                  <Input type="email" onChange={this.handleInputChange} placeholder="e-mail" id="email" />
                </div>
                <div className="col-md-12 form-group">
                  <TextArea required onChange={this.handleInputChange} id="text" />
                  {/*<Editor*/}
                    {/*apiKey="b1mrkq3tb0690q1uqdwvimwhppdfqc0jq7r905tm2zigbnbw"*/}
                    {/*onChange={this.handleEditorChange}*/}
                    {/*cloudChannel="dev"*/}
                    {/*init={{*/}
                      {/*toolbar: 'fontsizeselect',*/}
                      {/*fontsize_formats: fontSizesFromTo(8, 24),*/}
                    {/*}}*/}
                  {/*/>*/}
                </div>
                <div className="col-md-12 Post__submit">
                  <Button>Submit Comment</Button>
                </div>
              </form>
            </div>
            }
            <SidePanel />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ articles }) => ({
  article: articles.article,
});

export default connect(mapStateToProps, { loadArticle, postComment })(Post);
