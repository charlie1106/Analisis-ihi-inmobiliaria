import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import img from './g.png';
import Form from './Forms';
export default class Contact extends Component {
    render() {
        return (
            <>
                <Container>
                    <style>{'body {background-color: #fbf9eb;}'}</style>
                    <Row className="justify-content-md-center">

                        <Col>
                            <div className="text-center">
                                <h1 className='font-monospace'>
                                    Contáctanos
                                </h1>
                            </div>
                            <Form/>
                            {/* sdfsfd */}
                        </Col>
                        <Col>
                            <img src={img} className="img-fluid" alt='girl  smiling' />
                        </Col>
                    </Row>
                    <br />
                    <div className="row p-5 bg-dark text-white">
                        <div className="container">
                            <div className="row">
                                <h2 className='text-center font-monospace'>
                                    Contáctanos
                                </h2>
                                <p className='text-center font-monospace'>Inmobiliaria</p>
                                <p className='text-center font-monospace'>Bogotá</p>
                                <p className='text-center font-monospace'>Colombia</p>
                                <p className='text-center font-monospace'>Tel: 321 215 1623</p>
                                <p className='text-center font-monospace'>info@inmobiliaria.com</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </>

        )
    }
}

