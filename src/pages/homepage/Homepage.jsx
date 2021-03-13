import styles from './homepage.module.scss';
import Carousel from '../../components/carousel/Carousel';

const Homepage = () => (
  <div className={styles.homepage}>
    <Carousel />
  </div>
);

export default Homepage;