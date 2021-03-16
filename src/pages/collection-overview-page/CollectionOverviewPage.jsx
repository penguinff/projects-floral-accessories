import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import styles from './collection-overview-page.module.scss';

const CollectionOverview = ({ location }) => (
  <div className={styles.collectionOverviewPage}>
    <Breadcrumb location={location} />
    Collection Overview
  </div>
);

export default CollectionOverview;