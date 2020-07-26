import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Label} from 'reactstrap';
import CardComp from './CardComp';
function AboutComp() {
    return (
        <div>
          <Jumbotron style={{backgroundColor: '#FFA500',textAlign:'center'}}>
                <h1 className="display-3">PROFIL TAS-KU </h1>
                <hr className="my-2" />
                <p>est 2020</p>
            </Jumbotron> 
            <Container>
                <Row>
                    <Col>
                        <Label>
                        Tas.ku<br></br>
                        </Label>
                        <Label>
                        Tas.ku adalah salah toko online dan grosir tas yang berdiri sejak 2020. <br></br>
                        Tas.ku menjual tas eceran, grosir dan partai besar <br></br>
                        Produk Tas dari Tas.ku berupa : <br></br>
                        - Tas Wanita <br></br>
                        - Tas Pria <br></br>
                        - Tas Ransel<br></br>
                        - Tas Anak / Sekolah
                        </Label>
                    </Col>
                    <Col>
                        <Label style={{alignItems:'center'}}>
                        Cara Pendaftaran Reseller<br></br>
                        </Label>
                        <Label>
                        Untuk menjadi reseller caranya mudah, caranya : <br></br>
                        - Melakukan pembayaran biaya keanggotaan untuk masa aktif satu tahun. <br></br>
                        - Setelah itu mengisi form pendaftaran yang sudah disediakan. <br></br>
                        - Nama dan alamat sesuai KTP untuk memudahkan proses pengiriman. <br></br>
                        - Lampirkan bukti transfer pembayaran member <br></br>
                        - Pendaftaran yang masuk akan divalidasi oleh tim admin. <br></br>
                        - Lalu Anda sudah tergabung dalam member Jualan Yuk!
                        </Label>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutComp
