import React, { createClass, PropTypes } from 'react';

const UsersAdd = createClass({
    displayName: 'UsersAdd',

    propTypes: {
        onAddTask: PropTypes.func.isRequired,
        onUpdateTask: PropTypes.func.isRequired,
        selectedUser : PropTypes.object.isRequired
    },

    getInitialState(){
        return{
            description: "",
            name: ""
        }
    },
    componentWillReceiveProps(nextProps){
        if (nextProps.selectedUser) {
            this.setState({
                description: nextProps.selectedUser.description,
                name: nextProps.selectedUser.name,
            })
        }
    },

    addTask(event) {
        event.preventDefault();
        const date = new Date();
        this.props.onAddTask({
            name: this.nameInput.value,
            description: this.descriptionInput.value,
            dateCreated : date,
            dateUpdate: date
        });
        this.setState({description: "", name:""})
    },
    updateTask(event) {
        event.preventDefault();
        const date = new Date();
        this.props.onUpdateTask({
            name: this.nameInput.value,
            _id:this.props.selectedUser._id,
            description: this.descriptionInput.value,
            dateUpdate: date
        });
        this.setState({description: "", name:""})
    },

    onChangeDescription(event){
        this.setState({description: event.target.value})
    },

    onChangeName(event){
        this.setState({name: event.target.value})
    },

    render() {
        return (
            <form className="users__form"
                 onSubmit={!this.props.selectedUser ? this.addTask : this.updateTask}>
                <input 
                    type="text"
                    onChange={this.onChangeName}
                    placeholder="Name"
                    value={this.state.name}
                    ref={nameInput => this.nameInput = nameInput} />
                <input 
                    type="text" 
                    onChange={this.onChangeDescription}
                    placeholder="description" 
                    value={this.state.description}
                    ref={descriptionInput => this.descriptionInput = descriptionInput} />
                <button>{this.props.selectedUser ? "update task" : "Add task"}</button>
            </form>
        );
    }
});

export default UsersAdd;
