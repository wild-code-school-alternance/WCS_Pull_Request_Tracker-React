import styles from './app.module.scss';
import Content from './components/Content/Content';

function App() {
    return (
        <div className={`${styles.appContainer}`}>
            <Content />
        </div>
    );
}

export default App;
