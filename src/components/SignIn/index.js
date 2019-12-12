import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
import { compose } from 'recompose'
import { PasswordForgetLink } from '../PasswordForget'




// Page which gets displayed on router
const SignInPage = () => (
    <>
        <header className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Sign In</h1>
                </div>
            </div>
        </header>
        <main style={{ marginTop: '20px' }} className="container">
            <SignInForm />
            <PasswordForgetLink />
            <SignUpLink />

        </main>
    </>
)

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }
    onChange = event => { this.setState({ [event.target.name]: event.target.value }) }
    onSubmit = event => {
        const { email, password } = this.state
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                this.setState({ error })
            });
        event.preventDefault()
    }

    render() {
        const { email, password, error } = this.state
        const isInvalid = email === '' || password === ''

        return (
            <form onSubmit={this.onSubmit}>
                <div class="field">
                    <label className="label">Email</label>
                    <input
                        name="email" type="email" value={email}
                        onChange={this.onChange}
                        className="input" />
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <input name="password" type="password" value={password}
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

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase)


export default SignInPage

export { SignInForm, SignUpLink }

