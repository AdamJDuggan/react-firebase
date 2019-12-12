import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'

const PasswordForgetPage = () => (
    <>
        <header className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Forgot password</h1>
                </div>
            </div>
        </header>
        <main style={{ marginTop: '20px' }} className="container">
            <PasswordForgetForm />
        </main>
    </>
)

const INITIAL_STATE = { email: '', error: null, }

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email } = this.state
        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
            })
            .catch(error => {
                this.setState({ error })
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };
    render() {
        const { email, error } = this.state
        const isInvalid = email === ''
        return (
            <form class="card" style={{ padding: '20px' }} onSubmit={this.onSubmit}>
                <h2 className="title">Password reset</h2>
                <div className="field">
                    <label className="label">Password</label>
                    <input
                        name="email"
                        class="input"
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                </div>
                <button disabled={isInvalid} type="submit" className="button is-primary">
                    Reset My Password
                </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}
const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
)
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase)
export { PasswordForgetForm, PasswordForgetLink }
