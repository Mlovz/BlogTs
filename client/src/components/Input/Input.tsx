import {FC, InputHTMLAttributes} from 'react';
import cls from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}



const Input:FC<InputProps> = (
    {
        type='text',
        placeholder,
        value,
        name,
        onChange
    }) => {

    return (
        <input
            className={cls.input}
            type={type}
            placeholder={placeholder}
            name={name} value={value || ''}
            onChange={onChange}
        />
    );
};
export default Input;
