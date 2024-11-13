import React from 'react'
import { product } from '../utils/data'
import NewProduct from './Newproduct'
import ProductList from './productList'
import Navbar from './Navbar'
import '../style/style.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: product()
        }
    }

    render() {
        return(
            <div className='Home'>
                <Navbar/>
                <NewProduct/>
                <ProductList product={this.state.product}/>
            </div>
        )
    }
}

export default HomePage