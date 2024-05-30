import { useHistory } from 'react-router-dom';

import { directoryData } from '../directory/directory-data';

import styles from './header-directory.module.scss';
import { useTranslation } from 'react-i18next';

const HeaderDirectory = ({ setShowDirectory }) => {
  const {i18n} = useTranslation();

  const history = useHistory();

  return (
    <nav className={styles.headerDirectory}>
      {directoryData.items.map(item => (
        <div 
          className={styles.directoryItem} 
          key={item.id}
          onClick={() => {
            history.push(`/shop/${item.routeName}`);
            setShowDirectory(false);
          }}
        >
          <img src={item.imageUrl} alt={item.title} />
          <span>
            {i18n.language === 'zh' ? item.zhTitle : item.title}
          </span>
        </div>
      ))}
    </nav>
  )
};

export default HeaderDirectory;