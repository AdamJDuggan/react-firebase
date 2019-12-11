import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
import { compose } from 'recompose'



// Page which gets displayed on router
const SignUpPage = () => (
    <>
        <header className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Sign Up</h1>
                </div>
            </div>
        </header>
        <main style={{ marginTop: '20px' }} className="container">
            <SignUpForm />
        </main>
    </>
)

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpFormBase extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }
    onChange = event => { this.setState({ [event.target.name]: event.target.value }) }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE })
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                this.setState({ error })
            });
        event.preventDefault()
    }

    render() {
        const { username, email, passwordOne, passwordTwo, error } = this.state
        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === ''

        return (
            <form onSubmit={this.onSubmit}>
                <div class="field">
                    <label className="label">Username</label>
                    <input
                        name="username" type="username" value={username}
                        onChange={this.onChange}
                        className="input" />
                </div>
                <div class="field">
                    <label className="label">Email</label>
                    <input
                        name="email" type="email" value={email}
                        onChange={this.onChange}
                        className="input" />
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <input name="passwordOne" type="password" value={passwordOne}
                        onChange={this.onChange} class="input" />
                </div>
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <input name="passwordTwo" type="password" value={passwordTwo}
                        onChange={this.onChange} class="input" />
                </div>
                <button style={{ marginBottom: '15px' }} disabled={isInvalid} type="submit" className="button is-primary">Submit</button>
                {error && <div key={alert.id} className="notification is-danger">{error.message}</div>}
                <hr />
            </form>
        );
    }
}

const SignUpLink = () => (<p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link> </p>)

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase)


export default SignUpPage

export { SignUpForm, SignUpLink }

