import {ADD_ARTICLE, ARTICLE_MESSAGE, ArticleActionType, ArticleSchema, GET_ARTICLES} from "../types/articleTypes";

const initialState: ArticleSchema = {
    articles: [],
    message: '',
    firstLoad: false
}



export const articleReducer = (state = initialState, action: ArticleActionType) => {
    switch (action.type){
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload],
                message: 'Статья создана.'
            }

        case ARTICLE_MESSAGE:
            return {
                ...state,
                message: action.payload
            }

        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
                firstLoad: true
            }
        default:
            return state
    }
}

export default articleReducer