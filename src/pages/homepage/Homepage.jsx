import styles from './homepage.module.scss';
import Carousel from '../../components/carousel/Carousel';
import ProductsPreview from '../../components/products-preview/ProductsPreview';
import OurStory from '../../components/our-story/OurStory';
import Directory from '../../components/directory/Directory';

const Homepage = () => (
  <div className={styles.homepage}>
    <Carousel />
    <ProductsPreview />
    <OurStory />
    <Directory />
  </div>
);

export default Homepage;