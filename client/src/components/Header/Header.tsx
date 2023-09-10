import cls from './Header.module.scss'
import {Link} from 'react-router-dom'
import {Button} from "../index";
import {useSelector} from "react-redux";


const Header = () => {
    const state:any = useSelector(state => state)

    return (
        <header className={cls.header}>
            <div className="container">
                <div className={cls.headerWrap}>
                    <div className={cls.headerlogo}></div>


                    <h1>{state.reducer.username}</h1>

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