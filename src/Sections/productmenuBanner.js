import Productmenu from './components/ProductmenuComponents/productMenu';
import BannerCarousel from './components/ProductmenuComponents/bannerCarousel';
import  './components/productmenuStyles/Productmenubanner.css';
import SideAdvert from './components/ProductmenuComponents/sideAdvert';
import ItemCarousel from './components/Items/ItemCarousel';
import Images from '../Sections/components/images/clothesbg.png';
import ShoesBanner from './components/Shoes/ShoesBanner';
import TshirtCard from './components/Items/TshirtCard';




const Productmenubanner = () => {
    
    return ( 

        <>
             
        {/* <div className="section2">
            
            <Productmenu/>
            <BannerCarousel/> 
            <SideAdvert/>
       
        </div> */}
        <div className="sect">
            <div className="side">
            <Productmenu/>
                
            </div>
            <div className="banner1">
            <BannerCarousel/> 
            </div>
           
            <div className="ads1">
            <SideAdvert/>
            </div>
           

        </div>
        <ItemCarousel Images={Images}/>
        <ShoesBanner/>
        <TshirtCard/>
        {/* <CartItems/> */}
        
        
        </>
     );
}
 
export default Productmenubanner;