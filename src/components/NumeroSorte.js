import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'

import PostData from '../assets/json/conteudo.json'
import './NumeroSorte.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)




export default class NumeroSorte extends Component {
    render() {
        return (
            <div>
                {PostData.map((item, i) => {
          return <div>             
    <Container style={{  marginTop:'100px' }}>
        <a name="numeroSorte" className="numeroSorte-link"/>
        <FontAwesomeIcon icon="grin-alt" size="4x" color="yellow" />
        <h1 style={{ color: 'white', textTransform: 'uppercase', fontFamily:'Kabrio Soft', marginTop:'30px' }}>{item.numeroSorte.titulo}</h1>
        <p style={{ color: 'white', textTransform: 'uppercase' }}>{item.numeroSorte.text}</p>
        <button className="NumeroSorte-bt" href={item.numeroSorte.link}>{item.numeroSorte.buttom}</button>
    </Container>    
            </div>
        })}                
            </div>
        )
    }
}
