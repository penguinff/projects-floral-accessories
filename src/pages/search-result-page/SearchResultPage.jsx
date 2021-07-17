import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAllProductsArray } from '../../redux/shop/shop-selectors';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import SortBar from '../../components/sort-bar/SortBar';
import ProductItem from '../../components/product-item/ProductItem';

import styles from './search-result-page.module.scss';

const SearchResultPage = ({ location, allProductsArray }) => {
  const [productOrder, setProductOrder] = useState(null);

  const filteredArray = allProductsArray.filter(product => 
    product.name.includes(location.state.searchText)
  )

  const sortedItems = [...filteredArray].sort((a, b) => {
    switch (productOrder) {
      case 'ascending':
        return a.price - b.price;
      case 'descending':
        return b.price - a.price;
      default:
        return filteredArray;
    }
  })

  return (
    <div className={styles.searchResultPage}>
      <Breadcrumb location={location} />
      <div className={styles.searchResult}>
        {location.state.searchText ? 
          (filteredArray.length ?
            <h2>{`搜尋關於 "${location.state.searchText}" 的結果`}</h2>
            :
            <h2>{`查無相關 "${location.state.searchText}" 的結果`}</h2>)
          : <h2>全部商品</h2>
        }
      </div>
      {filteredArray.length ? 
        <SortBar total={filteredArray.length} setProductOrder={setProductOrder} />
      :
        null
      }
      <div className={styles.collectionItems}>
        {sortedItems.map(item => 
          <ProductItem key={item.id} item={item} />  
        )}
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  allProductsArray: selectAllProductsArray
})

export default connect(mapStateToProps)(SearchResultPage);