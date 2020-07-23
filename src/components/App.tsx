import React from "react";
import { connect } from "react-redux";
import { Posts, fetchPostsAsync, deletePost } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  posts: Posts[];
  fetchPostsAsync: Function;
  deletePost: typeof deletePost;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {

  //Do this if not passing Appstate to Generic - overriding state
  //state = { fetching: false };

  //Passing AppState to Generic - not overriding state
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidMount(){
    // this.props.fetchPostsAsync();
  }

  //this lifecycle method is called with previous set of props from 
  //last time this component was rendered
  componentDidUpdate(prevProps: AppProps): void {
    //if prev props had no posts and currents props does have posts
    if (!prevProps.posts.length && this.props.posts.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = ():void => {
    this.props.fetchPostsAsync();
    this.setState({ fetching: true });
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
        {this.state.fetching ? 'LOADING' : null}
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
