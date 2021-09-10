import React from 'react';

import './button.scss'

const Button = ({children,isGoogleSignedIn,inverted, ...otherProps}) => {
    return ( 
        <button className={`${inverted? 'inverted':''} ${isGoogleSignedIn?'google-sign-in': ''} custom-button `}
            {...otherProps}>{children}</button>
     );
}
 
export default Button;