import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user-sagas';
import { shopSagas } from './shop/shop-sagas';
import { cartSagas } from './cart/cart-sagas';
import { wishlistSagas } from './wishlist/wishlist-saga';

export default function* rootSagas() {
  yield all([call(userSagas), call(shopSagas), call(cartSagas), call(wishlistSagas)]);
}