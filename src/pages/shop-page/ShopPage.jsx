import { lazy, Suspense } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import Spinner from '../../components/spinner/Spinner';
import styles from './shop-page.module.scss';

const CollectionsOverviewPageContainer = lazy(() => import('../collection-overview-page/CollectionsOverviewPageContainer'));
const CollectionPageContainer = lazy(() => import('../collection-page/CollectionPageContainer'));
const ProductPageContainer = lazy(() => import('../product-page/ProductPageContainer'));

const ShopPage = () => {
  const { path } = useRouteMatch();

  return (
    <section className={styles.shopPage}>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${path}`} component={CollectionsOverviewPageContainer} />
        <Route exact path={`${path}/:collectionId`} component={CollectionPageContainer} />
        <Route exact path={`${path}/:collectionId/:productId`} component={ProductPageContainer} />
      </Suspense>
    </section>
  )
};

export default ShopPage;