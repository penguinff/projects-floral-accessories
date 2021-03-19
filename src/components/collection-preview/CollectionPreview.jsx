import { withRouter } from 'react-router-dom';

import ProductItem from '../product-item/ProductItem';

import { ReactComponent as SeeMoreIcon } from '../../assets/angle-double-right-icon.svg';

import styles from './collection-preview.module.scss';

const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <div className={styles.collectionPreview}>
    <div className={styles.titleGroup}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.seeMore}>
        <SeeMoreIcon onClick={() => history.push(`${match.path}/${routeName}`)} />
      </div>
    </div>
    <div className={styles.preview}>
      {
        items
          .filter((item, index) => index < 4)
          .map(item => <ProductItem key={item.id} item={item} />)
      }
    </div>
  </div>
);

export default withRouter(CollectionPreview);