import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './search.module.scss';

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { useTranslation } from 'react-i18next';

const Search = () => {
  const {t} = useTranslation();

  const history = useHistory();

  // local state
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchText, setSearchText] = useState('');

  // set toggle function
  const toggleSearchInput = () => setShowSearchInput(showSearchInput => !showSearchInput);

  // functions for the input
  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleSearchInput();
    history.push({
      pathname: '/search-result',
      state: { searchText } // pass the search text to search result page
    })
  }

  return (
    <div className={styles.search}>
      <SearchIcon className={styles.searchIcon} onClick={toggleSearchInput} />
      
      {showSearchInput &&
        <div className={styles.searchContainer}>
          <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input 
              className={styles.searchInput} 
              onChange={handleChange}
              value={searchText}
              placeholder={t('搜尋商品')}
              autoFocus
              onBlur={toggleSearchInput}
            />
          </form>
        </div>
      }
    </div>
  )
};

export default Search;