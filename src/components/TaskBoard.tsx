import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CreateTask } from './CreateTask';

import styles from './TaskBoard.module.css';

import clipboard from '../assets/clipboard.svg';
import { TaskItem } from './TaskItem';

interface Task {
    id: string;
    text: string;
    isComplete: boolean
}

export function TaskBoard() {

    const [tasks, setTasks] = useState<Task[]>([]);

    function createNewTask(taskText: string) {
        
        const newTask: Task = {
            id: uuidv4(),
            text: taskText,
            isComplete: false
        };

        setTasks([...tasks, newTask]);
    }

    function deleteTask(id: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id);

        setTasks(tasksWithoutDeletedOne);
    }

    function toggleTaskCompletion(id: string) {
        const tasksWithEditedOne = tasks.map(task => task.id === id ? {
            ...task,
            isComplete: !task.isComplete
        }: task);

        setTasks(tasksWithEditedOne);
    }

    const totalCompletedTasks = tasks.filter(task => task.isComplete).length;

    return (
        <div>
            
            <CreateTask onCreateTask={createNewTask} />

            <section className={styles.taskBoard}>
                <header>
                    <div className={styles.taskCreated}>
                        Tarefas criadas
                        <span>{tasks.length}</span> 
                    </div>

                    <div className={styles.taskCompleted}>
                        Concluídas
                        <span>{tasks.length === 0 ? tasks.length : `${totalCompletedTasks} de ${tasks.length}`}</span> 
                    </div>
                </header>

                <div className={styles.contentTaskList}>

                    {
                        tasks.length === 0 && (

                            <div className={styles.emptyTaskList}>
                                <img src={clipboard} alt="Board de tarefas vazio" />
                                <p>
                                    Você ainda não tem tarefas cadastradas
                                </p>
                                <p>
                                    Crie tarefas e organize seus itens a fazer
                                </p>
                            </div>
                        )
                    }

                    {
                        tasks.length > 0 && (
                            
                            <div className={styles.taskList}>

                                {
                                    tasks.map(item => (

                                        <TaskItem 
                                            key={item.id}
                                            id={item.id}
                                            text={item.text}
                                            isComplete={item.isComplete}
                                            onDeleteTask={deleteTask}
                                            onToggleTaskCompletion={toggleTaskCompletion}
                                        />
                                    ))
                                }
                            </div>
                        )
                    }
                    
                </div>

            </section>
        </div>
    );
}