import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect'

import {ReactComponent as Logo} from '../../static/crown.svg'

import {auth} from '../../firebase/firebase.utils'

import './header.scss'

import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({currentUser,hidden}) => {
   
    return ( 
        <div className="header">
            <Link className="logo-container" to="/clothing-e-commerce">
                <Logo  className="logo"/>
            </Link>

            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="#">CONTACT</Link>
                {
                    currentUser?
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>

                   
                }
                <CartIcon />
            </div>
            {hidden? null : <CartDropdown />}
            
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden,
})
 
export default connect(mapStateToProps)(Header);