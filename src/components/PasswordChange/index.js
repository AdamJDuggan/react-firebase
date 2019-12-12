import React, { Component } from 'react'
import { withFirebase } from '../Firebase'

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null
}



class PasswordChangeForm extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }
    onSubmit = event => {
        const { passwordOne } = this.state
        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
            })
            .catch(error => {
                this.setState({ error })
            })
        event.preventDefault()
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        const { passwordOne, passwordTwo, error } = this.state
        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === ''
        return (
            <>

                <form class="card" style={{ padding: '20px' }} onSubmit={this.onSubmit}>
                    <h2 className="title">Change my password</h2>
                    <div className="field">
                        <label className="label">Password</label>
                        <input
                            name="passwordOne"
                            className="input"
                            value={passwordOne}
                            onChange={this.onChange}
                            type="password"
                        />
                    </div>
                    <div className="field">
                        <label className="label">Confirm new Password</label>
                        <input
                            name="passwordTwo"
                            className="input"
                            value={passwordTwo}
                            onChange={this.onChange}
                            type="password"
                        />
                    </div>
                    <button className="button is-primary" disabled={isInvalid} type="submit"> Reset My Password</button>
                    {error && <p>{error.message}</p>}
                </form>
            </>
        )
    }
}
export default withFirebase(PasswordChangeForm)
