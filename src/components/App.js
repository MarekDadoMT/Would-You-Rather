import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { LoadingBar } from 'react-redux-loading'
import { isEmpty } from 'lodash'
import Navigation from './Navigation'
import SignIn from './SignIn'
import Homepage from './HomePage'
import QuestionPage from './QuestionPage'
import Question from "./Question";


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { authedUser } = this.props

        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <Navigation />
                    {
                        isEmpty(authedUser)
                            ? <SignIn />
                            : <div className="mt-5">
                                <Route path="/" exact component={Homepage} />
                                <Route path="/questions/:question_id" component={QuestionPage} />
                            </div>
                    }
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(App)
