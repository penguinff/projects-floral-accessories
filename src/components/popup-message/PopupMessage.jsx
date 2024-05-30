import { Link } from 'react-router-dom';

import styles from './popup-message.module.scss';
import { useTranslation } from 'react-i18next';

const PopupMessage = () => {
  const {t} = useTranslation();

  return (
    <div className={styles.popupMessage}>
      <span>{t('已新增至你的願望清單')}</span>
      <Link to='/user-profile/my-wishlist'>
        <span className={styles.link}>{t('查看願望清單')}</span>
      </Link>
    </div>
  )
}

export default PopupMessage;