import ErrorMessage from '../../components/error-message/ErrorMessage';

import styles from './under-construction-page.module.scss';

const UnderConstructionPage = () => (
  <div className={styles.underConstructionPage}>
    <ErrorMessage message='此頁面還在建立中' />
  </div>
);

export default UnderConstructionPage;