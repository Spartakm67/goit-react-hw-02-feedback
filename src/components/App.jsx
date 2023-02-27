import { Component } from 'react';
import { Container } from './App.styled';
import { Foreva } from './Toggle.styled';

export const App = () => {
  return (
    <Container>
      TERRA FOOD   
      <Toggle ><Foreva>FOREVA</Foreva></Toggle >
    </Container >
  );
};

class Toggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <>
        <button onClick={this.show}>Show</button>
        <button onClick={this.hide}>Hide</button>
        {isOpen && children}
      </>
    );
  }
}

// style={ToggleStyle}