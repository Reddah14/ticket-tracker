import react from 'react';

import './App.scss';
import Board from './components/Board/Board';
import team from './team';

function App() {
  return (
    <div className="app">
      <div className="app-title">
        <h1>Ticket Tracker</h1>
      </div>
      <Board />
    </div>
  );
}

export default App;
