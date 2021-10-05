import Brand from "./components/brandName";
import Search from "./components/search";
import Account from "./components/account";
import ShoppingCart from "./components/shoppingCart";
import {FaBars, FaTimes} from 'react-icons/fa'
import './components/styles/search.css';
import './components/styles/navBar.css';
import Mobilesearch from "./components/mobileSearch";




const navBar = () => {
    return ( <>
        <div className="navElements">
            <div className="burger-nav">
                <div className="nav-close">
                    <FaTimes/>
                </div>
                <div className="nav-open">
                  <FaBars/>  
                </div>
                
            </div>
            
            <Brand/>
            <Search/> 
          
            
            <div className="icons">
                
                <Account/>
                <ShoppingCart/>
            </div>
            
           
        </div>
        <div className="ms">
            <Mobilesearch/>
        </div>
        </>
     );
}
 
export default navBar;