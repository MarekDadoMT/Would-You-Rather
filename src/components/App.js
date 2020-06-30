import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { LoadingBar } from 'react-redux-loading'
import { isEmpty } from 'lodash'
import SignIn from './SignIn'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { authedUser } = this.props

        return (
            <div>
                    <LoadingBar />
                    {
                        isEmpty(authedUser)
                            ? <SignIn />
                            : <h3>Si prihlaseny</h3>
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
