import { CreateTask } from './components/CreateTask';
import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';
import { TaskBoard } from './components/TaskBoard';

export function App() {
  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
          <main>
            <TaskBoard />
          </main>
        </div>
    </div>
  )
}
