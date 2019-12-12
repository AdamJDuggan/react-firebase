import React from 'react'
import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'

const Account = () => (
    <>
        <header className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Account Page</h1>
                </div>
            </div>
        </header>
        <main style={{ marginTop: '20px' }} className="container">
            <PasswordForgetForm />
            <hr />
            <PasswordChangeForm />

        </main>
    </>
);
export default Account
