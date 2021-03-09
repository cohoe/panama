import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Button, Card, CardContent, Container} from '@material-ui/core'
import './Counter.css'

// Bundlephobia
// What does WebPack?
// React Query

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

/**
 *
 * @param count
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const CounterFunction = ({count = 0, children}) => {
    // useState returns the value and a setter function?
    const [clicks, setClicks] = useState(count)
    const [lists, setLists] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/api/v1/lists')
        const json = await response.json()
        setLists(json)
        setLoading(false)
    }

    // I don't remember what this means.
    // Something with first load or initial set?
    // Yeah that.
    // These also set up triggers to rerun this whole thing if a value changes.
    // useEffect(() => {
    //     setClicks(count + 420)
    //     fetch('http://localhost:8080/api/v1/lists')
    //         .then((response) => response.json())
    //         .then((json) => setLists(json));
    // }, [count])
    useEffect(() => {
        setClicks(count + 420)
        fetchData()
    }, [count])

    return (
        <div>
            <p>{clicks}</p>
            <Button variant="contained" color="primary" onClick={() => setClicks(clicks + 1)}>
                Click Here
            </Button>
            {/*<p><b>{children}</b></p>*/}
            {loading && <p>Loading...</p>}
            {!loading && (
                <Container>
                    {lists.map(list => (
                        // <Card key={list.id} style={{marginBottom: '1rem'}}>
                        <Card key={list.id} className="butts">
                            <CardContent>
                                <p>{list.display_name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </Container>
            )}
        </div>
    )
}

CounterFunction.propTypes = {
    count: PropTypes.number
}

// export function CounterFunction = ({ count }) => {
//
// }