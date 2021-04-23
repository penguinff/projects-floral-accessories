import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors';

import WithSpinner from '../../components/with-spinner/WithSpinner';
import SearchResultPage from './SearchResultPage';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const SearchResultPageContainer = connect(mapStateToProps)(WithSpinner(SearchResultPage));

export default SearchResultPageContainer;