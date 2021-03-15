import { Route } from 'react-router-dom';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection-page/CollectionPage';
import styles from './shop-page.module.scss';

const ShopPage = ({ match, location }) => (
  <div className={styles.shopPage}>
    <Breadcrumb location={location}/>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;