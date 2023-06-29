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
                            <a className="nav-link" href="#">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pull request</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contributor</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;
