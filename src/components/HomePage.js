import React, {Component} from 'react'
import { connect } from 'react-redux'
import { find, filter, indexOf } from 'lodash'
import Question from './Question'
import {ToggleButtonGroup, ToggleButton, Card, Button } from 'react-bootstrap'

class Homepage extends Component {
    state = {
        variant: 1
    }

    aaa = () => {
        this.setState({variant:1})
    }
    bbb = () => {
        this.setState({variant:2})
    }

    render() {
        const { answeredIds, unansweredIds} = this.props

        return (
                <Card>

                    {/*<ToggleButtonGroup name="radio">*/}
                    {/*    <Button variant="secondary" clonClick={this.aaa}>*/}
                    {/*        Unanswered*/}
                    {/*    </Button>*/}
                    {/*    <Button variant="secondary" onClick={this.bbb}>*/}
                    {/*        Answered*/}
                    {/*    </Button>*/}
                    {/*</ToggleButtonGroup>*/}

                    {
                       this.state.variant === 1
                            ? <ul className="list-unstyled">
                                {
                                    unansweredIds.map((id) => (
                                        <li key={id}>
                                            <Question id={id} />
                                        </li>
                                    ))
                                }
                            </ul>
                            : <ul className="list-unstyled">
                                {
                                    answeredIds.map((id) => (
                                        <li key={id}>
                                            <Question id={id} />
                                        </li>
                                    ))
                                }
                            </ul>
                    }
                </Card>


        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {

    const user = find(users, {id: authedUser})

    const answeredIds  = Object.keys(user.answers).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    const unansweredIds = filter(questions, (v) => indexOf(answeredIds, v.id) === -1).map(item => item.id)

    return {
        answeredIds: answeredIds,
        unansweredIds: unansweredIds
    }
}


export default connect(mapStateToProps)(Homepage)
