import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/Spinner';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CustomButton from '../../components/custom-button/CustomButton';

import { signOutStart } from '../../redux/user/user-actions';

import styles from './user-profile-page.module.scss';

const UserProfilePage = ({ location, signOutStart }) => (
  <div className={styles.userProfilePage}>
    <Breadcrumb location={location} />
    User Profile Page
    <Spinner />
    <CustomButton onClick={signOutStart}>登出</CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(null, mapDispatchToProps)(withRouter(UserProfilePage));