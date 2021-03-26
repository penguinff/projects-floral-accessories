import { connect } from 'react-redux';
import Magnifier from 'react-magnifier';

import { selectProduct } from '../../redux/shop/shop-selectors';
import { selectWishlistItems } from '../../redux/wishlist/wishlist-selectors';
import { addItem, toggleCartHidden } from '../../redux/cart/cart-actions';
import { toggleWishlist, toggleMessageHidden } from '../../redux/wishlist/wishlist-actions';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CustomButton from '../../components/custom-button/CustomButton';

import styles from './product-page.module.scss';

import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';

const ProductPage = ({ match, location, history, product, wishlistItems, addItem, toggleCartHidden, toggleWishlist, toggleMessageHidden }) => {
  const { details, id, imageUrl, name, price } = product;
  const existingWishlistItem = wishlistItems.find(wishlistItem => wishlistItem.id === id);
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      ...matchedRoutes,
      {
        route: {
          path: `${match.url}`,
          breadcrumbName: name
        }
      }
    ]
  };

  return (
    <div className={styles.productPage}>
      <Breadcrumb location={location} onMatchedRoutes={onMatchedRoutes} />
      <div className={styles.productInfo}>
        <div className={styles.left}>
          <Magnifier src={imageUrl} alt='product image' />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <span>{name}</span>
            <FavoriteIcon 
              className={existingWishlistItem && styles.onWishlist}
              onClick={() => {
                toggleWishlist(product);
                !existingWishlistItem && toggleMessageHidden(false);
              }}
            />
          </div>
          <div className={styles.details}>
            <h4>商品特色：</h4>
            <ul>
              {details.map(detail => <li>{detail}</li>)}
            </ul>
          </div>
          <div className={styles.price}>
            NT${price.toLocaleString()}
          </div>
          <div className={styles.buttons}>
            <CustomButton onClick={() => {
              addItem(product);
              toggleCartHidden(false);
            }}>
              新增至購物車
            </CustomButton>
            <CustomButton
              onClick={() => {
                addItem(product);
                history.push('/checkout');
              }}
            >
              立即結賬
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.collectionId, ownProps.match.params.productId)(state),
  wishlistItems: selectWishlistItems(state)
})

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  toggleCartHidden: isHidden => dispatch(toggleCartHidden(isHidden)),
  toggleWishlist: item => dispatch(toggleWishlist(item)),
  toggleMessageHidden: isHidden => dispatch(toggleMessageHidden(isHidden))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);