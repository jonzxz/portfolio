import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main.jsx'

function App() {

  return (
    <div>
      <Main/>
    </div>
  )
}

export default App;


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<App/>)