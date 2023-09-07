import OrderCart from "./OrderCart.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faWallet} from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-3 grid justify-center items-center">
                <OrderCart/>
            </div>
            <div className="col-span-2 flex justify-center items-center h-[100vh] sticky top-0">
                <div className="w-[451px] h-[630px] flex items-center justify-center bg-orange-200">
                    <div>
                        <div className="p-5 space-y-7 text-xl">
                            <h1 className="text-5xl">Order Summary</h1>
                            <p>Selected Item: $</p>
                            <p>Total Price: $</p>
                            <p>Total Shipping Charge $</p>
                            <p>Tax: $</p>
                            <p>Grand Total: $</p>
                        </div>
                        <div className="flex flex-col gap-y-5 mt-24">
                            <button className="w-[421px] h-[56px] bg-red-500 flex justify-between items-center px-5 text-white rounded">
                                Clear cart
                                <FontAwesomeIcon icon={faTrashCan}/>
                            </button>
                            <button className="w-[421px] h-[56px] bg-orange-500 flex justify-between items-center px-5 text-white rounded">
                                Proceed Checkout
                                <FontAwesomeIcon icon={faWallet}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;