import React from 'react';

import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect'

import {ReactComponent as Logo} from '../../static/crown.svg'

import {auth} from '../../firebase/firebase.utils'

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({currentUser,hidden}) => {
   
    return ( 
        <HeaderContainer>
            <LogoContainer  to="/">
                <Logo  className="logo"/>
            </LogoContainer>

            <OptionsContainer>
                <OptionLink  to="/shop">SHOP</OptionLink>
                <OptionLink  to="#">CONTACT</OptionLink>
                {
                    currentUser?
                    <OptionLink as="div" onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink  to="/signin">SIGN IN</OptionLink> 
                }
                <CartIcon />
            </OptionsContainer>
            {hidden? null : <CartDropdown />}
            
        </HeaderContainer>
     );
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden,
})
 
export default connect(mapStateToProps)(Header);