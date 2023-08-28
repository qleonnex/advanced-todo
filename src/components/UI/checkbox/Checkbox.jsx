import classes from './Checkbox.module.scss';

const Checkbox = ({ id, onChange, checked }) => {
    return (
        <div className={classes.checkbox}>
            <input
                onChange={() => onChange()}
                className={classes.default__checkbox}
                type="checkbox"
                id={id}
                defaultChecked={checked && true}
            />
            <label className={classes.custom__checkbox} htmlFor={id}></label>
        </div>
    );
};

export default Checkbox;
