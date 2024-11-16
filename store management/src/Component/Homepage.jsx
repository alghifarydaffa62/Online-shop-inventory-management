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

        this.onDeletehandler = this.onDeletehandler.bind(this)
        this.AddProducthandler = this.AddProducthandler.bind(this)
    }

    onDeletehandler(id) {
        const product = this.state.product.filter(produks => produks.id !== id)
        this.setState({product})
    }

    AddProducthandler({name, image, sku, price, quantity, marketplace}) {
        const newProduct = {
            id: +new Date(),
            name,
            image,
            sku,
            price,
            quantity,
            marketplace,
        };
    
        this.setState((prevState) => {
            const updatedProducts = [...prevState.product, newProduct];
    
            // Simpan ke Local Storage
            localStorage.setItem("products", JSON.stringify(updatedProducts));
    
            return { product: updatedProducts };
        })
    }
    
    componentDidMount() {
        const savedProducts = JSON.parse(localStorage.getItem("products"));
        if (savedProducts) {
            this.setState({ product: savedProducts });
        }
    }

    render() {
        return(
            <div className='Home'>
                <Navbar/>
                <NewProduct Addproduct = {this.AddProducthandler}/>
                <ProductList product={this.state.product} onDelete={this.onDeletehandler}/>
            </div>
        )
    }
}

export default HomePage