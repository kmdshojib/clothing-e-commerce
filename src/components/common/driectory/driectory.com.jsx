import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item'
import './dir.style.scss'

import { selectDirectorySection } from '../../../redux/directory-redux/directory.selector';

const Driectory = ({section}) => {
    return ( 
            <div className='directory-menu'>
                {section.map(({id,...otherSectionProps}) => <MenuItem
                key={id} 
                {...otherSectionProps}
              
                 />)}
            </div>
        );

}

const mapStateToProps = createStructuredSelector({
  section:selectDirectorySection
})


 
export default connect(mapStateToProps) (Driectory);