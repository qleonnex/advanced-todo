import classes from './Empty.module.scss';

const Empty = () => {
    return (
        <div className={classes.empty}>
            <p className={classes.text}>Планов на сегодня нет...</p>
        </div>
    );
};

export default Empty;
