import { ChangeEvent, FormEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';

import styles from './CreateTask.module.css';

interface CreateTaskProps {
    onCreateTask: (taskText: string) => void;
}

export function CreateTask({ onCreateTask }: CreateTaskProps) {

    const [newTaskText, setNewTaskText] = useState('');

    function handleCommentNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        onCreateTask(newTaskText);
        setNewTaskText('');
    }

    return (
        <div className={styles.createTask}>
            <form onSubmit={handleCreateNewTask}>
                <input 
                    name="newTask"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleCommentNewTaskChange}
                    required
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} weight="bold" />
                </button>
            </form>
        </div>
    );
}