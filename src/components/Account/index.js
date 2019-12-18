import React from 'react'
import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'
import { AuthUserContext, withAuthorization } from '../Session'

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <>
                <header className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Account: {authUser.email}</h1>
                        </div>
                    </div>
                </header>
                <main style={{ marginTop: '20px' }} className="container">
                    <PasswordForgetForm />
                    <hr />
                    <PasswordChangeForm />

                </main>
            </>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser
export default withAuthorization(condition)(AccountPage)
