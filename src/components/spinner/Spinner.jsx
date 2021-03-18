import { ReactComponent as LeafSpinner } from '../../assets/leaf-spinner.svg';

import styles from './spinner.module.scss';

const Spinner = () => (
  <div className={styles.spinnerOverlay}>
    <div className={styles.spinnerContainer}>
      <LeafSpinner />
      <pre>Loading...</pre>
    </div>
  </div>
);

export default Spinner;