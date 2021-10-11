import Productmenu from './components/ProductmenuComponents/productMenu';
import BannerCarousel from './components/ProductmenuComponents/bannerCarousel';
import  './components/productmenuStyles/Productmenubanner.css';
import SideAdvert from './components/ProductmenuComponents/sideAdvert';

const Productmenubanner = () => {
    return ( 
        <>
        <div className="section2">
        <Productmenu/>
        <BannerCarousel/> 
        <SideAdvert/>
        </div>
        
        </>
     );
}
 
export default Productmenubanner;