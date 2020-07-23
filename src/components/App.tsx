import React from "react";
import { connect } from "react-redux";
import { Posts, fetchPostsAsync } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  posts: Posts[];
  fetchPostsAsync(): any;
}

class _App extends React.Component<AppProps> {
  componentDidMount(){
    // this.props.fetchPostsAsync();
  }

  onButtonClick = ():void => {
    this.props.fetchPostsAsync();
  }

  renderList(): JSX.Element[] {
    return this.props.posts.map((post: Posts) => {
      return <div key={post.id}>{post.title}</div>
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
  {fetchPostsAsync}
)(_App);
