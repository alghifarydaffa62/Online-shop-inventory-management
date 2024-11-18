import React from "react"
import '../style/style.css'
import Navbar from "./Navbar"
import ProductList from "./productList"
import Viewpopup from "./Viewpopup"
import EditPopup from "./Editpopup"

class TokopediaPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: JSON.parse(localStorage.getItem("products"))?.filter((produk) => produk.marketplace === "Tokopedia") || [],
            viewProduct: null
        }

        this.onDeletehandler = this.onDeletehandler.bind(this)
        this.ViewHandler = this.ViewHandler.bind(this)
        this.EditHandler = this.EditHandler.bind(this)
        this.AddProducthandler = this.AddProducthandler.bind(this)
        this.saveEditHandler = this.saveEditHandler.bind(this)
    }

    componentDidMount() {
        const savedProducts = JSON.parse(localStorage.getItem("products"));
        if (savedProducts) {
            const tokopediaProducts = savedProducts.filter(prod => prod.marketplace === "Tokopedia");
            this.setState({ product: tokopediaProducts });
        }
    }

    onDeletehandler(id) {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus produk ini?")
        if (!confirmDelete) {
            return
        }

        const updatedProducts = this.state.product.filter(produks => produks.id !== id);
        const allProducts = JSON.parse(localStorage.getItem("products")) || [];
        const remainingProducts = allProducts.filter(prod => prod.id !== id);
        localStorage.setItem("products", JSON.stringify(remainingProducts));
        this.setState({ product: updatedProducts });
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
        event.preventDefault();
        this.setState({ viewProduct: null, editProduct: null }, () => {
            document.body.classList.remove('no-scroll');
        });
    }

    AddProducthandler({ name, image, sku, price, quantity, marketplace }) {
        const newProduct = { id: +new Date(), name, image, sku, price, quantity, marketplace };

        this.setState(prevState => {
            const allProducts = JSON.parse(localStorage.getItem("products")) || [];
            const updatedProducts = [...allProducts, newProduct];

            localStorage.setItem('products', JSON.stringify(updatedProducts));

            const tokopediaProducts = updatedProducts.filter(prod => prod.marketplace === "Tokopedia");
            return { product: tokopediaProducts };
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
        const allProducts = JSON.parse(localStorage.getItem("products")) || [];
        const updatedProducts = allProducts.map(prod =>
            prod.id === updatedProduct.id ? updatedProduct : prod
        )

        localStorage.setItem('products', JSON.stringify(updatedProducts))

        const tokopediaProducts = updatedProducts.filter(prod => prod.marketplace === "Tokopedia")
        this.setState({ product: tokopediaProducts, editProduct: null }, () => {
            document.body.classList.remove('no-scroll')
        });
    }

    render() {
        return(
            <div className="tokopedia">
                <Navbar/>
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
        )
    }
}

export default TokopediaPage