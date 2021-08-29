import React, { Component } from 'react';
import SHOP_DATA from './shop.data'
import PreviewCollection from '../preview-collection/preview-collection'

class ShopPage extends Component {
    state = { 
        collections:SHOP_DATA
     }
    render() { 
        const {collections} = this.state
        return ( 
             <div className="shop-page">
                 {
                     collections.map(({id, ...restCollestionProps}) =>(
                         <PreviewCollection key={id} {...restCollestionProps}/>
                     ))
                 }
             </div>
         );
    }
}
 
export default ShopPage;