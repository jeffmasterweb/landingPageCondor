import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Jumbotron, Row, Col } from 'react-bootstrap'

import PostData from '../assets/json/conteudo.json'

import './ProdutosParticipantes.css'

export default class ProdutosParticipantes extends Component {
    render() {
        return (
            <div>
                {PostData.map((item, i) => {
          return <div>
                 
        <Container className="ProdutosP">
            <a name="produtosParticipantes" className="produtosParticipantes-link"/>
            <Row className="justify-content-center">
                <Col md="auto">
                <h1 style={{ color:'white', fontSize:'25px', textTransform:'uppercase', fontFamily:'Kabrio Soft' }}>{item.produtosParticipantes.titulo}</h1>
                <img src="produtos-mobile.png" alt="" width="100%" />
                </Col>
            </Row>
        </Container>

            </div>
        })} 
            </div>
        )
    }
}
