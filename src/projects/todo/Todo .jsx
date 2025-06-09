import { useEffect, useState } from "react";
import "../todo/Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getTodoLocalStorage, setTodoLoaclStorage } from "./TodoLocalStorage";

export const Todo = () => {

    const [task , setTask] = useState(() => getTodoLocalStorage());

    const handleFormSubmit =(inputValue) => {
        const {id, content, checked} = inputValue;

        if (!content) return;

        const ifTodoContentMatch = task.find((curTask) => curTask.content === content);
        if (ifTodoContentMatch) return;
        
        setTask((prevTask) => [{id, content, checked}, ...prevTask]);
    }

    setTodoLoaclStorage(task);

    const handleClearTask = () => {
        setTask([]);
    }

    const handleDeleteTask = (value) => {
        const updateTask = task.filter((curTask) => curTask.content !== value);
        setTask(updateTask);
    }


    const handleCheckedTask = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return {...curTask, checked: !curTask.checked};
            } else {
                return curTask;
            }
        })
        setTask(updatedTask);
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>
            <section className="form">
                <TodoForm onSubmit={handleFormSubmit}/>
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <TodoList 
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onhandleDeleteTask={handleDeleteTask}
                                    onhandleCheckedTask={handleCheckedTask}
                                />
                                    
                            );
                        })
                    }
                </ul>
                <section>
                    <button className="clear-btn" onClick={handleClearTask}>
                        Clear All
                    </button>
                </section>
            </section>
        </section>
    );
}