import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div className="App">
                Hello World
            </div>
        )
    }


}

export default connect()(App)
