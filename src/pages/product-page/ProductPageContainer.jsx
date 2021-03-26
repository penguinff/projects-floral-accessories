import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors';

import WithSpinner from '../../components/with-spinner/WithSpinner';
import ProductPage from './ProductPage';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const ProductPageContainer = connect(mapStateToProps)(WithSpinner(ProductPage));

export default ProductPageContainer;