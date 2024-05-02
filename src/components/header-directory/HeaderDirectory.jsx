import { useHistory } from 'react-router-dom';

import { directoryData } from '../directory/directory-data';

import styles from './header-directory.module.scss';

const HeaderDirectory = ({ setShowDirectory }) => {
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
          <span>{item.zhTitle}</span>
        </div>
      ))}
    </nav>
  )
};

export default HeaderDirectory;