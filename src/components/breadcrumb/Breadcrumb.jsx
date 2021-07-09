import { matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from '../../routes';

import styles from './breadcrumb.module.scss';

const Breadcrumb = ({ location, onMatchedRoutes }) => {
  let matchedRoutes = matchRoutes(routes, location.pathname);

  if (typeof onMatchedRoutes === 'function') {
    matchedRoutes = onMatchedRoutes(matchedRoutes);
  }

  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumbList}>
        {matchedRoutes.map((matchedRoute, index) => {
          const { path, breadcrumbName } = matchedRoute.route;
          const isActive = path === location.pathname;
          return isActive ? (
            <li key={index} className={styles.breadcrumbItem}>
              {breadcrumbName}
            </li>
          ) : (
            <li key={index} className={styles.breadcrumbItem}>
              <Link to={path}>{breadcrumbName}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
};

export default Breadcrumb;