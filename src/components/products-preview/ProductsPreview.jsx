import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';

import Spinner from '../spinner/Spinner';
import ProductItem from '../product-item/ProductItem';

import styles from './products-preview.module.scss';

// carousel responsive setting
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 5
  },
  smallDesktop: {
    breakpoint: { max: 1400, min: 1100 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1100, min: 800 },
    items: 3
  },
  smallTablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProductsPreview = ({ collections }) => {
  // create New Arrival Array from shop collections
  let newArrivalArray = [];
  collections.map(collection => {
    let numberOfItems = collection.items.length;
    let newItems = collection.items.filter((item, index) => index > numberOfItems - 3);
    newItems.map(newItem => newArrivalArray.push(newItem));
  });

  return (
    <div className={styles.productPreview}>
      <div className={styles.previewTitle}>
        <span>New Arrival</span>
      </div>
      {newArrivalArray.length ?
        <Carousel 
          removeArrowOnDeviceType={'mobile'}
          responsive={responsive} 
          className={styles.previewContainer}
        >
          {newArrivalArray.map((item, index) => (
            <ProductItem item={item} key={item.id}/>
          ))}
        </Carousel>
        : <Spinner />
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(ProductsPreview);