import React, { Component } from 'react';
import './FamousPerson.css'


class FamousPerson extends Component {
    constructor(props){
        super(props)
        this.state = {
            person: {
                name: '',
                role: ''
            },
            people: [
                {
                    name: 'Mark Zuckerberg',
                    role: 'developer'
                },
                {
                    name: 'Steve Woz',
                    role: 'Apple founder'
                }
            ]
        }
    }
    handleChange = (propName) => {
        return (e) => {
            this.setState({
                person: {
                    ...this.state.person,
                    [propName]: e.target.value
                }
            });
        }
    }
    handleClick = () => {
        console.log('Famous Person\'s name:', this.state.person.name, 'Famous person\'s role:', this.state.person.role );
    }
    render() {
        return (
            <div className='famousPersonContainer'>
                <input type='text' placeholder='name' onChange={this.handleChange('name')} />
                <input type='text' placeholder='role' onChange={this.handleChange('role')} />
                <button onClick={this.handleClick}>Log To Console</button>
                <p>{this.state.person.name} is famous for "{this.state.person.role}"</p>
            </div>
        );
    }
}

export default FamousPerson;