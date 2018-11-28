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
        this.setState({
            people: [
                ...this.state.people,
                this.state.person
            ],
            person: {
                name: '',
                role: ''
            }
        })
    }
    render() {
        let htmlList = this.state.people.map( (person, i) => {
            return <li key={i}>{person.name}</li>
        })
        return (
            <div className='famousPersonContainer'>
                <input type='text' placeholder='name' onChange={this.handleChange('name')} value={this.state.person.name} />
                <input type='text' placeholder='role' onChange={this.handleChange('role')} value={this.state.person.role} />
                <button onClick={this.handleClick}>Add To List</button>
                <ul>
                    {htmlList}
                </ul>
            </div>
        );
    }
}

export default FamousPerson;