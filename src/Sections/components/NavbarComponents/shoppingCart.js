
import {FaCartArrowDown} from 'react-icons/fa';
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

import '../Navbarstyles/cart.css';


const ShoppingCart = () => {
   const [productData, setProductData] = useContext(ProductContext);
   console.log(setProductData)
    return ( 
        <div className="user">
            <FaCartArrowDown/>
            <span>{productData.length}</span>
        </div>
     );
}
 
export default ShoppingCart;