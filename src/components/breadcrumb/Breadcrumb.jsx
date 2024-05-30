import { matchRoutes } from 'react-router-config';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../routes';

import styles from './breadcrumb.module.scss';
import { useTranslation } from 'react-i18next';

const Breadcrumb = ({ onMatchedRoutes }) => {
  const {i18n} = useTranslation();

  const { pathname } = useLocation();

  // get an array of matched routes
  let matchedRoutes = matchRoutes(routes, pathname);

  // use the onMatchedRoutes function to modify breadcrumb on pages
  if (typeof onMatchedRoutes === 'function') {
    matchedRoutes = onMatchedRoutes(matchedRoutes);
  }

  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumbList}>
        {matchedRoutes.map((matchedRoute, index) => {
          const { path, breadcrumbName, enBreadcrumbName } = matchedRoute.route;

          // check whether the path is the Page path which user currently at, if yes, isActive = true
          const isActive = path === pathname;

          // if the path === the current Page path, not showing <link/>
          return isActive ? (
            <li key={index} className={styles.breadcrumbItem}>
              {i18n.language === 'zh' ? breadcrumbName : enBreadcrumbName}
            </li>
          ) : (
            <li key={index} className={styles.breadcrumbItem}>
              <Link to={path}>{i18n.language === 'zh' ? breadcrumbName : enBreadcrumbName}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
};

export default Breadcrumb;