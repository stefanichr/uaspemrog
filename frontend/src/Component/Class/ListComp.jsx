import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Table, Button, Container,NavLink, Alert} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            produk: [],
            response:'',
            display:'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampil').then(res=>{
          this.setState({
              produk: res.data.values
          })  
        })
    }

    Deleteproduk = (idproduk) => {
        const {produk} = this.state
        const data = qs.stringify({
            idproduk: idproduk
        })

        axios.delete(api+'/hapus',
        {
            data: data,
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }).then(json=>{
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    produk: produk.filter(produk => produk.idproduk),
                    display: 'block'
                })
                // this.props.history.push('/produk')
            }else{
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
                // this.props.history.push('/produk')
        })
        }
    render() {
        return (
            <Container>
                <h2>Data produk</h2>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <NavLink href="/produk/tambah"><Button color="success">Tambah Data</Button></NavLink>
                <hr/>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Nama Produk</th>
                            <th>Deskripsi</th>
                            <th>Stok</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.produk.map(produk =>
                            <tr key ={produk.idproduk}>
                              <td>{produk.namaproduk}</td>  
                              <td>{produk.deskripsi}</td>
                              <td>{produk.stok} </td>
                              <td>
                                  <Link to= {
                                  {
                                    pathname: `/produk/edit`,
                                    state: {
                                        idproduk: produk.idproduk,
                                        namaproduk: produk.namaproduk,
                                        deskripsi: produk.deskripsi,
                                        stok: produk.stok
                                    }
                                  }
                                }>
                                    <Button>Edit</Button>
                                
                                </Link>
                                <span></span>
                                    <Button onClick={()=>this.Deleteproduk(produk.idproduk)}color="danger">Hapus</Button>
                              </td>
                            </tr>
                            )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default ListComp
