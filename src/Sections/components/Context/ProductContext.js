import { createContext, useState } from "react";


export const ProductContext = createContext();

export const ProductProvider =(props)=>{
    
    const [productData, setProductData] = useState([]);
    return(
        <ProductContext.Provider value={[productData, setProductData]}>
            {props.children}
        </ProductContext.Provider>
    );

}