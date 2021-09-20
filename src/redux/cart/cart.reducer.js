import CartActionTypes from './cart.type';
import { addItemnToCart, removeItemFromCart } from './cart.utils';

const INITIAL_VALUE ={
    hidden:true,
    cartItems:[],
}

const cartReducer =(state = INITIAL_VALUE,action) =>{
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemnToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id 
                )
            }
            case CartActionTypes.REMOVE_ITEM:
                return{
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems , action.payload)
                }
        default:
            return state
    }
}

export default cartReducer;