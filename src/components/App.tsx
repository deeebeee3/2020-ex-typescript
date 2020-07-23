import React from "react";
import { connect } from "react-redux";
import { Posts, fetchPostsAsync } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  posts: Posts[];
  fetchPostsAsync(): any;
}

class _App extends React.Component<AppProps> {
  render() {
    return <div>Hello</div>;
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
