import React, { useState } from "react"
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import SignOutButton from '../SignOut'
import { AuthUserContext } from '../Session'



const NavigationAuth = () => (
    <>
        <nav className="navbar is-link " role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <li className="navbar-item">
                            <Link className="nav-link has-text-white" to={ROUTES.LANDING}>Landing</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link has-text-white" to={ROUTES.HOME}>Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link has-text-white" to={ROUTES.ACCOUNT}>Account</Link>
                        </li>
                        <li className="navbar-item">
                            <SignOutButton />
                        </li>                    </div>
                </div>
            </div>
        </nav>

    </>
)

const NavigationNonAuth = () => (
    <>
        <nav className="navbar is-link " role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <li className="navbar-item">
                            <Link className="nav-link has-text-white" to={ROUTES.SIGN_IN}>Sign in</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link has-text-white" to={ROUTES.HOME}>Landing</Link>
                        </li>

                    </div>
                </div>
            </div>
        </nav>
    </>
)

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
)


export default Navigation
