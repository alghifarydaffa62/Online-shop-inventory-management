import React from "react"
import '../style/style.css'
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav>
            <h2>MyShop</h2>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Lazada">Lazada</Link></li>
                <li><Link to="/Tokopedia">Tokopedia</Link></li>
                <li><Link to="/Shopee">Shopee</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar