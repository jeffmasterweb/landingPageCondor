import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Menu.css'

import PostData from '../assets/json/conteudo.json'
import Header from './Header'

class Menu extends Component {
    render() {
        return (
            <div>
        {PostData.map((item, i) => {
          return <div>    
          <Navbar className="App-nav" expand="lg">
  <Navbar.Brand href="#home" className="App-logo">
      <img src="logo.png" alt=""/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
      <Nav.Link href={item.menu[0].link}>{item.menu[0].name}</Nav.Link> 
      <Nav.Link href={item.menu[1].link}>{item.menu[1].name}</Nav.Link>
      <Nav.Link href={item.menu[2].link}>{item.menu[2].name}</Nav.Link>
      <Nav.Link href={item.menu[3].link}>{item.menu[3].name}</Nav.Link>
      <Nav.Link href={item.menu[4].link}>{item.menu[4].name}</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    <Header/>
</Navbar>
          </div>
        })}
    </div>
        )
    }
}

export default Menu
