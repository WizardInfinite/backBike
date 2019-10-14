import React, { Component } from 'react'

export default class DemoChild extends Component {
    render() {
        return (
            <div>
                <p>这里是子组件</p>
                {this.props.name}
            </div>
        )
    }
}
