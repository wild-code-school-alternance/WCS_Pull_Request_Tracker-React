import styles from './app.module.scss';
import Projects from "./components/Project/Projects";

function App() {
    return (
        <div className={`${styles.appContainer}`}>
            <Projects />
        </div>
    );
}

export default App;
