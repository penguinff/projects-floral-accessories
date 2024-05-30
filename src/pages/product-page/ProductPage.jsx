import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import Magnifier from 'react-magnifier';

import { selectProduct } from '../../redux/shop/shop-selectors';
import { selectWishlistItems } from '../../redux/wishlist/wishlist-selectors';
import { addItem, toggleCartHidden } from '../../redux/cart/cart-slice';
import { toggleWishlist, toggleMessageHidden } from '../../redux/wishlist/wishlist-slice';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CustomButton from '../../components/custom-button/CustomButton';
import ErrorMessage from '../../components/error-message/ErrorMessage';

import styles from './product-page.module.scss';

import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import { useTranslation } from 'react-i18next';

const ProductPage = () => {
  const {t, i18n} = useTranslation();

  const history = useHistory();
  const { url } = useRouteMatch();
  const { collectionId, productId } = useParams();

  // react-redux hooks
  const dispatch = useDispatch();
  const product = useSelector(selectProduct(collectionId, productId));
  const wishlistItems = useSelector(selectWishlistItems);

  if (!product) return (<ErrorMessage message={t('此頁面不存在')} />);

  const { details, id, imageUrl, name, price, enName, enDetails } = product;
  const existingWishlistItem = wishlistItems.find(wishlistItem => wishlistItem.id === id);
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      ...matchedRoutes,
      {
        route: {
          path: `${url}`,
          breadcrumbName: name,
          enBreadcrumbName: enName
        }
      }
    ]
  };

  return (
    <div className={styles.productPage}>
      <Breadcrumb onMatchedRoutes={onMatchedRoutes} />
      <div className={styles.productInfo}>
        <div className={styles.left}>
          <Magnifier src={imageUrl} alt='product' />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>{i18n.language === 'zh' ? name : enName}</h2>
            <FavoriteIcon 
              className={existingWishlistItem && styles.onWishlist}
              onClick={() => {
                dispatch(toggleWishlist(product));
                !existingWishlistItem && dispatch(toggleMessageHidden(false));
              }}
            />
          </div>
          <div className={styles.details}>
            <h3>{t('商品特色')}</h3>
            <ul>
              {
                i18n.language === 'zh' ?
                details.map((detail, index) => <li key={index}>{detail}</li>) :
                enDetails.map((detail, index) => <li key={index}>{detail}</li>)
              }
            </ul>
          </div>
          <h2 className={styles.price}>
            NT${price.toLocaleString()}
          </h2>
          <div className={styles.buttons}>
            <CustomButton onClick={() => {
              dispatch(addItem(product));
              dispatch(toggleCartHidden(false));
            }}>
              {t('新增至購物車')}
            </CustomButton>
            <CustomButton
              onClick={() => {
                dispatch(addItem(product));
                history.push('/checkout');
              }}
            >
              {t('立即結賬')}
            </CustomButton>
          </div>
        </div>
      </div>
      <div className={styles.productDetails}>
        <div className={styles.title}>
          <span>Product Details</span>
        </div>
        <div className={styles.details}>
          <div className={styles.images}>
            <img src={imageUrl} alt='product' />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;