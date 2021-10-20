
import '../AccountInfostyles.module/register.css'

const register = () => {
    return ( 
        <div className="signininfo">
        <h2> Create Account</h2>
        <form>
        <div className="names">
            <div className="firstname">
                <input type="text"  placeholder="FirstName"/>
            </div>
            <div className="lastname">
                <input type="text" placeholder="LastName"/>
            </div>
        </div>
        <div className="email-password">
            <div className="mail">
                <input type="text" placeholder="E-Mail" />
            </div>
            <div className="pass">
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        <div className="fone">
            <input type="text" placeholder="Phone-Number"/>
        </div>
        <div className="chk">
            <input type="checkbox" id="check"/>
            <p>I accept Terms & Conditions</p>
        </div>
        <div className="signin">
            <button>Create Account</button>
        </div>
        </form>
        <h5>Already a member?</h5>
        <p>Sign In</p>
    </div>
     );
}
 
export default register;