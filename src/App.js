import Account from "./Sections/Account";
import AccountInfo from "./Sections/components/AccountInfo/accountInfo";
import NavBar from "./Sections/navBar";
import Productmenubanner from "./Sections/productmenuBanner";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ProductProvider } from "./Sections/components/Context/ProductContext";
import { TotalContextProvider } from "./Sections/components/Context/TotalContext";
import CartItems from "./Sections/components/NavbarComponents/CartItems";



function App() {
  return (
    <Router>
      <ProductProvider>
        <TotalContextProvider>
          <div className="App"> 
          <NavBar/>
          <AccountInfo/>
          <Switch>
            
            <Route path="/" exact component={Productmenubanner}/>
            
            <Route path="/account" exact component={Account}/>
            <Route path="/cart" exact component={CartItems}/>
          </Switch>
          </div>
      </TotalContextProvider>
      </ProductProvider>
    </Router>
    
  );
}

export default App;
