import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

const Menu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const menu = document.querySelector(".menu");
    if (open) {
      menu.classList.add('show');
    } else {
      menu.classList.remove('show');
    }
  }, [open])

  return (
    <div>
      <button onClick={toggleMenu} className={`botao`}/>
      <div className={`menu`}>
      </div>
    </div>
  )
}

export default Menu;
//export default App;
