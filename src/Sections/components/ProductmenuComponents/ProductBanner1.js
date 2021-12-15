import '../productmenuStyles/ProductBanner1.css';
import Trainer from '../images/Trainerbg.png'

const ProductBanner1 = () => {
    return ( 
        <>
        <div className="banner1Container">
            <div className="shoes-banner1">
               <h1>Sport Shoes</h1>
               <p>Both for Male and females</p>
               <div className="cta">
                   <button>Order</button>
               </div>
               

            </div>
            <div className="product_image">
                <img src={Trainer} alt="product image"/>

            </div>
        </div>
        </>
     );
}
 
export default ProductBanner1;