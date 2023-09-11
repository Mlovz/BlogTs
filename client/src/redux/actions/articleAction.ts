import {Dispatch} from "redux";
import {GlobalLoadingType, LOADING} from "../types/globalTypes";
import {uploadImage} from "../../utils/uploadImage";
import {$api} from "../../api";
import {
    ADD_ARTICLE,
    ARTICLE_MESSAGE,
    ArticleAddFetch,
    ArticleAddType,
    ArticleGetType,
    ArticleMessageType, ArticlesGetFetch,
    GET_ARTICLES
} from "../types/articleTypes";


export const createArticle = (data:any, image:any) => async(dispatch:Dispatch<GlobalLoadingType | ArticleAddType | ArticleMessageType>) => {
    let media: any = []

    try {
        dispatch({type: ARTICLE_MESSAGE, payload: ''})

        dispatch({type: LOADING, payload: true})

        if(image) media = await uploadImage([image])

        const res = await $api.post<ArticleAddFetch>('/create', {...data, image: media[0].url})

        dispatch({
            type: ADD_ARTICLE,
            payload: res.data.article
        })

        dispatch({type: LOADING,payload: false})

    }catch (err: any){
        dispatch({type: LOADING,payload: false})
    }
}



export const getArticles = () => async(dispatch: Dispatch<GlobalLoadingType | ArticleGetType>) => {
    try {

        dispatch({type: LOADING,payload: true})

        const res = await $api.get<ArticlesGetFetch>('getArticles')

        dispatch({
            type: GET_ARTICLES,
            payload: res.data.articles
        })

        dispatch({type: LOADING,payload: false})

    }catch (err: any){
        dispatch({type: LOADING,payload: false})
    }
}