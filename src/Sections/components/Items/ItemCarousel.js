
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import '../ItemStyles/ItemCarousel.css'
import Card from './Card';

const ItemCarousel = ({Images}) => {
    const scrollLeft = ()=>{
        const card = document.querySelectorAll('.card');
        let unitMove = 300;
        if(card[card.length-1].style.right !== 0){
           for(let i=0; i<=card.length-1; i++){
            card[i].style.transform=`translateX(${-unitMove}px)`;
            
        } 
        }
    }
        const scrollRight = ()=>{
            const card = document.querySelectorAll('.card');
            let unitMove = 300;
            if(card[0].style.left <= 0){
               for(let i=0; i<=card.length-1; i++){
                card[i].style.transform=`translateX(${unitMove}px)`;
                
            } 
            }
        }
    return ( 
        <div className="ItemCarousel-container">
        <div className="hotproducts">
            <h2>Top Hottest Products</h2>
            <div className="right-left-arrow" >
               <div className="left" onClick={scrollLeft} onScroll={scrollLeft}><FaChevronLeft/></div> 
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