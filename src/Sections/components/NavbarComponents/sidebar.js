import '../Navbarstyles/sidebar.css';
import { FaTimes } from 'react-icons/fa';
const sidebar = () => {

    const onClickNavClose = (e)=>{
       // e.preventDefault();
        const navClose = document.querySelector('.categories');
        navClose.style.left="-300px";
    }
    return ( 
        <div className="categories">
            <div className="close" onClick={onClickNavClose}>
                    <FaTimes/>
            </div>
            <ul>
                <li>Food Spices</li>
                <li>Body Treat</li>
                <li>Attraction</li>
            </ul>
        </div>
     );
}
 
export default sidebar;