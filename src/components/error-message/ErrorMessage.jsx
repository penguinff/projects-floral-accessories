import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';

import styles from './error-message.module.scss';

import { ReactComponent as LeafGreenSpinner } from '../../assets/leaf-green-spinner.svg';
import { useTranslation } from 'react-i18next';

const ErrorMessage = ({ message }) => {
  const {t} = useTranslation();

  return (
    <div className={styles.errorMessageOverlay}>
      <div className={styles.errorMessageContainer}>
        <LeafGreenSpinner />
        <pre>{message}</pre>
        <Link to='/'><CustomButton>{t('返回主頁')}</CustomButton></Link>
      </div>
    </div>
  )
}

export default ErrorMessage;