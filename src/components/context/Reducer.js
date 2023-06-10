const cartReducer = (state, action) => {
   switch (action.type) {
    case 'ADD_TO_CART':
        //  return {...state,cart:[...state.cart,{...action.payload,qte:1}]}
         return {...state,cart:[...state.cart,{...action.payload,qte:1}]}
    case 'REMOVE_FROM_CART':
        return  {...state,cart:state.cart.filter((c) => c.product.id !== action.payload.product.id)}
    case 'CHANGE_CART_QTY':
        return  {...state,cart:state.cart.filter((c) => c.product.id !== action.payload.product.id ? c.product.qty = action.payload.product.qty : c.product.qty )}
        default:
        return state ;
   }
  };
  export const flterReducer = (state, action) => {
   switch (action.type) {
    case 'SORT_BY_PRICE':
         return {...state,sort:action.payload}
    case 'FILTER_BY_STOCK':
        return {...state,byStock: !state.byStock}
    case 'FILTER_BY_DELIVERY':
        return {...state,byDelivery: !state.byDelivery}
    case 'FILTER_BY_RATING':
        return {...state,byRating: action.payload}
    case 'FILTER_BY_SEARCH':
        return {...state,searchQuery: action.payload}
    case 'CLAER_FILTERS':
        return  {
            byStock:false,
            byDelivery:false,
            byRating:0,
            searchQuery:""
          }
       default:
        return state ;
   }
  };
  
  export default cartReducer;


  