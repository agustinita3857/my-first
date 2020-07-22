import React, {Component} from 'react';
import './task.css';

class Task extends Component{
    render(){
        const {task} = this.props;
        return <p className="red">
            {task.title} -
            {task.description} -
            {task.done} - 
            {task.id}
            <input type= "checkbox"/>
            <button style={btnDelete}> x </button>
        </p>
    }
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