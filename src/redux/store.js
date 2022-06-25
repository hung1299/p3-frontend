import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productCreateReviewReducer,
  productDetailsReducer,
  productListReducer,
} from './Reducers/ProductReducers';
import { cartReducer } from './Reducers/CartReducers';
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './Reducers/UserReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from './Reducers/OrderReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
