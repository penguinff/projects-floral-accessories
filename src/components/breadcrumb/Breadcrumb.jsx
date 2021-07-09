import { matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from '../../routes';

import styles from './breadcrumb.module.scss';

const Breadcrumb = ({ location, onMatchedRoutes }) => {
  // get an array of matched routes
  let matchedRoutes = matchRoutes(routes, location.pathname);

  // use the onMatchedRoutes function to modify breadcrumb on pages
  if (typeof onMatchedRoutes === 'function') {
    matchedRoutes = onMatchedRoutes(matchedRoutes);
  }

  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumbList}>
        {matchedRoutes.map((matchedRoute, index) => {
          const { path, breadcrumbName } = matchedRoute.route;

          // check whether the path is the Page path which user currently at, if yes, isActive = true
          const isActive = path === location.pathname;

          // if the path === the current Page path, not showing <link/>
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