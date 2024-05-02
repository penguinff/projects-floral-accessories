import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { signOutStart, checkUserSession } from '../../redux/user/user-slice';

import CustomButton from '../custom-button/CustomButton';

import UserFemaleLogo from '../../assets/user-female.png';
import GuestLogo from '../../assets/guest.png';

import styles from './user-profile-sidebar.module.scss';

const UserProfileSidebar = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  // react-redux hooks
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  
  return (
    <nav className={styles.userProfileSideBar}>
      {currentUser ? 
        <div className={styles.signedIn}>
          <div className={styles.userInfo}>
            <img src={UserFemaleLogo} className={styles.userLogo} alt='user logo'/>
            {currentUser.displayName}
          </div>
          <div className={styles.list}>
            <li>我的賬戶</li>
            <li onClick={() => {
                history.push(`${path}/my-order-history`);
                dispatch(checkUserSession());
            }}>
              訂單記錄
            </li>
            <li onClick={() => history.push(`${path}/my-wishlist`)}>願望清單</li>
            <li onClick={() => dispatch(signOutStart())}>登出</li>
          </div>
        </div>
        :
        <div className={styles.notSignedIn}>
          <div className={styles.userInfo}>
            <img src={GuestLogo} className={styles.userLogo} alt='user logo'/>
            Guest
          </div>
          <p>登入即可永久儲存願望清單，並在任何裝置上管理。</p>
          <CustomButton onClick={() => history.push('/sign-in')}>登入</CustomButton>
        </div>
      }
    </nav>
  )
}

export default UserProfileSidebar;