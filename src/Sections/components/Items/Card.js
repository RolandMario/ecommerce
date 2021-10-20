import {FaRegStar} from 'react-icons/fa';
import '../ItemStyles/Card.css';

import { CardData } from './cardData';
import { useEffect, useState } from 'react';
const Card = ({Images}) => {
    
    const [data, setData] = useState([])

	useEffect(()=>{
		setData(CardData)
	},[])
    return ( 

        <>
        {data && data.map(i =>(
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
                    <button key={i.id}>Add Cart</button>
                </div>
            </div>
        </div>
        ))}
        </>
     );
}
 
export default Card;