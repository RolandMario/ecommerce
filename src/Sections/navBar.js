import Brand from "./components/NavbarComponents/brandName";
import Search from "./components/NavbarComponents/search";
import Account from "./components/NavbarComponents/account";
import ShoppingCart from "./components/NavbarComponents/shoppingCart";
import {FaBars} from 'react-icons/fa'
import './components/Navbarstyles/search.css';
import './components/Navbarstyles/navBar.css';
import Mobilesearch from "./components/NavbarComponents/mobileSearch";
import Sidebar from "./components/NavbarComponents/sidebar";
//import { useState } from "react";




const NavBar = () => {
const onClickOpen = (e)=>{
    const navClose = document.querySelector('.categories');
        navClose.style.opacity="1"
        navClose.style.left="0px";
}
    
    return ( 
    
    <>
        <div className="navElements">
            <div className="nav-open" onClick={onClickOpen}>
                <FaBars/>  
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
        <Sidebar />
        </>
     );
}
 
export default NavBar;