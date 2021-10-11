import {FaCartArrowDown} from 'react-icons/fa';
import '../Navbarstyles/cart.css'

const shoppingCart = () => {
    return ( 
        <div className="user">
            <FaCartArrowDown/>
            <span>1</span>
        </div>
     );
}
 
export default shoppingCart;