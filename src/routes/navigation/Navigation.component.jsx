import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
// import './navigation.style.scss';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/Cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/Cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { LogoContainer, NavLink, NavLinksContainer, Navigation } from "./navigation.style";

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
        <Navigation>
            <LogoContainer  to="/">    
                <CrwnLogo className="logo" />
            </LogoContainer>
            <NavLinksContainer>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {
                  currentUser ? (
                    <NavLink as="span" onClick={signOutUser}>SignOut</NavLink>
                  ) 
                  :( <NavLink to="/auth">SignIn</NavLink> )
                }
                <CartIcon />
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
        </Navigation>
        <Outlet/>
      </Fragment>
    )
}
  
export default NavigationBar; 


