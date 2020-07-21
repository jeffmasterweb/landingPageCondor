import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Jumbotron } from 'react-bootstrap'

import PostData from '../assets/json/conteudo.json'

import './Download.css'


export default class Download extends Component {
    render() {
        return (
            <div>
                {PostData.map((item, i) => {
          return <div>            
        <Container fluid style={{ margin: '100px 0px' }}>
        <h4 style={{ margin: '20px 0', color: 'white', textTransform: 'uppercase', fontFamily:'Kabrio Soft' }}>{item.download.titulo}</h4>
        <a href={item.download.linkA} style={{ margin: '0px 10px' }}><img src="play_store.png" alt=""/></a>
        <a href={item.download.linkI} style={{ margin: '0px 10px' }}><img src="app_store.png" alt="" /></a>    
        </Container>
            </div>
        })} 
            </div>
        )
    }
}
