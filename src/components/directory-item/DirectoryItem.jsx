import { useHistory } from 'react-router-dom';

import styles from './directory-item.module.scss';

const DirectoryItem = ({ item }) => {
  const history = useHistory();

  return (
    <div 
      className={styles.directoryItem}
      onClick={() => history.push(`/shop/${item.routeName}`)}
    >
      <img src={item.imageUrl} alt='directory' />
      <span>{item.title}</span>
    </div>
  )
};

export default DirectoryItem;