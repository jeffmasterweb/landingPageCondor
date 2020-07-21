import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PostData from '../assets/json/conteudo.json'

import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                {PostData.map((item, i) => {
          return <div>
          <Row className="Header-row">
            <Col md="8">
                <img src="left-header.png" alt="" width="100%"/>
            </Col>
            <Col xs lg="4">
                <h1 className="Header-h1">{item.header.text1}</h1>
                <h2 className="Header-h2"><span className="Header-splash">{item.header.text2}</span></h2>
                <h6 className="Header-h6">{item.header.text3}</h6>
                <img src="sub.png" alt="" width="100%"/>
            </Col>
            </Row>
          </div>
        })}
            </div>
        )
    }
}
