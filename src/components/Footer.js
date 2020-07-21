import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Jumbotron, Row, Col } from 'react-bootstrap'

import PostData from '../assets/json/conteudo.json' 
import './Footer.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


export default class Footer extends Component {
    render() {
        return (
            <div>
               {PostData.map((item, i) => {
                return <div>
                
                <Container style={{ margin: '70px 0 20px 0', border:'3px solid white', padding:'60px', 
                borderRadius:'8px', color:'white' }}>
                    <FontAwesomeIcon icon="thumbs-up" size="3x"/>
                <p style={{ marginTop: '50px' }}>{item.footer.legal}</p>
                <p>{item.footer.legal2}</p>
                </Container>
                    <div style={{ display:'flex', justifyContent: 'center', margin:'70px 0 0 0', padding:'0', position:'relative' }}>
                        <div style={{ width:'30px', margin:'0 0 0 30px' }}>
                            <a href={item.footer.midia[0].fb}><img src="facebook-square-brands.svg" alt="" /></a>
                        </div>
                        
                        <div style={{ width:'30px', margin:'0 0 0 30px' }}>    
                            <a href={item.footer.midia[1].ig}><img src="instagram-square-brands.svg" alt="" /></a>
                        </div>

                        <div style={{ width:'30px', margin:'0 0 0 30px' }}>    
                            <a href={item.footer.midia[2].tw}><img src="twitter-square-brands.svg" alt="" /></a>
                        </div>

                        <div style={{ width:'30px', margin:'0 0 0 30px' }}>   
                            <a href={item.footer.midia[3].yt}><img src="youtube-square-brands.svg" alt="" /></a>
                        </div>  

                    </div>
                        <p style={{ margin:'20px 0 70px 0', color:'white' }}><strong>{item.footer.title}</strong></p>
       

      
            </div>
        })}  
            </div>
        )
    }
}
