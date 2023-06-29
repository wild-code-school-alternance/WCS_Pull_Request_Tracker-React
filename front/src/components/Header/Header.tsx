import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PR Tracker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mt-2 text-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/project" activeClassName="active">Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pullrequest" activeClassName="active">Pull request</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contributor" activeClassName="active">Contributor</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
