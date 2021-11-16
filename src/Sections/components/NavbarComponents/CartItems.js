
import '../Navbarstyles/CartItems.css';
import {MdDelete} from 'react-icons/md';
import { useContext, useRef} from 'react';
import { ProductContext } from '../Context/ProductContext';
import { TotalContext } from '../Context/TotalContext';





const CartItems = () => {
   const handleSelectOption =(itemIndex, unitprice)=>{
      const sb = document.getElementById(`it${itemIndex}`);
      const newProductData = [...productData];
      initTotal.current = newProductData[itemIndex].subtotal;
      newProductData[itemIndex].subtotal = sb.value * unitprice;
      setTotal(prevTotal=>prevTotal + newProductData[itemIndex].subtotal - initTotal.current)
      setProductData(newProductData);

        

   }
   //useRef keeps the previous sub total of selected product item
    const initTotal = useRef(0)
    const [productData, setProductData]= useContext(ProductContext);
    const [total, setTotal] = useContext(TotalContext)
  
    return ( 
        <div className="cart-container">  
            <div className="headers">
                 
                    <div className="item">ITEM</div>
                    <div className="dsc">DESCRIPTION</div>
                    <div className="qty">QUANTITY</div>
                    <div className="unitprice">UNIT PRICE</div>
                    <div className="subtotal">SUBTOTAL</div>
               
            </div>
            {productData && productData.map((i,index) =>(
            <div className="cartItems-wrapper" key={i.id}>
                <img src={i.image} alt="item"/>
                <div className="dsc-wrapper">
                    <h3>{i.name}</h3>
                    <h3 style={{color:'red'}}> <MdDelete/>Remove Item</h3>
                </div>
               

                <select name="quantity" id={`it${index}`} onChange={()=>{handleSelectOption(index, i.price)}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <p>{i.price}</p>
                <p>
                    <div className="subt">
                    {i.subtotal}
                    </div>
                </p>
            </div>
            ))}
            <div className="total">
                <h2>Total</h2>
                <h2>{`$${total}`}</h2>
            </div>
        </div> 
    );
}
 
export default CartItems;