import React from 'react';
import ReactDOM from 'react-dom/client';
import  './index.css';
import Main from './Main.jsx'

function App() {

  return (
    <div>
      <Main/>
    </div>
  )
}

export default App;

// Nav




const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<App/>)

// const root = document.getElementById("root")
// ReactDOM.render(<App/>, root)