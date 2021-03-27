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
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 6
  },
  smallDesktop: {
    breakpoint: { max: 1600, min: 1100 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1100, min: 800 },
    items: 4
  },
  smallTablet: {
    breakpoint: { max: 800, min: 530 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 2
  }
};

const ProductsPreview = ({ collections }) => {
  // create New Arrival Array from shop collections
  let newArrivalArray = [];
  collections.forEach(collection => {
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