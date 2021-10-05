import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item'

import {DirectoryMenuContainer} from './directory.styles'

import { selectDirectorySection } from '../../../redux/directory-redux/directory.selector';

const Driectory = ({section}) => {
    return ( 
            <DirectoryMenuContainer>
                {section.map(({id,...otherSectionProps}) => <MenuItem
                key={id} 
                {...otherSectionProps}
              
                 />)}
            </DirectoryMenuContainer>
        );

}

const mapStateToProps = createStructuredSelector({
  section:selectDirectorySection
})


 
export default connect(mapStateToProps) (Driectory);