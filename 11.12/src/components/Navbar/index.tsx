import React from "react"
import "./index.scss"

function Navbar() : React.JSX.Element{
    return <>
        <nav className="navbar">
            <div className="navbar_logo">
                <h1>Logo</h1>
            </div>
            <ul className="navbar_links">
                <li className="navbar_link"><a href="/">HOME</a></li>
                <li className="navbar_link"><a href="/">PAGE</a></li>
                <li className="navbar_link"><a href="/">PAGE1</a></li>
            </ul>
        </nav>
    </>
}

export default Navbar