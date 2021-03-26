import { Link } from 'react-router-dom';

import styles from './popup-message.module.scss';

const PopupMessage = () => (
  <div className={styles.popupMessage}>
    <span>已新增至你的願望清單</span>
    <Link to='/user-profile/my-wishlist'>
      <span className={styles.link}>查看願望清單</span>
    </Link>
  </div>
);

export default PopupMessage;