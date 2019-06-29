import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

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
