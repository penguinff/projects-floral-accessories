import styles from './collection-page.module.scss';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const CollectionPage = ({ match, location }) => {
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

  return (
    <div className={styles.collectionPage}>
      <Breadcrumb location={location} onMatchedRoutes={onMatchedRoutes} />
      Collection Page
      {match.params.collectionId}
    </div>
  )
};

export default CollectionPage;