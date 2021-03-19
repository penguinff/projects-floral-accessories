import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors'

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import styles from './collections-overview-page.module.scss';

const CollectionsOverviewPage = ({ location, collections }) => (
  <div className={styles.collectionsOverviewPage}>
    <Breadcrumb location={location} />
    <div className={styles.previews}>
      {collections.map(({ id, ...otherCollectionProps }) => 
        <CollectionPreview key={id} {...otherCollectionProps} />)}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverviewPage);