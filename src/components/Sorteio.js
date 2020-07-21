import React, { Component } from 'react'
import { Container, Jumbotron, Table } from 'react-bootstrap'


import PostData from '../assets/json/conteudo.json' 
import './Sorteio.css'

export default class Sorteio extends Component {
    render() {
        return (
            <div>
                {PostData.map((item, i) => {
          return <div>
                   
    <Container style={{ margin:'70px 0' }}>
        <h1 className="Sorteio-Titulo">{item.sorteio.titulo}</h1>
        <h6 className="Sorteio-SubT"><span>{item.sorteio.data[0].dia}</span></h6>
        <Table hover>
      <thead>
        <tr>
          <th scope="row">1</th>
          <th>{item.sorteio.data[0].ganhadores[0].nome}</th>
          <th>{item.sorteio.data[0].ganhadores[0].premio}</th>
          <th>{item.sorteio.data[0].ganhadores[0].condor}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">2</th>
          <th>{item.sorteio.data[0].ganhadores[1].nome}</th>
          <th>{item.sorteio.data[0].ganhadores[1].premio}</th>
          <th>{item.sorteio.data[0].ganhadores[1].condor}</th>
        </tr>
        <tr>
          <th scope="row">3</th>
          <th>{item.sorteio.data[0].ganhadores[2].nome}</th>
          <th>{item.sorteio.data[0].ganhadores[2].premio}</th>
          <th>{item.sorteio.data[0].ganhadores[2].condor}</th>
        </tr>
      </tbody>
    </Table>


    <h1 className="Sorteio-Titulo">{item.sorteio.titulo}</h1>
        <h6 className="Sorteio-SubT"><span>{item.sorteio.data[1].dia}</span></h6>
        <Table hover>
      <thead>
        <tr>
          <th scope="row">1</th>
          <th>{item.sorteio.data[0].ganhadores[0].nome}</th>
          <th>{item.sorteio.data[0].ganhadores[0].premio}</th>
          <th>{item.sorteio.data[0].ganhadores[0].condor}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">2</th>
          <th>{item.sorteio.data[0].ganhadores[1].nome}</th>
          <th>{item.sorteio.data[0].ganhadores[1].premio}</th>
          <th>{item.sorteio.data[0].ganhadores[1].condor}</th>
        </tr>
        <tr>
          <th scope="row">3</th>
          <th>{item.sorteio.data[0].ganhadores[2].nome}</th>
          <th>{item.sorteio.data[0].ganhadores[2].premio}</th>
          <th>{item.sorteio.data[0].ganhadores[2].condor}</th>
        </tr>
      </tbody>
    </Table>
        </Container>
            
            </div>
        })} 
            </div>
        )
    }
}
