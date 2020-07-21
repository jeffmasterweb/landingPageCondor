import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PostData from '../assets/json/conteudo.json'

export default class Premios extends Component {
    render() {
        return (
            <div>

{PostData.map((item, i) => {
          return <div>

<Row>
            <Col md="4">
                <img src="premios-left.png" alt="" width="100%"/>
            </Col>
            <Col xs lg="4">
                <img src="premios-midle.png" alt="" width="100%"/>
            </Col>
            <Col md="4">
                <img src="premios-right.png" alt="" width="100%"/>
            </Col>
</Row>

          </div>
        })}
                
            </div>
        )
    }
}
