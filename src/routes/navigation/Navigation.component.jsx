import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
// import './navigation.style.scss';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/Cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/Cart-dropdown.component";
import { LogoContainer, NavLink, NavLinksContainer, Navigation } from "./navigation.style";
import { useSelector } from "react-redux";
import { currentUserSelector } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const NavigationBar = () => {
  const currentUser = useSelector(currentUserSelector)
 
  const isCartOpen = useSelector(selectIsCartOpen);

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


