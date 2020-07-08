import React, {Component} from 'react'
import { connect } from 'react-redux'
import {  map } from 'lodash'
import LeaderItem from './LeaderItem'

class LeaderBoard extends Component {

    render() {
        const {usersIds} = this.props

        return (
            <ul className="list-unstyled">
                {
                    usersIds.map((id, index) => (
                        <li key={id}>
                            <LeaderItem id={id} index={index}/>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

function mapStateToProps({ users }) {

    // Thanks to this, I am able to get sorted users.
    const usersByScore = Object.values(users).map((user) => ({
        user,
        score: Object.keys(user.answers).length + Object.keys(user.questions).length
    })).sort((a,b)=>b.score - a.score)

    const usersIds = map(usersByScore, 'user.id')

    return {
        usersIds
    }
}

export default connect(mapStateToProps)(LeaderBoard)
