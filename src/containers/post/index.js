import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { Panel, SidePanel, PostMarker, Header, Footer } from '../../components';
import { Input, Button, TextArea } from '../../ui-kit/index';
import { loadArticle, postComment, editPost } from '../../redux/articles/actions';
import { fontSizesFromTo } from '../../utils/editor';
import { memoize } from '../../utils/data';
import Comments from './comments';
import './style.scss';
import img from './img.png';

class Post extends Component {
  state = {
    content: '',
    title: '',
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.loadArticle(id);
  }

  componentWillReceiveProps({ article: newArticle }) {
    const { article } = this.props;
    if (!newArticle) return;
    if (!article || (article._id !== newArticle._id)) {
      this.setState(() => ({
        content: newArticle.body,
        title: newArticle.title,
      }));
    }
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

  openEditForm = () => {
    this.setState(() => ({
      isOpenEditPostForm: true,
    }));
  }

  closeEditForm = () => {
    this.setState(() => ({
      isOpenEditPostForm: false,
    }));
  }

  editPost = () => {
    const { content, title } = this.state;
    const { article: { _id } } = this.props;
    this.props.editPost({
      post: { body: content, title },
      id: _id,
    }).then(this.closeEditForm);
  }

  handleInputChange = ({ target }) => {
    this.setState(() => ({
      [target.getAttribute('id')]: target.value,
    }));
  }

  handleEditorChange = memoize(editor => (content) => {
    this.setState(() => ({
      [editor]: content,
    }));
  })

  render() {
    const { article } = this.props;
    const { isOpenEditPostForm, content, title } = this.state;
    return (
      <div className="Post">
        <Header />
        <Panel />
        <div className="container Post__content">
          <div className="row">
            <div className="col-md-10">
              {article &&
              <React.Fragment>
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
                    {!isOpenEditPostForm ?
                      <div dangerouslySetInnerHTML={{ __html: article.title }} />
                      :
                      <Editor
                        value={title}
                        apiKey="b1mrkq3tb0690q1uqdwvimwhppdfqc0jq7r905tm2zigbnbw"
                        onEditorChange={this.handleEditorChange('title')}
                        cloudChannel="dev"
                        init={{
                          toolbar: 'fontsizeselect',
                          fontsize_formats: fontSizesFromTo(8, 24),
                          min_height: 50,
                          height: 50,
                        }}
                      />
                    }
                  </div>
                  {!isOpenEditPostForm ?
                    <div dangerouslySetInnerHTML={{ __html: article.body }} />
                    :
                    <Editor
                      value={content}
                      apiKey="b1mrkq3tb0690q1uqdwvimwhppdfqc0jq7r905tm2zigbnbw"
                      onEditorChange={this.handleEditorChange('content')}
                      cloudChannel="dev"
                      init={{
                        toolbar: 'fontsizeselect',
                        fontsize_formats: fontSizesFromTo(8, 24),
                      }}
                    />
                  }
                  <div className="Post__buttons">
                    {isOpenEditPostForm ?
                      <React.Fragment>
                        <Button onClick={this.closeEditForm} className="Post__button">Cancel</Button>
                        <Button onClick={this.editPost} className="Post__button">Save</Button>
                      </React.Fragment>
                      :
                      <Button onClick={this.openEditForm} className="Post__button">
                        Edit
                      </Button>
                    }
                  </div>
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
                  </div>
                  <div className="col-md-12 Post__submit">
                    <Button>Submit Comment</Button>
                  </div>
                </form>
              </React.Fragment>
              }
            </div>
            <SidePanel />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ articles }) => ({
  article: articles.article,
});

export default connect(mapStateToProps, { loadArticle, postComment, editPost })(Post);
