import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
export default class Forms extends Component {
    state = {
        n: '',
        email: '',
        telefono: '',
        msg: '',
        sent: true
    }
    changeValues = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    mailAdmin = async (e) => {
        e.preventDefault();
        const val = await axios.post('http://localhost:4000/mail', this.state);
        if(val.data.msg=='Perfect'){
            alert('Inscrito satisfactoriamente');
        }else{
            alert('Fallo');
        }


    }
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre *</Form.Label>
                    <Form.Control type="name" placeholder="Ingresa tu nombre" name='n' onChange={this.changeValues} />
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" name='email' onChange={this.changeValues} />

                    <Form.Label>Telefono *</Form.Label>
                    <Form.Control type="number" placeholder="Ingresa tu numero telefonico" name='telefono' onChange={this.changeValues} />

                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Escribe tu mensaje aquí' name='msg' onChange={this.changeValues} />
                    <div className='d-flex justify-content-end'>
                        <Button variant="dark" type="submit" onClick={this.mailAdmin}>
                            Enviar
                        </Button>
                    </div>


                </Form.Group>
                
            </Form>
        )
    }
}
