import { matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from '../../routes';

import styles from './breadcrumb.module.scss';

const Breadcrumb = ({ location }) => {
  const matchedRoutes = matchRoutes(routes, location.pathname);

  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link to='/'>Home</Link>
        </li>
        {matchedRoutes.map((matchedRoute, index) => {
          const { path, breadcrumbName } = matchedRoute.route;
          return (
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