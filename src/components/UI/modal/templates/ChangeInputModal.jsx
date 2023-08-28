import { useEffect, useState } from 'react';

const ChangeInputModal = ({ get }) => {
    const [value, setValue] = useState('');

    function onChange(event) {
        setValue(event.target.value);
    }

    useEffect(() => {
        get(value, setValue);
    }, [value]);

    return (
        <input
            onChange={(e) => onChange(e)}
            value={value}
            type="text"
            placeholder="Новое название"
        />
    );
};

export default ChangeInputModal;
