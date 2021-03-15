import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection-page/CollectionPage';
import styles from './shop-page.module.scss';

const ShopPage = ({ match }) => (
  <div className={styles.shopPage}>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;