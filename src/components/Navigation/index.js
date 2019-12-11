import React, { useState } from "react"
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'


const Navigation = () => (
    <>
        <nav className="navbar is-link " role="navigation" aria-label="main navigation">
            <div class="navbar-brand ">
                <Link className="navbar-brand" to={ROUTES.LANDING} >
                    <h2 className="has-text-white" style={{ margin: '10px' }}> ReactFirebase</h2>
                </Link>

                {/* HAMBURGER */}
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <li className="navbar-item">
                            <Link className="nav-link has-text-white" to={ROUTES.SIGN_IN}>Sign In</Link>
                        </li>
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
                            <Link className="nav-link has-text-white" to={ROUTES.ADMIN}>Admin</Link>
                        </li>

                    </div>
                </div>

            </div>
        </nav>
    </>

)



export default Navigation;
