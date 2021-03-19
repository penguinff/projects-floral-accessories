import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart-actions';

import styles from './product-item.module.scss';

import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import { ReactComponent as AddCartIcon } from '../../assets/addcart-icon.svg';

const ProductItem = ({ item, addItem }) => (
  <div className={styles.productItem}>
    <img src={item.imageUrl} alt='product' className={styles.image} />
    <span className={styles.productName}>{item.name}</span>
    <span className={styles.productPrice}>{`NT$${item.price}`}</span>
    <div className={styles.icons}>
      <FavoriteIcon />
      <AddCartIcon onClick={() => addItem(item)} />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductItem);