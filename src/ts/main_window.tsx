import * as React from 'react';


export function MainWindow (props: {}): JSX.Element {
  return (
    <>
      <h1>Hello, world!</h1>
      <ClassComponent />
      <FunctionComponent />
    </>
  );
}


class ClassComponent extends React.Component<{}, { sum: number; }> {

  constructor(props: {}) {
    super(props);

    this.state = {
      sum: 0,
    };
  }

  render (): JSX.Element {
    return (
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
          this.setState({
            sum: this.state.sum + 1,
          });
        }}
      >
        Class {this.state.sum}
      </button>
    );
  }

}


function FunctionComponent (props: {}): JSX.Element {
  const [sum, setSum] = React.useState(0);
  return (
    <button
      onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
        setSum(sum + 1);
      }}
    >
      Function {sum}
    </button>
  );
}
