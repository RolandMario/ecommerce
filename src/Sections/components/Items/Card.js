import {FaRegStar} from 'react-icons/fa';
import '../ItemStyles/Card.css';

import { CardData } from './cardData';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';

const Card = () => {
    
    
      const onAddCart =(index)=>{
          
          setProductData(prev=>[...prev, data[index]]);
          
      }
   
    const [data, setData] = useState([]);
    
    const [productData, setProductData] = useContext(ProductContext);
    console.log(productData)
    
	useEffect(()=>{
		setData(CardData)
        
	},[])
    return ( 

        <>
        {data && data.map((i,index) =>(
        <div className="card" key={i.id}>
            <div className="product-Image">
            <img src={i.image} alt="product"/>
            </div>
            <div className="name-price">
                <div className="name">
                    <h3>{i.name}</h3>
                </div>
                
                <div className="price">
                    <h3>{i.price}</h3>
                </div>
            </div>
            <div className="star-addcart">
                <div className="star">
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                </div>
                <div className="addcart">
                    <button key={i.id} onClick={()=>{
                        onAddCart(index)
                    }}>Add Cart</button>
                </div>
            </div>
        </div>
        
        ))}
        </>
     );
}
 
export default Card;