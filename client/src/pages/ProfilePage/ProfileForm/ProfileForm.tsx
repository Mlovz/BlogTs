import React, {FC, useState} from 'react';
import cls from './ProfileForm.module.scss'
import {User} from "../../../redux/types/authTypes";
import {Avatar, Button, Card, Input, Text} from "../../../components";

interface ProfileFormProps{
    user: User | null
}

const ProfileForm:FC<ProfileFormProps> = ({user}) => {
    const [avatar, setAvatar] = useState<any>()

    const handleChange = (e: any) => {
        const file = e.target.files[0]

        if(file){
            setAvatar(file)
        }
    }

    const clearAvatar = () => {
        setAvatar('')
    }

    return (
        <Card padding={15} className={cls.card}>

            <Text>Изменить профиль</Text>

            <form noValidate className={cls.form}>
                <label htmlFor='file' className={cls.label}>
                    <Avatar src={avatar ? URL.createObjectURL(avatar) : user?.avatar || ''} size='big' username={user?.username}/>
                    <input type="file" id='file' onChange={handleChange} />

                    {
                        avatar && <span className={cls.close} onClick={clearAvatar}>&times;</span>
                    }
                </label>ls

                <Input placeholder='Username' />
                <Input placeholder='Почта' />
                <Input placeholder='Сайт' />
                <Input placeholder='Описание' textarea />

                <Button max>Сохранить</Button>
            </form>
        </Card>
    );
};

export default ProfileForm;
