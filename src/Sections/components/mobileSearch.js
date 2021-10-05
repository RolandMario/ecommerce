
import { FaSearch } from "react-icons/fa";
import './styles/mobileSearch.css'

const mobilesearch = () => {
    return ( 
        <div className="mobile">
            <input type="msearch" id="msearch" placeholder="Search items"/>
                <label for="msearch">
                    <FaSearch/>
                </label>
        </div>
     );
}
 
export default mobilesearch;