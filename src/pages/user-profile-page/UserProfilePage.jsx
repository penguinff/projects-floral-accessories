import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { signOutStart } from '../../redux/user/user-actions';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CustomButton from '../../components/custom-button/CustomButton';

import styles from './user-profile-page.module.scss';

const UserProfilePage = ({ location, signOutStart, currentUser }) => (
  <div className={styles.userProfilePage}>
    <Breadcrumb location={location} />
    User Profile Page
    {currentUser.displayName}
    <CustomButton onClick={signOutStart}>
      登出
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfilePage));