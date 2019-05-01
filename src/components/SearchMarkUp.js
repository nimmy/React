import React from 'react';

class SearchMarkUp extends React.Component{
    render() {
        return(
            <li>
                <div><img src={this.props.avatar_url} /></div>
                <div>{this.props.id}</div>
                <div>{this.props.node_id}</div>
                <div>{this.props.login}</div>
                <div>{this.props.name}</div>
                <div>{this.props.company}</div>
                <div>{this.props.followers}</div>
            </li>
        )
    }
}

export default SearchMarkUp;