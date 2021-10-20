import {FaUser} from 'react-icons/fa';
import '../Navbarstyles/account.css';
import '../AccountInfostyles.module/accountInfo.css';

const account = () => {
    const onClickUser = ()=>{
        const accInfo = document.querySelector('.accContainer'); 
        accInfo.classList.toggle('show')
    }
   
    return ( 
        <div className="user" onClick={onClickUser}>
            <FaUser/>
        </div>
     );
}
 
export default account;