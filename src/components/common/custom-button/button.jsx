import React from 'react';


import {CustomButtonComponent} from './button.styles'

const Button = ({children, ...props}) => {
    return ( 
        <CustomButtonComponent {...props} >{children}</CustomButtonComponent>
     );
}
 
export default Button;