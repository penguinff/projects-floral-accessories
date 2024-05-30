import { useTranslation } from 'react-i18next';
import styles from './sort-bar.module.scss';

const SortBar = ({ total, setProductOrder }) => {
  const {t} = useTranslation();

  const handleChange = (event) => {
    setProductOrder(event.target.value);
  }

  return (
    <div className={styles.sortBar}>
      <div className={styles.total}>{total} {t('件商品')}</div>
      <div className={styles.select}>
        <select name='sort' id='sort' onChange={handleChange}>
          <option hidden>{t('排序')}</option>
          <option value='ascending'>{t('價格低至高')}</option>
          <option value='descending'>{t('價格高至低')}</option>
        </select>
      </div>
    </div>
  )
}

export default SortBar;