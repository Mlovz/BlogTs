import React, {useState} from 'react';
import cls from './auth.module.scss'
import {Button, Card, Input, Text} from "../../components";
import {AuthStateUserData} from "../../utils/typescript";
const LoginPage = () => {

    const [userData, setUserData] = useState<AuthStateUserData>({
        username: '',
        password: '',
    })

    return (
        <div className={cls.auth}>
            <Card className={cls.authCard}>
                <Text>Войти</Text>
                <form noValidate className={cls.authForm}>
                    <Input placeholder='Username' />
                    <Input type='password' placeholder='Password' />
                    <Button max type='submit'>Войти</Button>
                </form>
            </Card>
        </div>
    );
};

export default LoginPage;
