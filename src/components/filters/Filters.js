import React ,{useState}from 'react'
import { Button ,Form} from 'react-bootstrap'
import Rating from '../rating/Rating';
import { useCart } from '../context/Context';

function Filters() {
    const [rate,setRate]= useState(2)
    const {filterState:{sort,
        byStock,
        byDelivery,
        byRating,
        searchQuery
      }, filterDispatch } = useCart()

    //  console.log({
    //     sort,
    //     byStock,
    //     byDelivery,
    //     byRating,
    //     searchQuery
    //   });
  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check
               inline 
               label="Ascending"
               name="group1"
               type="radio"
               id={`inline-1`}
               onChange={(i) => filterDispatch({type:"SORT_BY_PRICE",payload:"lowToHigh"})} 
               checked={sort=="lowToHigh" ? true:false}/>
        </span>
        <span>
            <Form.Check
               inline 
               label="Descending"
               name="group1"
               type="radio"
               id={`inline-2`} 
               onChange={(i) => filterDispatch({type:"SORT_BY_PRICE",payload:"highToLow"})} 
               checked={sort=="highToLow" ? true:false}/>
        </span>
        <span>
            <Form.Check
               inline 
               label="Include Out of Stock"
               name="group1"
               type="checkbox"
               id={`inline-3`}
               onChange={(i) => filterDispatch({type:"FILTER_BY_STOCK"})} 
               checked={byStock}
                />
        </span>
        <span>
            <Form.Check
               inline 
               label="fast Delivery only"
               name="group1"
               type="checkbox"
               id={`inline-4`} 
               onChange={(i) => filterDispatch({type:"FILTER_BY_DELIVERY"})} 
               checked={byDelivery}/>
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating:</label>
            <Rating rating={byRating} onClick={(i) => filterDispatch({type:"FILTER_BY_RATING",payload:i+1})} style={{cursor:"pointer"}} />
        </span>
        <Button variant='light' onClick={(i) => filterDispatch({type:"CLAER_FILTERS"})} >Clear Filters</Button>
      
    </div>
  )
}

export default Filters
