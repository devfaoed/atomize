import "./navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbarHeader">
                <h2>atomize</h2>
            </div>

            <div className="navbarList">
                <ul>
                    <li>Features</li>
                    <li>Github</li>
                    <li>For Designers</li>
                    <li className="active">Documentations</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;