import TodoCompleted from '../todo-completed/TodoCompleted';
import Todo from '../todo/Todo';
import Empty from '../../../../UI/empty/Empty';
import classes from './Todos.module.scss';

const Todos = ({ todos, setTodos }) => {
    return (
        <>
            <div className={classes.todos}>
                {!!todos.filter((todo) => !todo.isCompleted).length ? (
                    todos
                        .filter((todo) => !todo.isCompleted)
                        .map((todo) => (
                            <Todo key={todo.id} {...todo} setTodos={setTodos} />
                        ))
                ) : (
                    <Empty />
                )}
            </div>
            {!!todos.filter((todo) => todo.isCompleted).length && (
                <div
                    className={[classes.todos, classes.todosCompleted].join(
                        ' '
                    )}
                >
                    <p className={classes.completed__title}>
                        Выполненные планы:
                    </p>
                    {todos
                        .filter((todo) => todo.isCompleted === true)
                        .map((todo) => (
                            <TodoCompleted
                                key={todo.id}
                                {...todo}
                                setTodos={setTodos}
                            />
                        ))}
                </div>
            )}
        </>
    );
};

export default Todos;
