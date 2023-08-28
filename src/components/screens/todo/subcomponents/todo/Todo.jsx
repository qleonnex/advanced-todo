import { useRef, useState } from 'react';
import Modal from '../../../../UI/modal/Modal';
import classes from './Todo.module.scss';
import Checkbox from '../../../../UI/checkbox/Checkbox';
import ChangeInputModal from '../../../../UI/modal/templates/ChangeInputModal';

const Todo = ({ id, title, setTodos }) => {
    const [modal, setModal] = useState({ isOpen: false, linkedID: id });
    const [modalValue, setModalValue] = useState([]);
    const [dropdown, setDropdown] = useState({
        class: classes.dropdown__inner,
        isOpen: false
    });
    const closeModal = useRef();

    const deleteTodo = () => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
        closeDropdown();
    };

    const editTodo = () => {
        setTodos((prev) =>
            prev.map((todo) => {
                if (todo.id === id) {
                    todo.title = modalValue[0];
                }

                return todo;
            })
        );

        closeModal.current();
    };

    const openModal = () => {
        setModal((prev) => ({ ...prev, isOpen: true }));
        closeDropdown();
        document.querySelector('body').style.overflow = 'hidden';
    };

    const getModalValue = (value, setValue) => {
        setModalValue([value, setValue]);
    };

    const getCloseModal = (get) => {
        closeModal.current = get;
    };

    const completedTodo = () => {
        setTimeout(() => {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
            setTodos((prev) => [...prev, { id, title, isCompleted: true }]);
        }, 500);
    };

    const openDropdown = () => {
        if (dropdown.class === classes.dropdown__inner) {
            setDropdown({
                class: [classes.dropdown__inner, classes.active],
                isOpen: true
            });
        } else {
            closeDropdown();
        }
    };

    function closeDropdown() {
        setDropdown((prev) => ({
            ...prev,
            class: [classes.dropdown__inner, classes.hide]
        }));

        setTimeout(() => {
            setDropdown({
                class: classes.dropdown__inner,
                isOpen: false
            });
        }, 300);
    }

    return (
        <>
            <div className={classes.todo}>
                <div className={classes.cover}>
                    <Checkbox id={id} onChange={completedTodo} />
                    <label className={classes.todo__title} htmlFor={id}>
                        {title}
                    </label>
                </div>
                <div className={classes.todo__dropdown}>
                    <button
                        onClick={openDropdown}
                        className={classes.todo__action}
                    ></button>
                    {dropdown.isOpen && (
                        <div
                            className={
                                typeof dropdown.class === 'object'
                                    ? dropdown.class.join(' ')
                                    : dropdown.class
                            }
                        >
                            <button onClick={openModal}>Редактировать</button>
                            <button onClick={deleteTodo}>Удалить</button>
                        </div>
                    )}
                </div>
                <div className={classes.todo__actions}>
                    <button
                        onClick={openModal}
                        className={[classes.todo__action, classes.edit].join(
                            ' '
                        )}
                    ></button>
                    <button
                        onClick={deleteTodo}
                        className={[classes.todo__action, classes.delete].join(
                            ' '
                        )}
                    ></button>
                </div>
            </div>
            {modal.isOpen && modal.linkedID === id && (
                <Modal
                    modalState={modal}
                    setModalState={setModal}
                    onClick={editTodo}
                    data={{
                        title: 'Изменить название',
                        btnValue: 'Изменить'
                    }}
                    get={getCloseModal}
                >
                    <ChangeInputModal get={getModalValue} />
                </Modal>
            )}
        </>
    );
};

export default Todo;
