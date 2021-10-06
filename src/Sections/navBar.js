import Brand from "./components/brandName";
import Search from "./components/search";
import Account from "./components/account";
import ShoppingCart from "./components/shoppingCart";
import {FaBars} from 'react-icons/fa'
import './components/styles/search.css';
import './components/styles/navBar.css';
import Mobilesearch from "./components/mobileSearch";
import Sidebar from "./components/sidebar";
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