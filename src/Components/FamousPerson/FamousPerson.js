import React, { Component } from 'react';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm'
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
        
        return (
            <FamousPersonForm 
            person={this.state.person}
            people={this.state.people}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            />
        );
    }
}

export default FamousPerson;