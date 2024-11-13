import React from 'react'
import { product } from '../utils/data'
import NewProduct from './Newproduct'
import ProductList from './productList'
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
                <nav>
                    <h2>MyShop</h2>

                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Lazada</a></li>
                        <li><a>Tokopedia</a></li>
                        <li><a>Shopee</a></li>
                        <li><a>Find Product</a></li>
                    </ul>
                </nav>
                <NewProduct/>
                <ProductList/>
            </div>
        )
    }
}

export default HomePage