import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

import PostData from '../assets/json/conteudo.json'

import './Aceleradores.css'

export default class Aceleradores extends Component {
    render() {
        return (
            <div>
                

                {PostData.map((item, i) => {
          return <div>


    <Jumbotron className="Aceleradores-fundo">
    <Container>
<Row>
            <Col md>
                <img src="acelerador-left.png" alt="" width="100%" 
                style={{  border: "solid 3px white", borderRadius: "10px", margin: "10px" }}/>
            </Col>
            
            <Col md>
                <img src="acelerador-right.png" alt="" width="100%"
                style={{  border: "solid 3px white", borderRadius: "10px", margin: "10px" }}/>
            </Col>
</Row>
</Container>
</Jumbotron>

          </div>
        })}

            </div>
        )
    }
}
