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

  const { title, items, banner } = collection;

  return (
    <div className={styles.collectionPage}>
      <div className={styles.collectionPageGroup}>
        <div className={styles.collectionBanner}>
          <img src={banner} alt='title banner' />
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