import React, { useContext, useEffect, useState } from 'react'
import { useCart } from "../context/Context";
import Filters from '../filters/Filters';
import SingleProduct from '../singleProduct/SingleProduct';
import { Button, Col, Image, ListGroup, Row,Form } from 'react-bootstrap';
import Rating from '../rating/Rating';
import { AiFillDelete } from 'react-icons/ai';

function Card() {

  const {state,dispatch} = useCart();
   console.log(state.cart);

   const [Total, setTotal] = useState(0)

   useEffect(() => {
     setTotal(state.cart.reduce((acc,curr) => acc + Number(curr.product.price)*curr.qte,0))
     console.log(Total);
   }, [state.cart])
   
  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {
              state.cart.map((item) => (
                <ListGroup.Item  key={item.product.id}>
                  <Row>
                    <Col md={2}>
                    <Image variant="top" src={item.product.image} alt={item.product.name}  fluid rounded/>
                    </Col>
                    <Col md={2}>
                       <span>
                           {item.product.name}
                       </span>
                    </Col>
                    <Col md={2}>             
                           {item.product.price.split(".")[0]}                  
                    </Col>
                    <Col md={2}>
                       <Rating rating={item.product.ratings}  >
                           {item.product.name}
                       </Rating>
                    </Col>
                    {/* <Col md={2}>
                       <Form.Control as="select" value={item.qty} 
                       onChange={(e) => 
                              dispatch({
                                type:"CHANGE_CART_QTY",
                                payload:{
                                  id:item.product.qty,
                                  qty:parseInt(item.qty)
                                }
                              })}>
                            {[...Array(item.product.inStock).keys()].map((x) => (
                            <option key={x+1}>{x+1}</option>
                           ))} 
                       </Form.Control>
                    </Col>  */}
                    <Col md={2}>
                       <Button 
                           type="button"
                           variant="light"
                           onClick={() => dispatch({
                            type:"REMOVE_FROM_CART",
                            payload:item
                           })}>
                            <AiFillDelete fontSize="20px" />
                       </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            } 
        </ListGroup>
        
        
     </div>

     
     <div className='filters summary'>
       <span className='title'>
        Subtotal ({ state.cart.length}) items
       </span>
       <span style={{fontWeight:700,fontSize:20}}>
      Total: $ {Total}
       </span>
       <Button type="button" disabled={state.cart.length == 0}>
           Proceed to Checkout
       </Button>
     </div>
  </div>
  )
}

export default Card
