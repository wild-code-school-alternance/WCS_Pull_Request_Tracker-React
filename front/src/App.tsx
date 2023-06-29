import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/project" />
                <Route path="/pullrequest" />
                <Route path="/contributor" />
            </Routes>
        </Router>
    );
}

export default App;
