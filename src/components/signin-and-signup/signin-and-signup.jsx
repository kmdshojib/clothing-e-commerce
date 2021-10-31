import React from 'react';
import './signin-and-signup.scss'

import SignIn from '../common/signin/singin'
import SignUp from '../common/sign-up/signup'
import {SignInAndSignUpContainer} from './signin-and-signup.styles'

const SignInSignUpPage = () => {
    return ( 
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
     );
}
 
export default SignInSignUpPage;