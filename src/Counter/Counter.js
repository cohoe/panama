import React from 'react'

export class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            clicks: this.props.count || 0
        }
    }

    componentDidMount() {
        this.setState({clicks: this.state.clicks + 420})
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.clicks}</p>
                <button onClick={() => this.setState({clicks: this.state.clicks + 1})}>Click Here</button>
                <p><b>{this.props.children}</b></p>
            </div>
        )
    }
}