import { createContext, useState } from "react";



export const TotalContext = createContext();


export const  TotalContextProvider =(props)=>{
    const [total, setTotal] = useState(0)
 return(
     <TotalContext.Provider value={[total, setTotal]}>
         {props.children}
     </TotalContext.Provider>
 )

}