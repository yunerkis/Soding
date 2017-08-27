import React, { createClass, PropTypes } from 'react';
import { isEmpty } from 'lodash';
import TaskRow from 'app/components/tasks/Row';

const TaskList = createClass({
    displayName: 'TaskList',

    propTypes: {
        onClickUser: PropTypes.func.isRequired,
        onRemoveUser: PropTypes.func.isRequired,
        selectedUser: PropTypes.string,
        taskList: PropTypes.array.isRequired
    },

    renderUsers() {
        const { onClickUser, onRemoveUser, selectedUser, taskList } = this.props;

        return taskList.map((task, index) => {
            return (
                <TaskRow
                    key={index}
                    {...task}
                    onClickUser={onClickUser}
                    onRemoveUser={onRemoveUser}
                    selectedUser={selectedUser}
                />
            );
        });
    },

    renderEmpty() {
        return <tr><td>No users added yet.</td></tr>;
    },

    render() {
        return (
            <table className="users__table" width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Create</th>
                        <th>Date Update</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isEmpty(this.props.taskList) ? this.renderEmpty() : this.renderUsers()}
                </tbody>
            </table>
        );
    }
});

export default TaskList;
