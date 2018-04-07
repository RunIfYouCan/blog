import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import ListPost from './list-post';
import AddPost from './add-post';
import { SidePanel, Panel } from '../../components';
import { getParameterByName } from '../../utils/url';
import { loadArticles, addPost } from '../../redux/articles/actions';
import './style.scss';

class BlogList extends Component {
  componentDidMount() {
    const { location } = this.props;
    const page = getParameterByName(location.search, 'page');
    this.props.loadArticles({
      page,
    });
  }

  componentWillReceiveProps(newProps) {
    const { location } = newProps;
    const { location: oldLocation } = this.props;

    if (location.search !== oldLocation.search) {
      this.props.loadArticles({
        page: getParameterByName(location.search, 'page'),
      });
    }
  }

  addPost = (post) => {
    this.props.addPost(post);
  }

  pageChange = ({ selected }) => {
    const { history, match } = this.props;
    history.push(`${match.path}?page=${selected + 1}`);
  }

  render() {
    const { meta = {}, posts } = this.props;
    return (
      <div className="BlogList">
        <Panel />
        <div className="container BlogList__content">
          <div className="row">
            <div className="col-md-10">
              {posts &&
              <div className="BlogList__posts" >
                {posts.map(post => <ListPost key={post._id} {...post} />)}
              </div>
              }
              <div className="BlogList__AddPost">
                <AddPost onSubmit={this.addPost} />
              </div>
              <ReactPaginate
                previousLabel={<i className="fa fa-angle-left" />}
                nextLabel={<i className="fa fa-angle-right" />}
                initialPage={meta.page}
                pageCount={meta.pagesCount}
                pageRangeDisplayed={4}
                marginPagesDisplayed={1}
                disableInitialCallback
                onPageChange={this.pageChange}
                containerClassName="Pagination"
                pageClassName="Pagination__item"
                pageLinkClassName="Pagination__link"
                previousLinkClassName="Pagination__prev-link"
                nextLinkClassName="Pagination__next-link"
                activeClassName="Pagination__item--active"
                breakClassName="Pagination__break"
                breakLabel="....."
              />
            </div>
            <SidePanel />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ articles }) => ({
  posts: articles.list,
  meta: articles.meta,
});

export default connect(mapStateToProps, { loadArticles, addPost })(BlogList);
