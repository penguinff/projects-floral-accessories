import styles from './product-item.module.scss';

const ProductItem = ({ item }) => (
  <div className={styles.productItem}>
    <div className={styles.productImageContainer}>
      <img src={item.imageUrl} alt='product' className={styles.image} />
    </div>
    <div className={styles.productInfoContainer}>
      <span>{item.title}</span>
      <span>{`NT$${item.price}`}</span>
    </div>
  </div>
);

export default ProductItem;