
import '../productmenuStyles/BannerCarousel.css';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import ProductBanner1 from './ProductBanner1';
import ProductBanner2 from './ProductBanner2';
import ProductBanner3 from './ProductBanner3';
//import { useState, useEffect } from 'react';

const BannerCarousel = () => {
  let index = 2;
    const onClickarrowright =(e)=>{
        e.preventDefault();
        if(index >0 && index<= 2 ){
           let banner = document.querySelectorAll('.banner');
           banner[index].classList.add('hide');
           index = index - 1; 
        }        
    }   
    const onClickarrowleft =(e)=>{
        e.preventDefault();
        
        if(index >=0 && index<2){
           let banner = document.querySelectorAll('.banner');
        index = index+ 1;
        banner[index].classList.remove('hide'); 
        }
    }
    setInterval(()=>{
        let banner = document.querySelectorAll('.banner');
        if(index<= 2 && index>0 ){
            
            banner[index].classList.add('hide');
           
             index = index - 1; 
         }else{
            let i =2;
            do{
                banner[i].classList.remove('hide')
                i=i-1;
            }while(i>=1);
            return index = index +2;
        } 
       }, 3000);
        
    return (  
        <>
        
        <div className="carouselContainer">
            <div className="arrowleft" onClick={onClickarrowleft}>
                <FaChevronLeft/>
            </div>
                <div className="banner">
                    <ProductBanner1/>
                </div>
                <div className="banner">
                    <ProductBanner2/>
                </div>
                <div className="banner">
                    <ProductBanner3/>
                </div>
            <div className="arrowright" onClick={onClickarrowright}>
                <FaChevronRight/>
            </div>
        </div>
        
        </>
    );
}
 
export default BannerCarousel;