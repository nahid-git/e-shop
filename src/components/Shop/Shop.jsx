import { useEffect, useState} from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const saveCard = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct) {
                addedProduct.quantity = storedCart[id]
                saveCard.push(addedProduct)
            }
        }
        setCart(saveCard)
    }, [products])

    const HandleAddToCart = (product) => {
        let newCart
        const exists = cart.find(pd => pd.id === product.id)
        if (exists) {
            exists.quantity = exists.quantity + 1
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exists]
        } else {
            product.quantity = 1
            newCart = [...cart, product]
        }

        setCart(newCart)
        addToDb(product.id)
    }

    const removeFromCart = product => {
        let newCart = []
        const exists = cart.find(pd => pd.id === product.id)
        if(exists){
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining]
            setCart(newCart)
            removeFromDb(product.id)
        }
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {products.map(product => <Product
                    product={product}
                    key={product.id}
                    addToCart={HandleAddToCart}
                    removeFromCart={removeFromCart}
                ></Product>)}
            </div>

            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
