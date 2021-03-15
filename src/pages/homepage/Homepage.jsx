import styles from './homepage.module.scss';
import Carousel from '../../components/carousel/Carousel';
import ProductPreview from '../../components/products-preview/ProductPreview';
import OurStory from '../../components/our-story/OurStory';
import Directory from '../../components/directory/Directory';

const Homepage = () => (
  <div className={styles.homepage}>
    <Carousel />
    <ProductPreview />
    <OurStory />
    <Directory />
  </div>
);

export default Homepage;