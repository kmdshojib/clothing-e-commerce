import React, { Component } from 'react';

import FormInput from '../forminput/form-input';
import Button from '../custom-button/button';

import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';

import './signup.scss'

class SignUp extends Component {
    state = { 
        displayName:'',
        email: '',
        password: '',
        confirmPassword: '',
     }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password, confirmPassword, displayName} = this.state

        if(password !== confirmPassword){
            alert("Password do not match")
        }

        try {
            const{user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user,{displayName})

            this.setState({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: '',
            })

        }catch(error){
            console.log(error)
        }
    }
    handleChange = event =>{
            const{name,value} = event.target

            this.setState({[name]:value})
    }

    render() { 
        const { email, password, confirmPassword, displayName} = this.state
        return ( 
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with Your email and password</span>

                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        label = "Display Name" required/>

                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        label = "Email"  required/>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        label = "Password" required/>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label = "Confirm Password" required/>

                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
         );
    }
}
 
export default SignUp;
