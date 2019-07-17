import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Passing a property from parent Board component to a child Square component:
 * - render() method returns a description of what to see on the screen; it returns a React element
 * - square's render method shows the value {this.props.value} passed from Board component
 *
 * Function Components
 * In React, function components are a simple way to write components that only contains a "render" method and
 * don't have their own state. Instead of defining a class, we can write a function that takes "props" as input
 * and return what should be rendered.
 */
function Square(props) {
  return (
    <button className="square" onClick={props.onclick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  /* We want to store the games's state in the parent Board component. The Board component can tell each Square what to
  * display by passing a prop.
  * The parent component can pass the state back down to the children by using "props".
  * Adding the constructor to the Board and setting the Board's initial state to contain an array of 9 nulls
  * corresponding to the 9 squares:
  */
  constructor(props) {
    super(props);
    /* When we fill the board in later, the "this.state.squares" array will look something like this:
    * [   '0', null, 'X',
    *     'X', 'X',  'X',
    *     '0', null, null  ]
    */
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    /* Why immutability is important.
     * We use ".slice()" method to create a copy of the squares array to modify instead of modifying the existing array.
     * There are two approaches to change data:
     *  - mutate the data by directly changing the data's values
     *  - replace the date with a new copy which has the desired changes
     */
    const squares = this.state.squares.slice(); // we call ".slice()" to create a copy of the "squares" array
    squares[i] = 'X';
    this.setState({squares: squares})
  }

  renderSquare(i) {
    /* Using the prop passing mechanism, modifying the Board to instruct each individual Square about its current
     * value ('X', 'O', or null)
     *
     * We will pass down a function from the Board to the Square, and we will have Square call that function when a
     * square is clicked.
     * */
    return <
      Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
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