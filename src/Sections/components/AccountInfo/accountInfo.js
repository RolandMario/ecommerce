import   '../AccountInfostyles.module/accountInfo.css';
import { Link } from 'react-router-dom';

const accountInfo = () => {
    return ( 

        <div className="accContainer">
            <Link to="/account">
            <div className="signin">
              <button>Sign In</button>
            </div>
            </Link>
        </div>
     );
}
 
export default accountInfo;