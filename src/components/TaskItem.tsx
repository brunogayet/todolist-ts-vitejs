import { Trash } from 'phosphor-react';

import styles from './TaskItem.module.css';

interface Task {
    id: string;
    text: string;
    isComplete: boolean;
    onToggleTaskCompletion: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function TaskItem({ id, text, isComplete, onToggleTaskCompletion, onDeleteTask }: Task) {

    function handleDeleteTask() {
        onDeleteTask(id);
    }

    function handleToggleTaskCompletion() {
        onToggleTaskCompletion(id);
    }

    return (

        <div className={styles.itemTaskList}>

            <input 
                type="checkbox" 
                id={`item-${id}`}
                onClick={handleToggleTaskCompletion}
            />

            <label htmlFor={`item-${id}`} className={isComplete ? styles.strikethroughText : ''}>{text}</label>
            
            <button onClick={handleDeleteTask}>
                <Trash size={16}  />
            </button>

        </div>
    )
}