import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Task extends Component{
    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' :'black',
            textDecoration:'none'
        }
    }
    render(){
        const {task} = this.props;
        return <p style={this.StyleCompleted()} >
            {task.title} -
            {task.description} -
            {task.done} - 
            {task.id}
            <input type= "checkbox"/>
            <button style={btnDelete}> x </button>
        </p>
    }
}

Task.propTypes={
    task: PropTypes.object.isRequired
}
const btnDelete={
    background: '#ea2027',
    fontSize: '18px',
    color: '#fff',
    border:'none',
    padding:'10px 15px',
    borderRadius:'50%',
    cursor:'pointer'
}
export default Task;