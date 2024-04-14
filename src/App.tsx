import styles from './App.module.scss';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Landing } from './components/landing/landing';
import { Service } from './components/service/service';

function App() {
    return (
        <div className={styles.App}>
            <Landing />
            <Service />
            <About />
            <Contact />
        </div>
    );
}

export default App;
