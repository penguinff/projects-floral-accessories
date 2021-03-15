import styles from './directory-item.module.scss';

const DirectoryItem = ({ item }) => (
  <div className={styles.directoryItem}>
    <img src={item.imageUrl} alt='directory' className={styles.image}/>
    <span>{item.title}</span>
  </div>
);

export default DirectoryItem;