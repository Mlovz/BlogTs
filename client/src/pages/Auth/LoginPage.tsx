import React, {ChangeEvent, FormEvent, useState} from 'react';
import cls from './auth.module.scss'
import {Button, Card, Input, Text} from "../../components";
import {AuthStateUserData} from "../../utils/typescript";
import {validAuthData} from "../../utils/valid";
import axios from "axios";
const LoginPage = () => {
    const [userData, setUserData] = useState<AuthStateUserData>({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState<AuthStateUserData>({
        username: '',
        password: '',
        cf_password: ''
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const errors: any = validAuthData(userData)

        console.log(errors)

        if(errors.status !== 200){
            return setErrors(errors)
        }

        try {
            const res = await axios.post('http://localhost:5000/api/login', userData)
            console.log(res)
        }catch (err:any){
            console.log(err.response.data.message)
        }
    }

    return (
        <div className={cls.auth}>
            <Card className={cls.authCard}>
                <Text>Войти</Text>
                <form noValidate className={cls.authForm} onSubmit={onSubmit}>
                    <Input
                        placeholder='Username'
                        name='username'
                        onChange={handleChange}
                        value={userData.username}
                        error={errors.username}
                    />
                    <Input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        error={errors.password}
                        value={userData.password}
                        placeholder='Password'
                    />
                    <Button max type='submit'>Войти</Button>
                </form>
            </Card>
        </div>
    );
};

export default LoginPage;
