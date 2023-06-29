import styles from './app.module.scss';
import Header from "./components/Header/Header";

function App() {
    return (
        <div className={`${styles.appContainer}`}>
            <Header/>
        </div>
    );
}

export default App;
