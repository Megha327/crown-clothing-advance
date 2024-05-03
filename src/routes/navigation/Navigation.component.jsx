import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.style.scss';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/Cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/Cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log("current user of navigation", currentUser);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // }
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">    
                <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">Shop</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                {
                  currentUser ? (
                    <span className="nav-link" onClick={signOutUser}>SignOut</span>
                  ) 
                  :( <Link className="nav-link" to="/auth">SignIn</Link> )
                }
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet/>
      </Fragment>
    )
}
  
export default NavigationBar; 