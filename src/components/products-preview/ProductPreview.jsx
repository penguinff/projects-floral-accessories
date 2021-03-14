import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './product-preview.module.scss';
import ProductItem from '../product-item/ProductItem';

// product preview data --> will move to redux
const productPreviewData = {
  title: 'New Arrival',
  items: [
    {
      id: 0,
      imageUrl: 'https://images.unsplash.com/photo-1551844533-144ea0d19c93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
      title: '玩味木頭流蘇耳環',
      price: 590
    },
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1609245340409-cad2474ab1d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2082&q=80',
      title: '復古水晶項鏈',
      price: 1850
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1608543837489-0fab463c925e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      title: '鍍金葉子手鐲',
      price: 950
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
      title: '字母指環',
      price: 850
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1609245340409-cad2474ab1d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2082&q=80',
      title: '復古水晶項鏈',
      price: 1850
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1608543837489-0fab463c925e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      title: '鍍金葉子手鐲',
      price: 950
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
      title: '字母指環',
      price: 850
    },
  ]
}

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
    breakpoint: { max: 1400, min: 1000 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1000, min: 800 },
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

const ProductPreview = () => (
  <div className={styles.productPreview}>
    <div className={styles.previewTitle}>
      <span>
        {productPreviewData.title}
      </span>
    </div>

    <Carousel 
      swipeable={true}
      removeArrowOnDeviceType={['mobile', 'tablet']}
      responsive={responsive} 
      className={styles.previewContainer}
    >
      {productPreviewData.items.map((item, index) => (
        <ProductItem item={item} key={item.id}/>
      ))}
    </Carousel>
  </div>
);

export default ProductPreview;