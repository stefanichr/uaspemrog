import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
import {link} from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            idproduk: '',
            namaproduk: '',
            deskripsi: '',
            stok: '',
            response:'',
            display:'none'
                 
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addproduk= () => {
        axios.post(api+ '/tambahproduk', {
            idproduk: this.state.idproduk,
            namaproduk: this.state.namaproduk,
            deskripsi: this.state.deskripsi,
            stok: this.state.stok
        }).then(json => {
            if(json.data.status === 200) {
            this.setState({
                response: json.data.values,
                display: 'block'
            })}
            else {
            this.setState({
                response: json.data.values,
                display: 'block'
             })
            }
    })
}


    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>Nama produk</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="namaproduk"  value={this.state.namaproduk} onChange={this.handleChange} placeholder="Masukan Nama produk"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Deskripsi</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="deskripsi" value={this.state.deskripsi} onChange={this.handleChange} placeholder="Masukan Deskripsi"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>stok</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="stok" value={this.state.stok} onChange={this.handleChange} placeholder="Masukan Stok"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Button type="button" onClick={this.Addproduk}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}

export default TambahComp;
