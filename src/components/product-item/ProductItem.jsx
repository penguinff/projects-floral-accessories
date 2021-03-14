import styles from './product-item.module.scss';

import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import { ReactComponent as AddCartIcon } from '../../assets/addcart-icon.svg';

const ProductItem = ({ item }) => (
  <div className={styles.productItem}>
    <img src={item.imageUrl} alt='product' className={styles.image} />
    <span className={styles.productName}>{item.title}</span>
    <span className={styles.productPrice}>{`NT$${item.price}`}</span>
    <div className={styles.icons}>
      <FavoriteIcon />
      <AddCartIcon />
    </div>
  </div>
);

export default ProductItem;