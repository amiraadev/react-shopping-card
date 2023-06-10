import { FaShoppingCart } from 'react-icons/fa'
import {Container,Dropdown,FormControl,Navbar,Nav,Badge, Button} from "react-bootstrap";
import { Link, useLocation  } from "react-router-dom";
import { useCart } from "../context/Context";
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
  const {state,dispatch,filterDispatch} = useCart()
  const cartItems = state.cart.length
  // console.log(cartItems);
  return (
    <>
    
  <Navbar bg="dark" variant="dark" style={{height:80}}>
    <Container>

      <Navbar.Brand>
        <Link to="/" >Shopping Card</Link>
      </Navbar.Brand>

      <Navbar.Text className='search'>
         <FormControl style={{width:500}} placeholder="Search a product"  onChange={(e) => filterDispatch({type:"FILTER_BY_SEARCH",payload:e.target.value})} />
      </Navbar.Text>
      <Nav>
        <Dropdown>

            <Dropdown.Toggle style={{ marginLeft: '0', marginRight: '130px' }}>
                <FaShoppingCart color='white' fontSize='25px' />
                <Badge>{cartItems}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 300 }}>
            { cartItems > 0 ? (
               state.cart.map((prod) => (
                <>

                <span className='cartitem' key={prod.product.id}>
                    <img 
                      src={prod.product.image}
                      className="cartItemImg"
                      alt={prod.name}
                    />
                    <div className='cartItemDetail'>
                      <span>{prod.product.name}</span>
                      <span>$ {parseInt(prod.product.price.split(".")[0])}</span>
                    </div>
                    <AiFillDelete
                        fontSize="20px"
                        style={{cursor:"pointer"}}
                        onClick ={() => dispatch({
                          type:"REMOVE_FROM_CART",
                          payload:prod,

                        })}
                    />
                </span>
             
                </>
               ))
              

            ):(
              <span style={{padding:10}}>Cart is Empty</span>
            )}
            <Link to="/card">
                <Button style={{width:"95%",margin:"0 10px"}}>Go to Cart</Button>
            </Link>  
            </Dropdown.Menu>


        </Dropdown>
      </Nav>

    </Container>
  </Navbar>
 
    </>
  );
};

export default Header;

