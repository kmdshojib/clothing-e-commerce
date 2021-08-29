import React from 'react';

import './button.scss'

const Button = ({children,isGoogleSignedIn, ...otherProps}) => {
    return ( 
        <button className={`${isGoogleSignedIn?'google-sign-in': ''} custom-button `}
            {...otherProps}>{children}</button>
     );
}
 
export default Button;