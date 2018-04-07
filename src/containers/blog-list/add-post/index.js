import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '../../../ui-kit/index';
import { fontSizesFromTo } from '../../../utils/editor';
import { memoize } from '../../../utils/data';
import './style.scss';

export default class AddPost extends Component {
  state={}
  openAddPostForm = () => {
    this.setState(() => ({
      isOpen: true,
    }));
  }

  closeAddPostForm = () => {
    this.setState(() => ({
      isOpen: false,
    }));
  }

  handleChange = memoize(editor => ({ target }) => {
    this.setState(() => ({
      [editor]: target.getContent(),
    }));
  })

  handleSubmit = () => {
    const { body, title } = this.state;
    if (!body || !title) {
      alert('fill all inputs pls'); //eslint-disable-line
    } else {
      this.props.onSubmit({
        body,
        title,
      });
    }
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="AddPost">
        {isOpen ?
          <div className="AddPost__form">
            <p>Title</p>
            <div className="AddPost__title">
              <Editor
                apiKey="b1mrkq3tb0690q1uqdwvimwhppdfqc0jq7r905tm2zigbnbw"
                cloudChannel="dev"
                onChange={this.handleChange('title')}
                init={{
                  toolbar: 'fontsizeselect',
                  fontsize_formats: fontSizesFromTo(8, 24),
                  min_height: 50,
                  height: 50,
                }}
              />
            </div>
            <p>Body</p>
            <Editor
              apiKey="b1mrkq3tb0690q1uqdwvimwhppdfqc0jq7r905tm2zigbnbw"
              cloudChannel="dev"
              onChange={this.handleChange('body')}
              init={{
                toolbar: 'fontsizeselect',
                fontsize_formats: fontSizesFromTo(8, 24),
              }}
            />
            <div className="AddPost__buttons">
              <Button onClick={this.handleSubmit} className="AddPost__post">Add</Button>
              <Button onClick={this.closeAddPostForm} className="AddPost__cancel">Cancel</Button>
            </div>
          </div>
        :
          <Button onClick={this.openAddPostForm} className="AddPost__open-form">AddPost</Button>
        }
      </div>
    );
  }
}
