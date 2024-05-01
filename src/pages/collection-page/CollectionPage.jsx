import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectNewArrival, selectCollection } from '../../redux/shop/shop-selectors';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import SortBar from '../../components/sort-bar/SortBar';
import ProductItem from '../../components/product-item/ProductItem';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import styles from './collection-page.module.scss';

const CollectionPage = ({ match, location }) => {
  const [productOrder, setProductOrder] = useState(null);

  // react-redux hooks
  const collection = useSelector(match.params.collectionId === 'new-arrival' ? selectNewArrival : selectCollection(match.params.collectionId));

  if (!collection) return (<ErrorMessage message='此頁面不存在' />);

  let collectionData = {};
  if (match.params.collectionId === 'new-arrival') {
    // create a new-arrival object
    collectionData = {
      title: 'New Arrival',
      banner: 'https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      items: collection,
    }
  } else {
    collectionData = collection;
  }

  const { title, items, banner } = collectionData;

  const sortedItems = [...items].sort((a, b) => {
    switch (productOrder) {
      case 'ascending':
        return a.price - b.price;
      case 'descending':
        return b.price - a.price;
      default:
        return collection;
    }
  })

  return (
    <div className={styles.collectionPage}>
      <div className={styles.collectionPageGroup}>
        <div className={styles.collectionBanner}>
          <img src={banner} alt='title banner' />
          <div className={styles.title}>{title}</div>
        </div>
        <Breadcrumb location={location} />
        <SortBar total={items.length} setProductOrder={setProductOrder} />
        <div className={styles.collectionItems}>
          {sortedItems.map(item => 
            <ProductItem key={item.id} item={item} />  
          )}
        </div>
      </div>
    </div>
  )
};

export default CollectionPage;