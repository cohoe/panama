import React, { useState, useEffect } from 'react'

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

// This is a bunch of bullshit
// function CounterFunction(props) {
//     const count = props.count
// }
//
// export const CounterFunction = (props) => {
//     const count = props.count
// }

export const CounterFunction = ({ count = 0, children }) => {
    const [clicks, setClicks] = useState(count)

    useEffect(() => {
        setClicks(count + 420)
    }, [count])

    return (
        <div>
            <p>{clicks}</p>
            <button onClick={() => setClicks(clicks + 1)}>Click Here</button>
            <p><b>{children}</b></p>
        </div>
    )
}

// export function CounterFunction = ({ count }) => {
//
// }