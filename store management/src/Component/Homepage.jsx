import React from 'react'
import { product } from '../utils/data'
import NewProduct from './Newproduct'
import ProductList from './productList'
import Navbar from './Navbar'
import Viewpopup from './Viewpopup'
import EditPopup from './Editpopup'
import '../style/style.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: product(),
            viewProduct: null,
            editProduct: null, // New state for edit product
        };

        this.onDeletehandler = this.onDeletehandler.bind(this);
        this.AddProducthandler = this.AddProducthandler.bind(this);
        this.ViewHandler = this.ViewHandler.bind(this);
        this.EditHandler = this.EditHandler.bind(this); // New handler
        this.saveEditHandler = this.saveEditHandler.bind(this); // New save handler
    }

    onDeletehandler(id) {
        const updatedProducts = this.state.product.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        this.setState({ product: updatedProducts });
    }

    AddProducthandler({name, image, sku, price, quantity, marketplace}) {
        const newProduct = {
            id: + new Date(),
            name,
            image,
            sku,
            price,
            quantity,
            marketplace,
        };
    
        this.setState((prevState) => {
            const updatedProducts = [...prevState.product, newProduct];
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

    ViewHandler(id) {
        const selectedproduct = this.state.product.find(item => item.id == id)

        if(selectedproduct) {
            this.setState({viewProduct: selectedproduct}, () => {
                document.body.classList.add("no-scroll")
            })
        }
    }

    closePopUp = (event) => {
        event.preventDefault()
        this.setState({viewProduct: null}, () => {
            document.body.classList.remove("no-scroll")
        })
    }

    EditHandler(id) {
        const selectedProduct = this.state.product.find(item => item.id === id);
        if (selectedProduct) {
            this.setState({ editProduct: selectedProduct }, () => {
                document.body.classList.add("no-scroll");
            });
        }
    }

    saveEditHandler(updatedProduct) {
        const updatedProducts = this.state.product.map(prod =>
            prod.id === updatedProducts.id ? updatedProducts : prod
        );
        localStorage.setItem('products', JSON.stringify)
    }
   

    render() {
        return(
            <div className='Home'>
                <Navbar/>
                <NewProduct Addproduct = {this.AddProducthandler}/>
                <Viewpopup product={this.state.viewProduct} onClose={this.closePopUp} />
                <EditPopup product={this.state.editProduct} onSave={this.saveEditHandler} onClose={this.closePopUp}/>
                <ProductList product={this.state.product} onDelete={this.onDeletehandler} onView={this.ViewHandler} onEdit={this.EditHandler}/>
            </div>
        )
    }
}

export default HomePage