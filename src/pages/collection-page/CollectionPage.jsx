import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop-selectors';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import ProductItem from '../../components/product-item/ProductItem';
import styles from './collection-page.module.scss';

const CollectionPage = ({ match, location, collection }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      ...matchedRoutes,
      {
        route: {
          path: `${match.url}`,
          breadcrumbName: match.params.collectionId
        }
      }
    ]
  };

  const { title, items } = collection;

  return (
    <div className={styles.collectionPage}>
      <div className={styles.collectionPageGroup}>
        <div className={styles.collectionBanner}>
          <img src='https://images.unsplash.com/photo-1523270237992-7772a8344078?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='title' />
          <div className={styles.title}>{title}</div>
        </div>
        <Breadcrumb location={location} onMatchedRoutes={onMatchedRoutes} />
        <div className={styles.collectionItems}>
          {items.map(item => 
            <ProductItem key={item.id} item={item} />  
          )}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);