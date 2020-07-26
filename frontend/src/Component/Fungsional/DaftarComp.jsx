import React, { PureComponent } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class DaftarComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_admin: '',
            username: '',
            email: '',
            password: '',
            response: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addadmin = () => {
        axios.post(api + '/tambahadmin', {
            id_admin: this.state.id_admin,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
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
                        <Label>ID Admin</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="id_admin" value={this.state.id_admin} onChange={this.handleChange} placeholder="Masukan ID" />
                                </Col>
                            </Row>
                        </FormGroup>
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
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={this.Addadmin}>DAFTAR</Button>

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