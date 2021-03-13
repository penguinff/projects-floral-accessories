import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
