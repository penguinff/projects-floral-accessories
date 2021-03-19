import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors';

import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionsOverviewPage from './CollectionsOverviewPage';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionOverviewPageContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverviewPage));

export default CollectionOverviewPageContainer;
