import Productmenu from './components/ProductmenuComponents/productMenu';
import BannerCarousel from './components/ProductmenuComponents/bannerCarousel';
import  './components/productmenuStyles/Productmenubanner.css';
import SideAdvert from './components/ProductmenuComponents/sideAdvert';
import ItemCarousel from './components/Items/ItemCarousel';
import Images from '../Sections/components/images/clothesbg.png';
import ShoesBanner from './components/Shoes/ShoesBanner';



const Productmenubanner = () => {
    
    return ( 

        <>
             
        <div className="section2">
        <Productmenu/>
        <BannerCarousel/> 
        <SideAdvert/>
       
        </div>
        <ItemCarousel Images={Images}/>
        <ShoesBanner/>
        
        </>
     );
}
 
export default Productmenubanner;