import cls from './Header.module.scss'
import {Button} from "../index";
import {useSelector} from "react-redux";
import {getAuthData} from "../../redux/selectors/auth/getAuthData";
import {useState} from "react";


const Header = () => {
    const authData = useSelector(getAuthData)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onOpen = () => {
        setIsOpen(!isOpen)
    }


    const handleLogout = () => {
        console.log('123')
    }

    return (
        <header className={cls.header}>
            <div className="container">
                <div className={cls.headerWrap}>
                    <div className={cls.headerlogo}></div>


                    {
                        authData ? <div className={cls.authData}>
                                <Button to='/addPost'>Добавить пост</Button>
                                <div onClick={onOpen} className={cls.dropDown}>
                                    {authData.avatar ? <img src={authData?.avatar} alt=""/> :
                                        <div className={cls.avatar}>{authData.username.slice(0, 1)}</div>}

                                    {
                                        isOpen && <ul>
                                            <li>Профиль</li>
                                            <li onClick={handleLogout}>Выход</li>
                                        </ul>
                                    }
                                </div>
                            </div>
                            :
                            <div className={cls.headerRight}>
                                <Button to='/login'>Войти</Button>
                                <Button to='/register' variant='outline'>Регистрация</Button>
                            </div>
                    }


                </div>
            </div>
        </header>
    );
};
export default Header