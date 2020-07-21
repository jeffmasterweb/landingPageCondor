import React, { Component } from 'react'
import { Carousel, Container, Jumbotron } from 'react-bootstrap'

import PostData from '../assets/json/conteudo.json'
import './Gallery.css'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                {PostData.map((item, i) => {
          return <div>
              
          <Container>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={item.gallery[0].img} 
      alt="First slide"
      style={{ borderRadius:'10px' }}
    />
    <Carousel.Caption>
      <p>{item.gallery[0].alt}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={item.gallery[1].img} 
      alt="Second slide"
      style={{ borderRadius:'10px' }}
    />

    <Carousel.Caption>
      <p>{item.gallery[1].alt}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={item.gallery[2].img}
      alt="Third slide"
      style={{ borderRadius:'10px' }}
    />

    <Carousel.Caption>
      <p>{item.gallery[2].alt}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>

            </div>
        })}
            </div>
        )
    }
}
