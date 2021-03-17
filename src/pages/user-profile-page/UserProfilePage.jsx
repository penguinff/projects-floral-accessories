import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

import styles from './user-profile-page.module.scss';

const UserProfilePage = ({ location }) => (
  <div className={styles.userProfilePage}>
    <Breadcrumb location={location} />
    User Profile Page
  </div>
);

export default UserProfilePage;