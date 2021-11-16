
import {FaCartArrowDown} from 'react-icons/fa';
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

import '../Navbarstyles/cart.css';
import { Link } from 'react-router-dom';


const ShoppingCart = () => {
   const [productData, ] = useContext(ProductContext);
   
    return ( 
        <div className="user">
            <Link to="/cart">
            <FaCartArrowDown/>
            <span>{productData.length}</span>
            </Link>
        </div>
     );
}
 
export default ShoppingCart;