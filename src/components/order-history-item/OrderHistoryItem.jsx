import { useState } from 'react';

import CartItem from '../cart-item/CartItem';

import styles from './order-history-item.module.scss';

import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down-icon.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/arrow-up-icon.svg';

const OrderHistoryItem = ({order}) => {
  const [isItemsHidden, setIsItemsHidden] = useState(true);
  const { orderRefNum, items, time, total } = order;
  const date = new Date(time.seconds*1000).toLocaleDateString();

  return (
    <div className={styles.orderHistoryItem}>
      <div className={styles.title} onClick={() => setIsItemsHidden(!isItemsHidden)}>
        <span>訂單日期：{date}</span>
        <span>訂單編號：{orderRefNum}</span>
        <div className={styles.button}>
          <span>{isItemsHidden ? <ArrowDownIcon /> : <ArrowUpIcon />}</span><span>訂單詳情</span>
        </div>
      </div>
      <div className={styles.details} hidden={isItemsHidden}>
        商品：
        <div className={styles.items}>
          {items.map(item => <CartItem key={item.id} cartItem={item}/>)}
        </div>
        <div className={styles.total}>
          訂單總金額： NT${total.toLocaleString()}
        </div>
      </div>
    </div>
  )
};

export default OrderHistoryItem;