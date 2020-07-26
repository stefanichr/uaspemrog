import React, { PureComponent } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class DaftarComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            namalengkap: '',
            username: '',
            email: '',
            password: '',
            nomerhp: '',
            response: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addmember = () => {
        console.log(api)
        axios.post(api + '/tambahmember', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            namalengkap: this.state.namalengkap,
            nomerhp: this.state.nomerhp
        }).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values
                })
            } else {
                this.setState({
                    response: json.data.values
                })
            }
        })
    }


    render() {
        return (
            <Container>
                <h4>REGISTRASI</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Username</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Masukan Username" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Email</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Masukan Email" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Password</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Masukan Password" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Nama Lengkap</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="namalengkap" value={this.state.namalengkap} onChange={this.handleChange} placeholder="Masukan Nama Lengkap" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>No HP</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nomerhp" value={this.state.nomerhp} onChange={this.handleChange} placeholder="Masukan Nomor Hp" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={this.Addmember}>DAFTAR</Button>

                                    <Button>
                                        <Link to="/" className="btn btn-primary text-left">Masuk</Link>
                                    </Button>
                                </Col>
                            </Row>
                        </FormGroup>

                    </Col>
                </Form>
            </Container>
        )
    }
}

export default DaftarComp