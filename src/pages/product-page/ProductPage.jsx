import { connect } from 'react-redux';

import { selectProduct } from '../../redux/shop/shop-selectors';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

import styles from './product-page.module.scss';

const ProductPage = ({ match, location, product }) => {
  const { details, id, imageUrl, name, price } = product;
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      ...matchedRoutes,
      {
        route: {
          path: `${match.url}`,
          breadcrumbName: name
        }
      }
    ]
  };


  return (
    <div className={styles.productPage}>
      <Breadcrumb location={location} onMatchedRoutes={onMatchedRoutes} />
      {name}
    
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.collectionId, ownProps.match.params.productId)(state)
})

export default connect(mapStateToProps)(ProductPage);