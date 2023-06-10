import React, {  createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import cartReducer, { flterReducer } from './Reducer'
// import faker from 'faker';

export const Cart = createContext();
faker.seed(99);
function Context({ children }) {
  
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
     inStock: faker.helpers.arrayElements([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
     ratings: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
  }));

  const [state,dispatch] = useReducer(cartReducer,{
    products : products,
    cart:[]
  })

const [filterState, filterDispatch] = useReducer(flterReducer, {
  byStock:false,
  byDelivery:false,
  byRating:0,
  searchQuery:""
})//console.log(products);

  return <Cart.Provider value={{state,dispatch,filterState, filterDispatch}}>{children}</Cart.Provider>;
}


export const useCart = () => { return useContext(Cart);};



export default Context;
