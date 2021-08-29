import React from 'react';
import './signin-and-signup.scss'

import SignIn from '../common/signin/singin'
import SignUp from '../common/sign-up/signup'

const SignInSignUpPage = () => {
    return ( 
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
     );
}
 
export default SignInSignUpPage;