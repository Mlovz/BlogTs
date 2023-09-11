import ArticleModel from "../model/articleModel.js";


export const createArticle = async(req, res) => {
    try{
        const {title} = req.body

        const newArticle = await ArticleModel.create({
            ...req.body,
            user: req.user._id,
            title: title.toLowerCase()
        })


        res.json({
            message: 'Success',
            article: {...newArticle._doc}
        })

    }catch (err){
        console.log(err)
    }
}

export const getArticles = async(req, res) => {
    try{
        const articles = await ArticleModel.find()

        res.json({
            message: 'Success',
            articles
        })
    }catch (err){
        console.log(err)
    }
}