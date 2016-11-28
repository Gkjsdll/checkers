const initBoard = () =>{
  let currentRedId = 0;
  let currentBlackId = -1;
  return _.range(8).map((row) => {return _.range(8).map((col) => {
        if (row <= 2) {
          if (!((row + col + 1) % 2)) {
            currentBlackId += 2;
            return currentBlackId;
          }
        } else if (row >= 5) {
          if (!((row + col + 1) % 2)) {
            currentRedId += 2;
            return currentRedId;
          }
        }
        return null;
      })})
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: initBoard()
    }
  }

  render() {
    return (<div>
        <h1>Welcome to Checkers!</h1>
      </div>);
  };
  
}

const GameBoard = () => {

}


ReactDOM.render(
  <App />,
  document.getElementById('app')
  );
