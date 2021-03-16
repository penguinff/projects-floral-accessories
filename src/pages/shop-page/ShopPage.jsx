import { Route } from 'react-router-dom';

import CollectionOverview from '../collection-overview-page/CollectionOverviewPage';
import CollectionPage from '../collection-page/CollectionPage';
import styles from './shop-page.module.scss';

const ShopPage = ({ match }) => {

  return (
    <div className={styles.shopPage}>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;