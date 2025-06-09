import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({onhandleDeleteTask , data, checked, onhandleCheckedTask}) => {
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList" }>{data}</span>
            <button className="check-btn" onClick={() => onhandleCheckedTask(data)}>
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onhandleDeleteTask(data)}>
                <MdDeleteForever />
            </button>
        </li>
    );
}