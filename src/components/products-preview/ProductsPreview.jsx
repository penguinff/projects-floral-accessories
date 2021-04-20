import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { selectNewArrival } from '../../redux/shop/shop-selectors';

import ProductItem from '../product-item/ProductItem';

import styles from './products-preview.module.scss';

import { ReactComponent as BubbleSpinner } from '../../assets/bubble-spinner.svg';

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
    breakpoint: { max: 1100, min: 600 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2
  }
};

const ProductsPreview = ({ newArrivalArray }) => (
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
      : <BubbleSpinner />
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  newArrivalArray: selectNewArrival
});

export default connect(mapStateToProps)(ProductsPreview);