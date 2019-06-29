<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
=======
import React, { Component } from 'react';
>>>>>>> 3d80947c1ecb732890dcd9da7be540681cecfebc
import './App.css';
import Cards from './Cards.js';
import Header from './Header.js';
const API_URL = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {

  // estado inicial
  state = {
    posts: [],
  }

  componentDidMount() {
    fetch(API_URL)
      .then(result => { return result.json() })
      .then(data => {
        this.setState({
          posts: data
        })
      })
  }

  render() {
    console.log(this.state.posts);
    return [
      <div>
        <Header />
      </div>,
    
      <div>
        <Cards posts={this.state.posts} />
      </div>
    ]
  }

<<<<<<< HEAD
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
=======
>>>>>>> 3d80947c1ecb732890dcd9da7be540681cecfebc
}

export default Menu;
