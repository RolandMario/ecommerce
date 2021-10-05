import {FaSearch} from 'react-icons/fa';
import './styles/search.css';

const search = () => {
    return ( 
        <div className="search">
            
                <input type="search" id="search" placeholder="Search items"/>
                <label for="search">
                    <FaSearch/>
                </label>
             
            
        </div>
     );
}
 
export default search;