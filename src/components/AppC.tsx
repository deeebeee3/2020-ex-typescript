import React from 'react';

interface AppProps {
  color?: string; //optional prop
}

interface AppState {
  counter: number;
}

class AppC extends React.Component<AppProps, AppState> {
  //property method of initializing state object - override state property
  //state = { counter : 0};

  //constructor method of initializing state object - not overriding state property
  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        {this.props.color}
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

export default AppC;
