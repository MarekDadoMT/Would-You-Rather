import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { LoadingBar } from 'react-redux-loading-bar'
import { isEmpty } from 'lodash'
import Navigation from './Navigation'
import SignIn from './SignIn'
import Homepage from './HomePage'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { loading, authedUser } = this.props

        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <Navigation />
                    {
                        isEmpty(authedUser)
                            ? <SignIn />
                            : (loading === true
                                ? null
                                : <div>
                                    <Route path="/" exact component={Homepage} />
                                    <Route path="/add" component={NewQuestion} />
                                    <Route path="/questions/:question_id" component={QuestionPage} />
                                    <Route path="/leaderboard" component={LeaderBoard} />
                                </div>
                            )
                    }
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(App)
