import React, { useContext } from 'react';
import { Cart } from '../context/Context';
import SingleProduct from '../singleProduct/SingleProduct';
import Filters from '../filters/Filters';
import '../../styles.css';

function Home() {
  const myContext = useContext(Cart);
  const {
    state: { products },
    filterState: { sort, byStock, byDelivery, byRating, searchQuery },
  } = myContext;
// console.log( { sort, byStock, byDelivery, byRating, searchQuery });
  const transformProducts = () => {
    let sortProducts = products;
    if (sort) {
      sortProducts = sortProducts.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }
    if (byDelivery) {
      sortProducts = sortProducts.filter((a) => a.fastDelivery == true);
    }
    if (!byStock) {
      sortProducts = sortProducts.filter((a) => a.inStock != 0);
    }
    // console.log(sortProducts);
    return sortProducts;
  };

  const sortedProducts = transformProducts();

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {sortedProducts.map((item) => (
          <SingleProduct product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
