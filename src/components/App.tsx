import React from "react";
import { connect } from "react-redux";
import { Posts, fetchPostsAsync, deletePost } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  posts: Posts[];
  fetchPostsAsync: typeof fetchPostsAsync;
  deletePost: typeof deletePost;
}

class _App extends React.Component<AppProps> {
  componentDidMount(){
    // this.props.fetchPostsAsync();
  }

  onButtonClick = ():void => {
    this.props.fetchPostsAsync();
  }

  onPostClick = (id: number): void => {
    this.props.deletePost(id)
  }

  renderList(): JSX.Element[] {
    return this.props.posts.map((post: Posts) => {
      return (
          <div onClick={() => this.onPostClick(post.id)} key={post.id}>
            {post.title}
          </div>
        );
    });
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch Posts</button>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): { posts: Posts[] } => {
  return {
    posts: state.posts
  }
}

export const App = connect(
  mapStateToProps,
  {fetchPostsAsync, deletePost}
)(_App);
