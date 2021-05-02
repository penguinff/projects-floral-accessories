import { Link, withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';

import styles from './error-message.module.scss';

import { ReactComponent as LeafGreenSpinner } from '../../assets/leaf-green-spinner.svg';

const ErrorMessage = ({ message }) => (
  <div className={styles.errorMessageOverlay}>
    <div className={styles.errorMessageContainer}>
      <LeafGreenSpinner />
      <pre>{message}</pre>
      <Link to='/'><CustomButton>返回主頁</CustomButton></Link>
    </div>
  </div>
);

export default withRouter(ErrorMessage);