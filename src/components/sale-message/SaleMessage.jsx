import styles from './sale-message.module.scss';

import { ReactComponent as ClearIcon } from '../../assets/clear-icon.svg';

const SaleMessage = () => (
  <div className={styles.saleMessage}>
    <span className={styles.messageWord}>
      只有三天 ♡ 全館滿千免運費
    </span>
    <span className={styles.messageClear}>
      <ClearIcon />
    </span>
  </div>
);

export default SaleMessage;