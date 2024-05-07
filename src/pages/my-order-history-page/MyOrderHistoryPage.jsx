import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user-selectors';

import OrderHistoryItem from '../../components/order-history-item/OrderHistoryItem';

import styles from './my-order-history-page.module.scss';

const MyOrderHistoryPage = () => {
  // react-redux hooks
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className={styles.myOrderHistoryPage}>
      <h2>我的訂單記錄</h2>
      {currentUser && Object.keys(currentUser.orders).length ? 
        <div>
          <h3>{Object.keys(currentUser.orders).length}項訂單</h3>
          <div className={styles.orderList}>
            {Object.keys(currentUser.orders).reverse().map(key => {
              const order = currentUser.orders[key];
              return <OrderHistoryItem key={key} order={order} />;
            }
            )}
          </div>
        </div>
        :
        <h3>你尚未有任何訂單記錄</h3>
      }
    </div>
  );
};

export default MyOrderHistoryPage;