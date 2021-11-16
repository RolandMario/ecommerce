import { useState } from "react";
import './Hooks.css'

const Hooks = () => {
    const lazyvalue = ()=>{
         console.log('hmmmmm');
        return 'great';
    }
    const [x, setx] = useState(lazyvalue);
   
   
    const handle = ()=>{
        setx('i change')
    }
    return (  
       
        <div className="y">
            <h1>{x}</h1>
            <p onClick={handle}> Click Here</p>
            
            
        </div>
    );
}
 
export default Hooks;