import styles from './homepage.module.scss';
import Carousel from '../../components/carousel/Carousel';
import ProductPreview from '../../components/products-preview/ProductPreview';

const Homepage = () => (
  <div className={styles.homepage}>
    <Carousel />
    <ProductPreview />
  </div>
);

export default Homepage;