import { useState } from 'react';
import classes from './CreateTodo.module.scss';

const CreateTodo = ({ setTodos }) => {
    const [value, setValue] = useState('');

    const createTodo = (e) => {
        e.preventDefault();

        if (value && value.includes(" ", 0)) {
            setTodos((prev) => [
                ...prev,
                { id: Date.now(), title: value, isCompleted: false }
            ]);
            setValue('');
        }
    };

    return (
        <form className={classes.form} onSubmit={createTodo}>
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className={classes.form__input}
                type="text"
                placeholder="План на сегодня..."
            />
            <button className={classes.form__btn} type="submit"></button>
        </form>
    );
};

export default CreateTodo;
