import product1 from '../image/product1.jpeg'
import product2 from '../image/product2.png'
import product3 from '../image/product3..jpeg'
import product4 from '../image/product4.jpeg'
import product5 from '../image/product5.jpeg'
import product6 from '../image/product6.jpeg'
import product7 from '../image/product7.jpeg'
import product8 from '../image/product8.jpeg'

const getId = (key) => {
    let id = localStorage.getItem(key);
    if (!id) {
        id = new Date().getTime().toString();
        localStorage.setItem(key, id);
    }
    return id;
}

const product = () =>  ([
    {
        id: getId("produk1"),
        name: "Casing luffy gear 5 samsung black/grey",
        image: product1,
        sku: "Samsung A12",
        createdAt: "10-02-2022",
        price: 20000,
        quantity: 12,
        marketplace: "Lazada"
    }, 
    {
        id: getId("produk2"),
        name: "Power bank black 5000mah",
        image: product2,
        sku: "Mycyonos",
        createdAt: "20-04-2022",
        price: 80000,
        quantity: 50,
        marketplace: "Lazada"
    }, 
    {
        id: getId("produk3"),
        name: "Celana olahraga fitness pria (Panjang/pendek)",
        image: product3,
        sku: "Nikees",
        createdAt: "02-11-2022",
        price: 17000,
        quantity: 112,
        marketplace: "Shopee"
    }, 
    {
        id: getId("produk4"),
        name: "Lehnova Thinkpad X1 Titanium Gen 10",
        image: product4,
        sku: "Lehnova",
        createdAt: "18-08-2023",
        price: 15250000,
        quantity: 50,
        marketplace: "Tokopedia"
    }, 
    {
        id: getId("produk5"),
        name: "Kemeja pria polos All color",
        image: product5,
        sku: "Polong",
        createdAt: "22-10-2021",
        price: 500000,
        quantity: 348,
        marketplace: "Shopee"
    }, 
    {
        id: getId("produk6"),
        name: "Palu thor original dari asgard",
        image: product6,
        sku: "Mjolnir",
        createdAt: "25-12-2020",
        price: 100000,
        quantity: 10,
        marketplace: "Tokopedia"
    }, 
    {
        id: getId("produk7"),
        name: "Dompet kulit pria anti-gores",
        image: product7,
        sku: "Kochi",
        createdAt: "19-11-2023",
        price: 17000,
        quantity: 30,
        marketplace: "Shopee"
    }, 
    {
        id: getId("produk8"),
        name: "Lehnova Gamer series ultra F1",
        image: product8,
        sku: "Lehnova",
        createdAt: "25-12-2020",
        price: 20000000,
        quantity: 174,
        marketplace: "Tokopedia"
    }, 

])

export { product }