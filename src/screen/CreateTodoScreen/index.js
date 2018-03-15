import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToolBar from '../../components/UI/ToolBar';
import CreateTodoForm from '../../components/CreateTodo/Form';
import { createTodo } from '../../actions/todo';
import './style.scss';

class CreateTodoScreen extends Component {
  goBack = () => {
    this.props.history.goBack();
  }
  handleFormSubmit = (todo) => {
    this.props.createTodo(todo);
  }
  render () {
    return (
      <div className='create-todo-screen'>
        <ToolBar
          left={<i className='material-icons'>arrow_back</i>}
          onLeftPress={this.goBack}
          title='添加新事项'
        />
        <CreateTodoForm handleSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (todo) => dispatch(createTodo(todo))
  };
};

CreateTodoScreen.propTypes = {
  history: PropTypes.object.isRequired,
  createTodo: PropTypes.func.isRequired
};

export default withRouter(connect(null, mapDispatchToProps)(CreateTodoScreen));
