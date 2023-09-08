import {Route, Routes} from "react-router-dom";
import {AddArticlePage, DetailArticlePage, HomePage, LoginPage, ProfilePage, RegisterPage} from '../../pages'



export const router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/add' element={<AddArticlePage/>}/>
            <Route path='/detail/:id' element={<DetailArticlePage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
    )
}