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
        super(props)

        this.state = {
            product: product(),
            viewProduct: null,
            editProduct: null,
        };

        this.onDeletehandler = this.onDeletehandler.bind(this)
        this.AddProducthandler = this.AddProducthandler.bind(this)
        this.ViewHandler = this.ViewHandler.bind(this)
        this.EditHandler = this.EditHandler.bind(this)
        this.saveEditHandler = this.saveEditHandler.bind(this)
    }

    onDeletehandler(id) {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus produk ini?")
        if (!confirmDelete) {
            return
        }

        const updatedProducts = this.state.product.filter(produks => produks.id !== id)
    
        const allProducts = JSON.parse(localStorage.getItem("products")) || []
        const remainingProducts = allProducts.filter(prod => prod.id !== id)
        localStorage.setItem("products", JSON.stringify(remainingProducts))
        this.setState({ product: updatedProducts })
    }

    AddProducthandler({ name, image, sku, price, quantity, marketplace }) {
        const newProduct = {
            id: +new Date(),
            name,
            image,
            sku,
            price,
            quantity,
            marketplace,
        };

        this.setState(prevState => {
            const updatedProducts = [...prevState.product, newProduct];
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            return { product: updatedProducts };
        });
    }

    componentDidMount() {
        const savedProducts = JSON.parse(localStorage.getItem('products'));
        if (savedProducts) {
            this.setState({ product: savedProducts });
        }
    }

    ViewHandler(id) {
        const selectedproduct = this.state.product.find(item => item.id === id);
        if (selectedproduct) {
            this.setState({ viewProduct: selectedproduct }, () => {
                document.body.classList.add('no-scroll');
            });
        }
    }

    closePopUp = (event) => {
        event.preventDefault();
        this.setState({ viewProduct: null, editProduct: null }, () => {
            document.body.classList.remove('no-scroll');
        });
    }

    EditHandler(id) {
        const selectedProduct = this.state.product.find(item => item.id === id);
        if (selectedProduct) {
            this.setState({ editProduct: selectedProduct }, () => {
                document.body.classList.add('no-scroll');
            });
        }
    }

    saveEditHandler(updatedProduct) {
        const updatedProducts = this.state.product.map(prod =>
            prod.id === updatedProduct.id ? updatedProduct : prod
        );
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        this.setState({ product: updatedProducts, editProduct: null }, () => {
            document.body.classList.remove('no-scroll');
        });
    }

    render() {
        return (
            <div className='Home'>
                <Navbar />
                <NewProduct Addproduct={this.AddProducthandler} />
                <Viewpopup product={this.state.viewProduct} onClose={this.closePopUp} />
                <EditPopup
                    product={this.state.editProduct}
                    onSave={this.saveEditHandler}
                    onClose={this.closePopUp}
                />
                <ProductList
                    product={this.state.product}
                    onDelete={this.onDeletehandler}
                    onView={this.ViewHandler}
                    onEdit={this.EditHandler}
                />
            </div>
        );
    }
}

export default HomePage