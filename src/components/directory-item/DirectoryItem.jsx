import { withRouter } from 'react-router-dom';

import styles from './directory-item.module.scss';

const DirectoryItem = ({ item, history }) => {
  const routeName = encodeURI(item.title.toLowerCase());

  return (
    <div 
      className={styles.directoryItem}
      onClick={() => history.push(`/shop/${routeName}`)}
    >
      <img src={item.imageUrl} alt='directory' className={styles.image}/>
      <span>{item.title}</span>
    </div>
  )
};

export default withRouter(DirectoryItem);