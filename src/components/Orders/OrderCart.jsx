import logo from '../../images/giphy.gif'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const OrderCart = () => {
    return (
        <div>
            <div className="flex w-[571px] h-[107px] border-2 rounded">
                <div className='flex h-[100%] items-center pl-[8px]'>
                    <img src={logo} alt="No Image" className="w-[112px] h-[91px] rounded"/>
                </div>
                <div className="flex justify-between items-center w-[100%] px-5">
                    <div>
                        <h6 className="text-xl">Hello</h6>
                        <p className="text-sm">Price: <span className="text-orange-400">$</span></p>
                        <p className="text-sm">Shipping Charge: <span className="text-orange-400">$</span></p>
                    </div>
                    <div className="border-2 rounded-full w-10 h-10 flex justify-center items-center bg-amber-100 p-6">
                        <button className="text-red-400 text-3xl"><FontAwesomeIcon icon={faTrashCan}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCart;