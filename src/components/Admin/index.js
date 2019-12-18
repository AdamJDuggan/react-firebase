import React, { Component } from 'react'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose'
import { withAuthorization } from '../Session'
import * as ROLES from '../../constants/roles'



class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            users: [],
        }
    }
    componentDidMount() {
        this.setState({ loading: true })
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val()
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }))
            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off()
    }

    render() {

        const { users, loading } = this.state

        return (
            <>
                <header className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Admin for signed in admin users</h1>
                        </div>
                    </div>
                </header>
                <main className="container" style={{ marginTop: '20px' }}>
                    {loading && <p className="">Loading</p>}
                    <br />
                    <ul className="menu-list">
                        <h3 className="menu-label">Users</h3>
                        {users.map(user => (
                            <li key={user.uid}>
                                <span>
                                    <strong>ID:</strong> {user.uid}
                                </span>
                                <span>
                                    <strong>E-Mail:</strong> {user.email}
                                </span>
                                <span>
                                    <strong>Username:</strong> {user.username}
                                </span>
                            </li>
                        ))}
                    </ul>
                </main>
            </>
        )
    }
}
const condition = authUser =>
    authUser && !!authUser.roles[ROLES.ADMIN]

export default compose(
    withAuthorization(condition), withFirebase)(AdminPage)