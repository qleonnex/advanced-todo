import Checkbox from '../../../../UI/checkbox/Checkbox';
import classes from '../todo/Todo.module.scss';

const TodoCompleted = ({ id, title, setTodos }) => {
    const changeIsCompleted = () => {
        setTimeout(() => {
            setTodos((prev) => 
                prev.filter((todo) => todo.id !== id)
            );
            
            setTodos((prev) => [
                ...prev, 
                { id, title, isCompleted: false }]
            );
        }, 500);
    };

    const removeTodo = (id) => {
        setTodos((prev) => 
            prev.filter((todo) => todo.id !== id)
        );
    };

    return (
        <div className={[classes.todo, classes.completed].join(' ')}>
            <div className={classes.cover}>
                <Checkbox id={id} onChange={changeIsCompleted} checked />
                <label className={classes.todo__title} htmlFor={id}>
                    {title}
                </label>
            </div>
            <div className={classes.todo__actions}>
                <button
                    onClick={() => removeTodo(id)}
                    className={[classes.todo__action, classes.delete].join(' ')}
                ></button>
            </div>
        </div>
    );
};

export default TodoCompleted;
