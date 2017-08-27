import { CHANGE_SELECTED_USER } from 'app/actions/UsersActionTypes';

export function changeSelectedUser(id) {
    return {
        type: CHANGE_SELECTED_USER,
        payload: {
            id
        }
    };
}
