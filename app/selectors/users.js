import { createSelector } from 'reselect';

export const usersSelector = state => state.users;

export const selectedUserSelector = createSelector(
    usersSelector,
    users => users.selectedUser
);

export const taskListSelector = createSelector(
    usersSelector,
    users => users.list
);
