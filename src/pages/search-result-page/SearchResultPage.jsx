import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { selectAllProductsArray } from '../../redux/shop/shop-selectors';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import SortBar from '../../components/sort-bar/SortBar';
import ProductItem from '../../components/product-item/ProductItem';

import styles from './search-result-page.module.scss';
import { useTranslation } from 'react-i18next';

const SearchResultPage = () => {
  const {t, i18n} = useTranslation();

  const location = useLocation();

  // react-redux hook
  const allProductsArray = useSelector(selectAllProductsArray);

  // local state for sort order
  const [productOrder, setProductOrder] = useState(null);

  // filter the allProductArray with the search text the user input
  const filteredArray = allProductsArray.filter(product => {
    if (i18n.language === 'zh') {
      return product.name.includes(location.state.searchText)
    } else {
      return product.enName.toLowerCase().includes(location.state.searchText.toLowerCase())
    }
  })

  // sort the filtered array
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
      <Breadcrumb />

      <div className={styles.searchResult}>
        {location.state.searchText ? 
          (filteredArray.length ?
            <h2>
              {t("搜尋關於 \"{{searchText}}\" 的結果", {searchText: location.state.searchText})}
            </h2>
            :
            <h2>
              {t("查無相關 \"{{searchText}}\" 的結果", {searchText: location.state.searchText})}
            </h2>
          )
          : 
          <h2>{t('全部商品')}</h2>
        }
      </div>

      {filteredArray.length > 0 && 
        <SortBar total={filteredArray.length} setProductOrder={setProductOrder} />
      }

      <div className={styles.collectionItems}>
        {sortedItems.map(item => 
          <ProductItem key={item.id} item={item} />  
        )}
      </div>
    </div>
  )
};

export default SearchResultPage;