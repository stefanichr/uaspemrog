import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Link} from 'react-router-dom'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'

const api = "http://localhost:3001"

class EditComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            idproduk: this.props.location.state.idproduk,
            namaproduk: this.props.location.state.namaproduk,
            deskripsi: this.props.location.state.deskripsi,
            stok: this.props.location.state.stok,
            response:'',
            display: 'none'
                 
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahproduk = () => {

        const data = qs.stringify({
            idproduk: this.state.idproduk,
            namaproduk: this.state.namaproduk,
            deskripsi: this.state.deskripsi,
            stok: this.state.stok
        });
        console.log(this.state)


        axios.put(api+ '/ubah', data)
        .then(json => {
            if(json === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else{
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
                <h4>Form Edit Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>Nama produk</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="namaproduk" value={this.state.namaproduk} onChange={this.handleChange} placeholder="Masukan Nama produk"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Deskripsi produk</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="deskripsi"  value={this.state.deskripsi} onChange={this.handleChange} placeholder="Masukan deskripsi produk"/>
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
                            <Button type="button" onClick={()=>this.ubahproduk(this.state.idproduk)}>Update </Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}

export default EditComp;
