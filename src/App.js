import { renderRoutes } from 'react-router-config';

import routes from './routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </div>
  );
}

export default App;