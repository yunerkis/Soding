import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectedUserSelector, taskListSelector } from 'app/selectors/users';
import { changeSelectedUser } from 'app/actions/UsersActions';
import { addUser as addTask, getUsers, removeUser, updateTask } from 'app/api/users';

import UsersAdd from 'app/components/tasks/Add';
import TaskList from 'app/components/tasks/List';

const Users = createClass({
    displayName: 'Users',

    propTypes: {
        onAddTask: PropTypes.func.isRequired,
        onClickUser: PropTypes.func.isRequired,
        onGetUsers: PropTypes.func.isRequired,
        onRemoveUser: PropTypes.func.isRequired,
        onUpdateTask: PropTypes.func.isRequired,
        selectedUser: PropTypes.string,
        taskList: PropTypes.array.isRequired
    },

    componentDidMount() {
        this.props.onGetUsers();
    },

    getDefaultProps() {
        return {
            selectedUser: ''
        };
    },

    renderList() {
        const { onClickUser, onRemoveUser, selectedUser, taskList } = this.props;

        return (
            <TaskList
                onClickUser={onClickUser}
                onRemoveUser={onRemoveUser}
                selectedUser={selectedUser}
                taskList={taskList}
            />
        );
    },

    render() {
        const { onAddTask, onUpdateTask, taskList, selectedUser } = this.props;
        return (
            <div className="users">
                <UsersAdd 
                    onAddTask={onAddTask}
                    onUpdateTask={onUpdateTask} 
                    selectedUser={taskList.filter(item => item._id === selectedUser)[0]}/>
                {this.renderList()}
            </div>
        );
    }
});

const mapStateToProps = createSelector(
    selectedUserSelector,
    taskListSelector,
    (selectedUser, taskList) => ({ selectedUser, taskList })
);

const mapActionsToProps = {
    onAddTask: addTask,
    onUpdateTask: updateTask,
    onClickUser: changeSelectedUser,
    onGetUsers: getUsers,
    onRemoveUser: removeUser
};

export default connect(mapStateToProps, mapActionsToProps)(Users);
