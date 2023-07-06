import styles from './app.module.scss';
import ProjectIndex from "./pages/ProjectIndex/ProjectIndex";

function App() {
    return (
        <div className={`${styles.appContainer}`}>
            <ProjectIndex />
        </div>
    );
}

export default App;
