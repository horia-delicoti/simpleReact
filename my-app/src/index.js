import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/** Passing a property from parent Board component to a child Square component:
 * - render() method returns a description of what to see on the screen; it returns a React element
 * - square's render method shows the value {this.props.value} passed from Board component
 *
 */
class Square extends React.Component {
  constructor(props) {
    super(props); // always call "super" when defining the constructor of a subclass
    this.state = {
      value: null,
    };
  }

  /* By calling "this.setState" from an "onClick" handler, we tell React to re-render that Square whenever its <button>
  * is clicked. After the update, the Square's "this.state.value" will be 'X', so we'll see the "x" on the game board.
  */
  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>; // passing property "value" from Board component to Square component
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
