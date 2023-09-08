import cls from './Header.module.scss'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <header className={cls.header}>
            <div className="container">
                <div className={cls.headerWrap}>
                    <div className={cls.headerlogo}></div>


                    <div className={cls.headerRight}>
                        <Link to="/login">Войти</Link>
                        <Link to="/register">Регистрация</Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
export default Header