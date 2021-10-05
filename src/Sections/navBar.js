import Brand from "./components/brandName";
import Search from "./components/search";
import Account from "./components/account";
import ShoppingCart from "./components/shoppingCart";
import './components/styles/search.css';



const navBar = () => {
    return ( 
        <div className="navElements">
            <Brand/>
            <div className="icons">
                <Search/>
                <Account/>
                <ShoppingCart/>
            </div>
            

        </div>
     );
}
 
export default navBar;