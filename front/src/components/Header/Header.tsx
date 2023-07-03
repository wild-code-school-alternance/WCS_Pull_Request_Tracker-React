import {NavLink} from 'react-router-dom';
import './Header.scss';

function Header() {
    async function fetchLink(route: string): Promise<void> {
        try {
            const response = await fetch(`http://localhost:8000/${route}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }


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
                            <NavLink className="nav-link" to="/project" activeClassName="active"
                                     onClick={() => fetchLink('project')}>Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pullRequest" activeClassName="active"
                                     onClick={() => fetchLink('pullRequest')}>Pull
                                request</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contributor"
                                     activeClassName="active"
                                     onClick={() => fetchLink('contributor')}>Contributor</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
