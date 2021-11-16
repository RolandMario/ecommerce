
import '../ShoesStyles/ShoesBanner.css';
import Trainers from '../images/Trainerbg.png'
import Tshirt from '../images/T-1.png'

const ShoesBanner = () => {
    return ( 
        <>
        <div className="shoes-container">
                <div className="item-trainer">
                        <div className="desc">
                            <h1>Trainers Rebounce</h1>
                            <h3>both Males & Females</h3>
                        
                            <div className="cta">
                                <button>$23.89</button>
                            </div>
                        </div>
                        <div className="image">
                            <img src={Trainers} alt="Trainers shoes"/>
                        </div>
                </div>
                <div className="item-tshirt">
                    <div className="desc">
                        <h1> T-Shirts</h1>
                        <h3>Unisex</h3>
                    
                        <div className="cta">
                                <button>$23.89</button>
                        </div>
                    </div>
                    <div className="image">
                        <img src={Tshirt} alt="Unisex T-shirts"/>
                    </div>
                </div>
        </div>
        </>
     );
}
 
export default ShoesBanner;