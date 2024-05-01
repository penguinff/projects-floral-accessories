import { useSelector } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors'

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import styles from './collections-overview-page.module.scss';

const CollectionsOverviewPage = ({ location }) => {
  // react-redux hooks
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className={styles.collectionsOverviewPage}>
      <Breadcrumb location={location} />
      <div className={styles.previews}>
        {collections.map(({ id, ...otherCollectionProps }) => 
          <CollectionPreview key={id} {...otherCollectionProps} />)}
      </div>
    </div>
  )
};

export default CollectionsOverviewPage;