import { useTranslation } from 'react-i18next';
import ErrorMessage from '../../components/error-message/ErrorMessage';

import styles from './under-construction-page.module.scss';

const UnderConstructionPage = () => {
    const {t} = useTranslation();

  return (
    <section className={styles.underConstructionPage}>
      <ErrorMessage message={t('此頁面還在建立中')} />
    </section>
  )
}

export default UnderConstructionPage;