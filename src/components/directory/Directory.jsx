import DirectoryItem from '../directory-item/DirectoryItem';
import { directoryData } from './directory-data';

import styles from './directory.module.scss';

const Directory = () => (
  <div className={styles.directory}>
    <div className={styles.directoryTitle}>
      <span>
        {directoryData.title}
      </span>
    </div>

    <div className={styles.directoryContainer}>
      {directoryData.items.map((item, index) => (
        <DirectoryItem item={item} key={item.id} />
      ))}
    </div>
  </div>
);

export default Directory;