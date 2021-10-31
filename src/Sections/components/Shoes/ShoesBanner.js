
import '../ShoesStyles/ShoesBanner.css';
import Trainers from '../images/Trainerbg.png'
import Office from '../images/office.png'

const ShoesBanner = () => {
    return ( 
        <>
        <div className="shoes-container">
                <div className="left">
                    <div className="txt">
                        <h1>Trainer Rebounce</h1>
                        <h3>Both for Males <br/> And Females</h3>
                        <div className="cta">
                            <button>$23.89</button>
                        </div>
                        
                    </div>
                    <div className="photo">
                        <img src={Trainers} alt="trainers shoes"/>
                    </div>
                
                </div>
                <div className="right">
                    <div className="txt">
                        <h1>Office Shoes</h1>
                        <h3>Eliminate <br/> Stress</h3>
                        <div className="cta">
                            <button>$100.00</button>
                        </div>
                        
                    </div>
                    <div className="photo">
                        <img src={Office} alt="office shoes"/>
                    </div>
                
                </div> 
        </div>
        </>
     );
}
 
export default ShoesBanner;