
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import '../ItemStyles/ItemCarousel.css'
import Card from './Card';

const ItemCarousel = ({Images}) => {
    const scrollLeft = ()=>{
        const card = document.querySelectorAll('.card');
        if(card[card.length-1].style.right <=`50px` ){
           for(let i=0; i<=card.length-1; i++){
            card[i].style.transform=`translateX(${card[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
            console.log(card[i].computedStyleMap().get("transform")[0].x.value)
        } 
        }
    }
        const scrollRight = ()=>{
            const card = document.querySelectorAll('.card');
            if(card[0].style.left <= 0){
               for(let i=0; i<=card.length-1; i++){
                card[i].style.transform=`translateX(${card[i].computedStyleMap().get("transform")[0].x.value + 300}px)`;
               
                
            } 
            }
        }
    return ( 
        <div className="ItemCarousel-container">
        <div className="hotproducts">
            <h2>Top Hottest Products</h2>
            <div className="right-left-arrow" >
               <div className="left" onClick={scrollLeft} ><FaChevronLeft/></div> 
               <div className="right" onClick={scrollRight}><FaChevronRight/></div> 
            </div>
        </div>
        <div className="owl-carousel">
            <Card Images={Images}/>
        </div>
        
        </div>
     );
}
 export default ItemCarousel;