export const GET_ARTICLES = 'GET_ARTICLES'
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const ARTICLE_MESSAGE = 'ARTICLE_MESSAGE'

export interface Article{
    category:string
    content:string
    createdAt:Date
    image:string
    likes:string[]
    title:string
    user:string
    __v:number
    _id:string
}


export interface ArticleSchema{
    articles: Article[],
    message?: string,
    firstLoad?:boolean
}
export interface ArticleAddFetch {
    article: Article,
    message?: string
}

export interface ArticlesGetFetch {
    articles: Article[],
    message?: string
}

export interface ArticleMessageType {
    type: typeof ARTICLE_MESSAGE,
    payload: string
}

export interface ArticleGetType {
    type: typeof GET_ARTICLES,
    payload: Article[]
}

export interface ArticleAddType {
    type: typeof ADD_ARTICLE,
    payload: Article
}

export type ArticleActionType = ArticleGetType | ArticleAddType | ArticleMessageType