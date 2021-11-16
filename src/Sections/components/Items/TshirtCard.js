import '../ItemStyles/TshirtCard.css';
import {FaRegStar} from 'react-icons/fa';
import '../ItemStyles/Card.css';

import {  TshirtData} from './TshirtData';
import { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { TotalContext } from '../Context/TotalContext';


const TshirtCard = () => {
        const [, setTotal] = useContext(TotalContext)
        const [tshirtdata, ] = useState(TshirtData);
        const [, setProductData]= useContext(ProductContext);
        
        
        const onAddToCart = (index, price)=>{
            setProductData(prev=>[...prev, tshirtdata[index]]);
            setTotal(prev=>prev+price)
        }
   
  return ( 

      <>
      <div className="shirt-wrapper">
      {tshirtdata && tshirtdata.map((i,index) =>(
     <div className="shirt-container"key={i.id}>
         <div className="productImage">
             <img src={i.image} alt="T shirt"/>
         </div>
         <div className="description">
                <div className="productName">
                    <p>{i.name}</p>
                    <p>{i.price}</p>
              
                </div>
                <div className="star-cart">
                    <div className="star">
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                    </div>
                    <div className="addToCart">
                        <button onClick={()=>{onAddToCart(index, i.price)}}>Add To Cart</button>
                    </div>
                </div>
         </div>
     </div>
     ))}
     </div>  
      </>
   );
}
export default TshirtCard;