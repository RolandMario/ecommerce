
import '../AccountInfostyles.module/signIn.css';
const SignIn = () => {

    return ( 
        <>
        <div className="circle">

        </div>
        <div className="signininfo">
            <h2> Sign In</h2>
            <form>
            <div className="email">
                <input type="text" />
            </div>
            <div className="password">
                <input type="password" />
            </div>
            <div className="check">
                <input type="checkbox" id="check"/>
                <p>Remember me</p>
            </div>
            <div className="signin">
                <button>Sign In</button>
            </div>
            </form>
            <h5>Don't have an account?</h5>
            <p>create account</p>
        </div>
        </>
     );
}
 
export default SignIn;