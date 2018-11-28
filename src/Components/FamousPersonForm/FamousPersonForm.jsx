import React, { Component } from 'react';

class FamousPersonForm extends Component {

    render() {
        
        return(
            <div className='famousPersonContainer'>
                <input type='text' placeholder='name' onChange={this.props.handleChange('name')} value={this.props.person.name} />
                <input type='text' placeholder='role' onChange={this.props.handleChange('role')} value={this.props.person.role} />
                <button onClick={this.props.handleClick}>Add To List</button>
            </div>
        )
    }
}

export default FamousPersonForm;