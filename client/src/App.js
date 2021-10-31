import React, { useEffect } from 'react';
import {GlobalStyle} from './globals.styles'

import { Route,Switch,Redirect } from 'react-router';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect'


import HomePage from './components/home/homepage.component';
import ShopPage from './components/common/shop/shop';
import Header from './components/header/header';
import SignInSignUpPage from './components/signin-and-signup/signin-and-signup';
import CheckoutPage from './components/checkout/checkout.com';


import { selectCurrentUser } from './redux/user/user.selector';

import {checkUserSession} from './redux/user/user.action'

const App = ({checkUserSession,currentUser}) => {

    useEffect(() => {
      const unSubscribeFromAuth = null
      checkUserSession()
    return () => {
      unSubscribeFromAuth()
    }
    },[checkUserSession])
  
  // unSubscribeFromAuth = null;

  // componentDidMount() {
  //   const {checkUserSession,} = this.props;

  //   checkUserSession()
  // }
  // componentWillUnmount(){
  //   this.unSubscribeFromAuth();
  // }
    return ( 
      <div>
      <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route  path="/shop" component={ShopPage}/> 
          <Route exact  path="/checkout" component={CheckoutPage}/>

          <Route exact  path="/signin" render={() => currentUser ? (<Redirect to="/"/>) : 
          (<SignInSignUpPage />)}/>
        </Switch>
     </div>
     );
  }

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);