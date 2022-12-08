import React, { PureComponent } from 'react';
import './style.css';

class Avatar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }

getUrl = () => {
    let url = Object.values(this.props.state.src)
    url = url[0].replaceAll('"', '');
    return url;
}

    render() {
        return (
            <div id='avatar'>
                <img src={this.getUrl()}></img>
                <div id='username'>{this.props.state.username}</div>
                </div>
            )
    }
}

export default Avatar;
