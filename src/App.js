import React, { Component } from 'react';
import './App.css';
import { Route,Switch,Redirect } from 'react-router';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect'


import HomePage from './components/home/homepage.component';
import ShopPage from './components/common/shop/shop';
import Header from './components/header/header';
import SignInSignUpPage from './components/signin-and-signup/signin-and-signup';
import CheckoutPage from './components/checkout/checkout.com';

import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

import {auth,createUserProfileDocument} from './firebase/firebase.utils'




class App extends Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

     this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser( userAuth )
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render() { 
    return ( 
      <div>
        <Header />
        <Switch>
          <Route exact path="/clothing-e-commerce" component={HomePage}/>
          <Route  path="/clothing-e-commerce/shop" component={ShopPage}/> 
          <Route exact  path="/clothing-e-commerce/checkout" component={CheckoutPage}/>

          <Route exact  path="/clothing-e-commerce/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : 
          (<SignInSignUpPage />)}/>
        </Switch>
     </div>
     );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

