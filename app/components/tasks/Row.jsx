import React, { createClass, PropTypes } from 'react';
import css from 'classnames';

const UserRow = createClass({
    displayName: 'UserRow',

    propTypes: {
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onClickUser: PropTypes.func.isRequired,
        onRemoveUser: PropTypes.func.isRequired,
        selectedUser: PropTypes.string
    },

    onClickUser() {
        const { _id, onClickUser } = this.props;
        onClickUser(_id);
    },

    onRemove() {
        const { _id, onRemoveUser } = this.props;
        onRemoveUser({ _id });
    },

    render() {
        const { description, name, selectedUser, dateCreated, dateUpdate, _id } = this.props;

        const classNames = css('users__row', {
            'users__row--active': selectedUser === _id
        });

        return (
            <tr className={classNames} onClick={this.onClickUser}>
                <td>{name}</td>
                <td>{description}</td>
                <td>{dateCreated}</td>
                <td>{dateUpdate}</td>
                <td>
                    <button onClick={this.onRemove}>Remove</button>
                </td>
            </tr>
        );
    }
});

export default UserRow;
