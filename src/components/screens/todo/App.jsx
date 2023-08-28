import { useState } from 'react';
import Todos from './subcomponents/todoes/Todos';
import classes from './App.module.scss';
import CreateTodo from './subcomponents/create-todo/CreateTodo';

const App = () => {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>Todo</h2>
                <ul className={classes.items}>
                    <li className={classes.item}>
                        {
                            todos.filter((todo) => todo.isCompleted === false)
                                .length
                        }{' '}
                        планов
                    </li>
                    <li className={classes.item}>
                        {
                            todos.filter((todo) => todo.isCompleted === true)
                                .length
                        }{' '}
                        выполнено
                    </li>
                </ul>
                <CreateTodo setTodos={setTodos} />
                <Todos todos={todos} setTodos={setTodos} />
                <div className={classes.made__by}>
                    <a href="https://t.me/qleonnex" target="_blank">
                        <img
                            src="/made-by.svg"
                            alt="made by Leonnex"
                            draggable="false"
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default App;
