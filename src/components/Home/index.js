import React from 'react'
import { withAuthorization } from '../Session'

const HomePage = () => (
    <>
        <header className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Home</h1>
                </div>
            </div>
        </header>
    </>
)

const condition = authUser => !!authUser
export default withAuthorization(condition)(HomePage)
