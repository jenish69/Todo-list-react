export const getTodoLocalStorage = () => {
    const todoKey = "reactTodo";

    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
}

export const setTodoLoaclStorage = (task) => {
    return localStorage.setItem("reactTodo", JSON.stringify(task));
}