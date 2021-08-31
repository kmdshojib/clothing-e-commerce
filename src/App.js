import React, { Component } from 'react';
import './App.css';
import { Route,Switch } from 'react-router';
import { connect } from 'react-redux';


import HomePage from './components/home/homepage.component';
import ShopPage from './components/common/shop/shop';
import Header from './components/header/header';
import SignInSignUpPage from './components/signin-and-signup/signin-and-signup';
import { setCurrentUser } from './redux/user/user.action';

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
          <Route exact path="/" component={HomePage}/>
          <Route  path="/shop" component={ShopPage}/>
          <Route  path="/signin" component={SignInSignUpPage}/>
        </Switch>
     </div>
     );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  null,
  mapDispatchToProps
  )(App);

