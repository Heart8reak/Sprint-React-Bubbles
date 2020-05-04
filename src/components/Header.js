import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <Link to="/">
                            <button onClick={() => localStorage.clear()}>
                                Logout
                            </button>
                        </Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header