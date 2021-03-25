import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectWishlistItems } from '../../redux/wishlist/wishlist-selectors';

import WishlistItem from '../../components/wishlist-item/WishlistItem';

import styles from './my-wishlist-page.module.scss';

const MyWishlistPage = ({ wishlistItems }) => (
  <div className={styles.myWishlistPage}>
    <h1>我的願望清單</h1>
    <h2>{wishlistItems.length}件商品</h2>
    <div className={styles.wishlistItems}>
      {wishlistItems.map(wishlistItem => <WishlistItem wishlistItem={wishlistItem} />)}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  wishlistItems: selectWishlistItems
})

export default connect(mapStateToProps)(MyWishlistPage);