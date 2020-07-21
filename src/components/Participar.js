import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'

import PostData from '../assets/json/conteudo.json'

import './Participar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Participar extends Component {
    render() {
        return (
            <div>
{PostData.map((item, i) => {
          return <div>

     <Jumbotron className="Participar-fundo">
     <a name="participar" className="participar-link"/>               
    <Container>
        <h1 style={{ textTransform:'uppercase', paddingTop:'50px', paddingBottom:'70px', color:'white', fontFamily:'Kabrio Soft' }}>{item.participar.titulo}</h1>
        <Row>
            <Col md>
        <h2 style={{ fontSize:'60px', fontFamily:'Kabrio Soft', color:'red' }}>{item.participar.rows[0].number}</h2>
        <p>{item.participar.rows[0].text}</p>
            </Col>

            <Col md>
            <h2 style={{ fontSize:'60px', fontFamily:'Kabrio Soft', color:'red' }}>{item.participar.rows[1].number}</h2>
        <p>{item.participar.rows[1].text}</p>
            </Col>

            <Col md>
            <h2 style={{ fontSize:'60px', fontFamily:'Kabrio Soft', color:'red' }}>{item.participar.rows[2].number}</h2>
        <p>{item.participar.rows[2].text}</p>
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
