import React, { Component } from 'react';

class FamousPersonForm extends Component {

    render() {
        let htmlList = this.props.people.map((person, i) => {
            return <li key={i}>{person.name}</li>
        })
        return(
            <div className='famousPersonContainer'>
                <input type='text' placeholder='name' onChange={this.props.handleChange('name')} value={this.props.person.name} />
                <input type='text' placeholder='role' onChange={this.props.handleChange('role')} value={this.props.person.role} />
                <button onClick={this.props.handleClick}>Add To List</button>
                <ul>
                    {htmlList}
                </ul>
            </div>
        )
    }
}

export default FamousPersonForm;