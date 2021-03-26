import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../../components/spinner/Spinner';
import styles from './shop-page.module.scss';

const CollectionsOverviewPageContainer = lazy(() => import('../collection-overview-page/CollectionsOverviewPageContainer'));
const CollectionPageContainer = lazy(() => import('../collection-page/CollectionPageContainer'));
const ProductPageContainer = lazy(() => import('../product-page/ProductPageContainer'));

const ShopPage = ({ match }) => (
  <div className={styles.shopPage}>
    <Suspense fallback={<Spinner />}>
      <Route exact path={`${match.path}`} component={CollectionsOverviewPageContainer} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      <Route exact path={`${match.path}/:collectionId/:productId`} component={ProductPageContainer} />
    </Suspense>
  </div>
);

export default ShopPage;