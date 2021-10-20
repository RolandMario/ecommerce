import Account from "./Sections/Account";
import AccountInfo from "./Sections/components/AccountInfo/accountInfo";
import NavBar from "./Sections/navBar";
import Productmenubanner from "./Sections/productmenuBanner";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App"> 
      <NavBar/>
      <AccountInfo/>
      <Switch>
        <Route path="/" exact component={Productmenubanner}/>
        <Route path="/account" exact component={Account}/>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
