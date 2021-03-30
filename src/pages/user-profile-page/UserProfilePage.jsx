import { Switch, Route } from 'react-router-dom';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

import UserProfileSidebar from '../../components/user-profile-sidebar/UserProfileSideBar';
import MyWishlistPage from '../../pages/my-wishlist-page/MyWishlistPage';
import MyOrderHistoryPage from '../../pages/my-order-history-page/MyOrderHistoryPage';

import styles from './user-profile-page.module.scss';

const UserProfilePage = ({ match, location }) => (
  <section className={styles.userProfilePage}>
    <Breadcrumb location={location} />
    <div className={styles.components}>
      <UserProfileSidebar />
      <Switch>
        <Route exact path={`${match.path}/my-wishlist`} component={MyWishlistPage} />
        <Route exact path={`${match.path}/my-order-history`} component={MyOrderHistoryPage} />
      </Switch>
    </div>
  </section>
)

export default UserProfilePage;