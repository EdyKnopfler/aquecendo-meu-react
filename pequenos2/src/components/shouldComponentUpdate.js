// Se a única forma pela qual o componente muda é quando props.color ou
// state.count mudam, podemos facilitar para o React solicitando a mudança
// somente nesses casos.

import { Component, useState } from "react";

const COLORS = ['navy', '#C00', 'darkgreen'];

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  // Lifecycle hook: gancho de ciclo de vida
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        style={{color: COLORS[this.props.color]}}
        onClick={() => {
          this.setState(state => ({count: state.count + 1}));
          this.props.buttonClicked();
        }}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default function ShouldComponentUpdateSample() {
  const [currentColor, setCurrentColor] = useState(0);

  function handleClick() {
    setCurrentColor((currentColor + 1) % COLORS.length);
  }

  // A "prop" buttonClicked não é alterada em nenhum momento!
  return (
    <CounterButton 
      color={currentColor}
      buttonClicked={handleClick}
      />
  );
}