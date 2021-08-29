import React, { Component } from 'react';
import './App.css';
import { Route,Switch } from 'react-router';



import HomePage from './components/home/homepage.component';
import ShopPage from './components/common/shop/shop';
import Header from './components/header/header';
import SignInSignUpPage from './components/signin-and-signup/signin-and-signup';

import {auth,createUserProfileDocument} from './firebase/firebase.utils'



class APP extends Component {
  state = { 
    currentUser: null,
   }

  componentDidMount() {
     this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
        this.setState({ currentUser:userAuth })
      }
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render() { 
    return ( 
      <div>
        <Header  currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route  path="/shop" component={ShopPage}/>
          <Route  path="/signin" component={SignInSignUpPage}/>
        </Switch>
     </div>
     );
  }
}
 
export default APP;

