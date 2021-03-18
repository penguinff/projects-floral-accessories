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
      <Breadcrumb location={location} onMatchedRoutes={onMatchedRoutes} />
      <h2>{title}</h2>
      <div className={styles.collectionItems}>
        {items.map(item => 
          <ProductItem key={item.id} item={item} />  
        )}
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);