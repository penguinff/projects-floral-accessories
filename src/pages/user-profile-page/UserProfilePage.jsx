import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

import UserProfileSidebar from '../../components/user-profile-sidebar/UserProfileSideBar';
import MyWishlistPage from '../../pages/my-wishlist-page/MyWishlistPage';
import MyOrderHistoryPage from '../../pages/my-order-history-page/MyOrderHistoryPage';

import styles from './user-profile-page.module.scss';

const UserProfilePage = () => {
  const { path } = useRouteMatch();

  return (
    <section className={styles.userProfilePage}>
      <Breadcrumb />
      <div className={styles.components}>
        <UserProfileSidebar />
        <Switch>
          <Route exact path={`${path}/my-wishlist`} component={MyWishlistPage} />
          <Route exact path={`${path}/my-order-history`} component={MyOrderHistoryPage} />
        </Switch>
      </div>
    </section>
  )
};

export default UserProfilePage;