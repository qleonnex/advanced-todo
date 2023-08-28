import classes from './Modal.module.scss';
import { useEffect, useState } from 'react';

const Modal = ({ children, data, modalState, setModalState, onClick, get }) => {
    const [classSwitch, setClassSwitch] = useState(classes.modal);

    useEffect(() => {
        if (modalState.isOpen) {
            setClassSwitch([classes.modal, classes.active]);
        }
    }, [modalState.isOpen]);

    function closeModal() {
        setClassSwitch([classes.modal, classes.hide]);

        setTimeout(() => {
            setModalState((prev) => ({ ...prev, isOpen: false }));
            setClassSwitch(classes.modal);
        }, 300);
    }

    get(closeModal);

    return (
        <section
            className={
                typeof classSwitch === 'object'
                    ? classSwitch.join(' ')
                    : classSwitch
            }
            onClick={closeModal}
        >
            <div
                className={classes.modal__inner}
                onClick={(e) => e.stopPropagation()}
            >
                <header className={classes.modal__header}>
                    <h3 className={classes.modal__title}>{data.title}</h3>
                    <button
                        onClick={closeModal}
                        className={classes.modal__close}
                    ></button>
                </header>
                <div className={classes.modal__content}>{children}</div>
                <div className={classes.modal__actions}>
                    <button
                        onClick={() => onClick()}
                        className={classes.modal__action}
                    >
                        {data.btnValue}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Modal;
