import styles from './collection-page.module.scss';

const CollectionPage = ({ match }) => (
  <div className={styles.collectionPage}>
    Collection Page
    {match.params.collectionId}
  </div>
);

export default CollectionPage;