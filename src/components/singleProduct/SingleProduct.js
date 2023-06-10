import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from '../rating/Rating'
import { useCart } from "../context/Context";

function SingleProduct({product}) {
    const {state,dispatch} = useCart()
    const cart = state.cart;
    //  console.log(cart);

  return (
    <div className='products' >
        <Card >
          <Card.Img variant="top" src={product.image} alt={product.name} />
          <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle style={{paddingBott :10}}>
                <span >$ {product.price.split('.')[0]}</span>
                {
                    product.fastDelivery ? (
                        <div>
                            Fast Delivery
                        </div>
                    ) :
                    (
                        <div>
                        4 days Delivery
                       </div>
                    )
                }
                <Rating rating={product.ratings} />
              </Card.Subtitle>
              { cart.some((i) => product.id == i.product.id) ? (
                  <Button variant='danger' onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { product } })} >Remove from Cart</Button>
              ) :
              (
                <Button   onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product } })} disabled={(product.inStock == 0)  ? true : false} >{product.inStock != 0 ? "Add to Card" : "Out of Stock"}</Button>
                )
              }
             
          </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct
