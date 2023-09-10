import axios from "axios";
import {Dispatch} from 'redux'
import {AuthStateUserData} from "../../utils/typescript";
import {AUTH, AUTH_ERROR, AuthActionType, AuthType} from "../types/authTypes";
import {GlobalLoadingType, LOADING} from "../types/globalTypes";
import {TOKEN_KEY} from "../../utils/localstorage";
import {$api} from "../../api";


export const login = (userData: AuthStateUserData) => async(dispatch: Dispatch<AuthType | GlobalLoadingType> ) => {
    try {

        dispatch({type: LOADING, payload: true})

        const res = await $api.post('/login', userData)

        dispatch({
            type: AUTH,
            payload: {
                user: res.data.user,
                token: res.data.accessToken,
                error: ''
            }
        })

        dispatch({type: LOADING, payload: false})

        localStorage.setItem(TOKEN_KEY, res.data.accessToken)
        window.location.href = '/'
    }catch (err:any){
        dispatch({
            type: AUTH_ERROR,
            payload: err.response.data.message
        })
        dispatch({type: LOADING, payload: false})
    }
}


export const refreshToken = () => async(dispatch: Dispatch<AuthType | GlobalLoadingType> ) => {
    const token = localStorage.getItem(TOKEN_KEY)

    if(token) {
        try {


            dispatch({type: LOADING, payload: true})

            const res = await $api.get('/refreshToken')

            dispatch({
                type: AUTH,
                payload: {
                    user: res.data.user,
                    token: res.data.accessToken,
                    error: ''
                }
            })

            dispatch({type: LOADING, payload: false})

        }catch (err: any){
            dispatch({
                type: AUTH_ERROR,
                payload: err.response.data.message
            })
            dispatch({type: LOADING, payload: false})
        }
    }
}