import { withRouter } from 'react-router-dom';

import styles from './directory-item.module.scss';

const DirectoryItem = ({ item, history }) => (
  <div 
    className={styles.directoryItem}
    onClick={() => history.push(`/shop/${item.routeName}`)}
  >
    <img src={item.imageUrl} alt='directory' className={styles.image}/>
    <span>{item.title}</span>
  </div>
);

export default withRouter(DirectoryItem);