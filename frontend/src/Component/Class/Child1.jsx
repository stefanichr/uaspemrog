import React, { Component } from 'react'

class Child1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    minBeli = 1;
    render() {
        return (
            <div>
                <h3>Child1</h3>
                <p>stock Produk : {this.props.stock}</p>
                <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button>
            </div>
        )
    }
}

export default Child1
