import { useState } from 'react';

import styles from './sale-message.module.scss';

import { ReactComponent as ClearIcon } from '../../assets/clear-icon.svg';
import { useTranslation } from 'react-i18next';

const SaleMessage = () => {
  const {t} = useTranslation();

  const [hiddenSaleMessage, setHiddenSaleMessage] = useState(false);

  return (
    <div className={styles.saleMessage} hidden={hiddenSaleMessage}>
      <span className={styles.messageWord}>
        {t('只有三天 ♡ 全館滿千免運費')}
      </span>
      <span className={styles.messageClear}>
        <ClearIcon onClick={() => setHiddenSaleMessage(true)} />
      </span>
    </div>
  )
};

export default SaleMessage;