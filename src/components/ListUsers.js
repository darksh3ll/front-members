import React, { Component } from 'react';

class ListUsers extends Component {
    state={
        red:"btn btn-danger",
        blue:"btn btn-primary",
        on: false
    };

    render() {
        return (
            <div className="list">
                <p>{this.props.id}</p>
                <p>{this.props.firstname}</p>
                <p>{this.props.lastname}</p>
                <p>{this.props.email}</p>
                <button
                    onClick={() => this.props.del(this.props.id)}
                    className={this.state.red}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>

        )
    }

};


export default ListUsers;