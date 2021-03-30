import ErrorMessage from '../../components/error-message/ErrorMessage';

import styles from './under-construction-page.module.scss';

const UnderConstructionPage = () => (
  <section className={styles.underConstructionPage}>
    <ErrorMessage message='此頁面還在建立中' />
  </section>
);

export default UnderConstructionPage;