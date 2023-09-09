import cls from './Header.module.scss'
import {Link} from 'react-router-dom'
import {Button} from "../index";


const Header = () => {
    return (
        <header className={cls.header}>
            <div className="container">
                <div className={cls.headerWrap}>
                    <div className={cls.headerlogo}></div>


                    <div className={cls.headerRight}>
                        <Button to='/login'>Войти</Button>
                        <Button to='/register' variant='outline'>Регистрация</Button>
                    </div>

                </div>
            </div>
        </header>
    );
}
export default Header