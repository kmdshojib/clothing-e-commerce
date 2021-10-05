import React,{Component} from 'react';

import {SignInContainer,SignInTitle,ButtonsBarContainer} from './sign-in.styles'

import FormInput from '../forminput/form-input';
import Button from '../custom-button/button'

import {auth, signInWithGoogle } from './../../../firebase/firebase.utils';

class SignIn extends Component {
    state = { 
        email:'',
        password:''
     }
    
    handleSubmit = async event =>{
        event.preventDefault();

        const {email,password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
        } catch (error) {
            console.log(error)
        }
        
    }
    signOutUser = () => auth.signOut();
    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name]:value});
    }
    render() { 
        return ( 
            <SignInContainer>
                <SignInTitle>Alredy have an account</SignInTitle>
                <span>Sign in with your email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label="Email" 
                    autoComplete="username"
                    required/>
                   

                    <FormInput 
                    type="password" 
                    name="password" 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    label="Password" 
                    autoComplete="new-password"
                    required />
                   

                   <ButtonsBarContainer>
                        <Button type="submit" value="Submit Form">Sign In</Button>
                        <Button  onClick={signInWithGoogle} isGoogleSignedIn>{''}Sign In with Google{''}</Button>
                       
                   </ButtonsBarContainer>
                </form>
            </SignInContainer>
         );
    }
}
 
export default SignIn;