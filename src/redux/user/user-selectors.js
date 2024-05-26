import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserError = createSelector(
  [selectUser],
  (user) => user.error
);

export const selectOrders = createSelector(
  [selectUser],
  (user) => 
    user.currentUser && user.currentUser.orders ? 
      Object.keys(user.currentUser.orders)
        .sort((a, b) => b - a)
        .map(key => user.currentUser.orders[key]) 
    : 
      []
);