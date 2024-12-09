import { useDispatch, useSelector } from 'react-redux';
import './todo.css';
import TodoField from './todoField/todo-field';
import { useState } from 'react';
import { addTodoAction } from '../../store';
const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');

    const dispatch = useDispatch();
    const todos = useSelector((state) => state);

    const addTodo = () => {
        if (newTodo !== '') {
            dispatch(addTodoAction(newTodo));
            setNewTodo('');
        }
    };

    const handleChangeNewTodo = ({ target }) => {
        setNewTodo(target.value);
    };

    return (
        <div className="todoWraper">
            <h1 className="title">ToDoList</h1>
            <div className="addTodoWraper">
                <input
                    value={newTodo}
                    type="text"
                    placeholder="What do you want to do?"
                    className="addTodoField"
                    onChange={handleChangeNewTodo}
                />
                <button className="addTodoBtn" onClick={addTodo}>
                    +
                </button>
            </div>

            <div className="todos">
                {todos.length ? (
                    todos.map((el) => {
                        return (
                            <div key={el.id}>
                                <TodoField
                                    text={el.text}
                                    id={el.id}
                                    status={el.status}
                                />
                            </div>
                        );
                    })
                ) : (
                    <h1>Any Todo</h1>
                )}
            </div>
        </div>
    );
};

export default TodoList;
