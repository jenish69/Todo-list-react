import { useState } from "react";

export const TodoForm = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState({id: "", content: "", checked: false});

    const handleInputChange = (value) => {
        setInputValue({id: value, content: value, checked: false});
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputValue);
        setInputValue({id: "", content: "", checked: false});
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text" className="todo-input" autoComplete="off" value={inputValue.content} onChange={(event) => handleInputChange(event.target.value)} />
            </div>
            <div>
                <button type="submit" className="todo-btn">
                    Add Task
                </button>
            </div>
        </form>
    );
}