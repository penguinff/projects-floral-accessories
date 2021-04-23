import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './search.module.scss';

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

const Search = ({ history }) => {
  const [searchText, setSearchText] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSearchInput(!showSearchInput);
    history.push({
      pathname: '/search-result',
      state: { data: searchText }
    })
  }

  return (
    <div className={styles.search} tabIndex='0'>
      <SearchIcon 
        className={styles.searchIcon} 
        onClick={() => setShowSearchInput(!showSearchInput)} 
      />
      {showSearchInput ? 
        <div className={styles.searchContainer}>
          <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input 
              className={styles.searchInput} 
              onChange={handleChange}
              value={searchText}
              placeholder='搜尋商品'
              autoFocus 
            />
          </form>
          <div className={styles.background} onClick={() => setShowSearchInput(!showSearchInput)}></div>
        </div>
      : null
      }
    </div>
  )
};

export default withRouter(Search);