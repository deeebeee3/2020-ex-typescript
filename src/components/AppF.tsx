import React from 'react';

interface AppProps {
  color?: string; //optional prop
}

interface AppState {
  counter: number;
}

const AppF = (props: AppProps): JSX.Element => {
    return (
        <div>
            {props.color}
        </div>
    )
};

export default AppF;
