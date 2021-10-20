import AccountInfo from "./components/AccountInfo/accountInfo";
import Register from "./components/AccountInfo/register";
import SignIn from "./components/AccountInfo/signIn";
import '../Sections/components/Accountstyles/account.css';


const account = () => {
    return ( 
        <>
        
            <div className="sign-reg">
            <SignIn/>
            <Register/>
            </div>
        </>
     );
}
 
export default account;