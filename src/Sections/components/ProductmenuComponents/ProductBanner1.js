import '../productmenuStyles/ProductBanner1.css';
import Trainer from '../images/shoe.png'

const ProductBanner1 = () => {
    return ( 
        <>
        <div className="banner1Container">
        <div className="shoes-banner">
                <div className="left">
                
                    <h1>Trainers Rebounce</h1>
                   
                    <h3>Both for Males <br/> And Females</h3>
                    <div className="cta">
                        <button>$23.59</button>
                    </div>

                </div>
                <div className="right">
                    <img src={Trainer} alt="shoe"/>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default ProductBanner1;