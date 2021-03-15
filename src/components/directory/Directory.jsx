import styles from './directory.module.scss';
import DirectoryItem from '../directory-item/DirectoryItem';

// directory data --> will move to redux
const directoryData = {
  title: 'Shop By Category',
  items: [
    {
      id: 0,
      imageUrl: 'https://images.unsplash.com/photo-1600758068900-3df44297875b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1009&q=80',
      title: 'Earrings',
    },
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      title: 'Necklaces',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1599357230525-d34c4e3ee6cb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
      title: 'Bracelets',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80',
      title: 'Rings',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1601938219471-fb3393955f15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      title: 'Hair Accessories',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1552399230-e073362b3bf4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      title: 'Hats',
    },
  ]
}

const Directory = () => (
  <div className={styles.directory}>
    <div className={styles.directoryTitle}>
      <span>
        {directoryData.title}
      </span>
    </div>

    <div className={styles.directoryContainer}>
      {directoryData.items.map((item, index) => (
        <DirectoryItem item={item} key={item.id}/>
      ))}
    </div>
  </div>
);

export default Directory;