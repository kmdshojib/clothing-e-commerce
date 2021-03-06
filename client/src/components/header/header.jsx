import React from 'react';

import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect'

import {ReactComponent as Logo} from '../../static/crown.svg'


import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import {signOutStart} from '../../redux/user/user.action'

const Header = ({currentUser,hidden , signOutStart}) => {
   
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
                    <OptionLink as="div" onClick={signOutStart}>SIGN OUT</OptionLink>
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
 
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);