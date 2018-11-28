import React, { Component } from 'react';

class FamousPersonList extends Component {

    render() {
        let htmlList = this.props.people.map((person, i) => {
            return <li key={i}>{person.name}</li>
        });
        return(
            <ul>
                {htmlList}
            </ul>
        )
    }
}

export default FamousPersonList;