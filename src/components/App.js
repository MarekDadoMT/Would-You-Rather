import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { LoadingBar } from 'react-redux-loading'
import { isEmpty } from 'lodash'
import Navigation from './Navigation'
import SignIn from './SignIn'
import Homepage from './HomePage'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { authedUser } = this.props

        return (
            <div>
                <LoadingBar />
                <Navigation />

                {
                    isEmpty(authedUser)
                        ? <SignIn />
                        : <Homepage />
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(App)
