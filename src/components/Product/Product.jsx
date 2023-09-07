import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, addToCart, removeFromCart }) => {

    const { img, name, price, shipping, seller, ratings, id } = product
    return (
        <div className='product flex flex-col items-center'>
            <img className="mt-[6px]" src={img} alt="Missing_Image" />
            <div className='product-details w-[100%]'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : ${price}</p>
                <p><small>Shipping Charge : ${shipping}</small></p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings}</small></p>
            </div>
            <div className='btn-div'>
                <button onClick={() => { addToCart(product) }}>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart} className='icon' />
                </button>
                {/*<button onClick={() => { removeFromCart(product) }}>*/}
                {/*    Remove Cart*/}
                {/*    <FontAwesomeIcon icon={faTrashCan} className='icon' />*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export default Product;