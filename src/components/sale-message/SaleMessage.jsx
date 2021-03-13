import styles from './salemessage.module.scss';

import { ReactComponent as ClearIcon } from '../../assets/clear-icon.svg';

const SaleMessage = () => (
  <div className={styles.saleMessage}>
    <span className={styles.messageWord}>
      只有三天 ♡ 全館滿1500折100
    </span>
    <span className={styles.messageClear}>
      <ClearIcon />
    </span>
  </div>
);

export default SaleMessage;