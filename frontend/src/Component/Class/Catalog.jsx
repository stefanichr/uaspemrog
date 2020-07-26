import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Table, Button, Container,NavLink, Alert, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3001'

class Catalog extends PureComponent {
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

    render() {

    const products = this.state.produk;
		let rowContents = [];
		const contents = products.reduce((acc, p, i) => {
            console.log(p.image)
			rowContents.push(<Col key={i}>
                             <Card >
                                 <CardImg top width="100%" src={p.image}/>
                                 <CardBody>
                                 <CardTitle>{p.namaproduk}</CardTitle>
                                 <CardText>{p.deskripsi}</CardText>
                                 <CardText>Stok: {p.stok}</CardText>
                                </CardBody>
                             </Card>
                         </Col>);
			if (i % 4 === 3) {
				acc.push(<Row>{rowContents}</Row>);
				rowContents = [];
			}
			return acc;
		},[])
       contents.push(<Row>{rowContents}</Row>);

		return (
			<Container fluid>
			    {contents}
			</Container>
		)
    }
}

export default Catalog
