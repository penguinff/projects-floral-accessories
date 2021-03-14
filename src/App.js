import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Footer from './components/footer/Footer';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
