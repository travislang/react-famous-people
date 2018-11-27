import React, { Component } from 'react';

class FamousPerson extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            role: ''
        }
    }
    handleChange = (propName) => {
        return (e) => {
            this.setState({
                ...this.state,
                [propName]: e.target.value
            });
        }
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='name' onChange={this.handleChange('name')} />
                <input type='text' placeholder='role' onChange={this.handleChange('role')} />
                <p>{this.state.name} is famous for "{this.state.role}"</p>
            </div>
        );
    }
}

export default FamousPerson;