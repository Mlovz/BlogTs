import UserModel from "../model/userModel.js";
import bcrypt from 'bcrypt'

export const register = async(req, res) => {
    try{
        const {username, password} = req.body

        const user = await UserModel.findOne({username: username})

        if(user) return res.status(400).json({
            message: 'Пользователь с таким именем уже есть!'
        })

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await UserModel.create({
            ...req.body, password: hashPassword
        })

        res.status(200).json({
            message: 'Success',
            newUser
        })

    }catch (err){
        console.log(err)
    }
}
export const login = async() => {}