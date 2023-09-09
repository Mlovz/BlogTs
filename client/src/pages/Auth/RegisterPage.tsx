import React from 'react';
import cls from './auth.module.scss'
import {Button, Card, Input, Text} from "../../components";
const RegisterPage = () => {

    const onSubmit = () => {
        // const newData = {
        //     username: 'Solvo',
        //     password: '123456'
        // }
        //
        // const res = fetch('http://localhost:5000/api/register', {
        //     method: 'POST',
        //     body: newData
        // })

    }


    return (
        <div className={cls.auth}>
            <Card className={cls.authCard}>
                <Text>Регистрация</Text>

                <form noValidate className={cls.authForm}>
                    <Input placeholder='Username'/>
                    <Input type='password'  placeholder='Password'/>
                    <Input type='password'  placeholder='Confirm Password'/>
                    <Button max>Регистрация</Button>
                </form>
            </Card>
        </div>
    );
};

export default RegisterPage;
