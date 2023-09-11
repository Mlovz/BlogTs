import React, {FC} from 'react';
import cls from './ArticleCard.module.scss'
import {Link} from "react-router-dom";
import {Text} from "../";
import {sliceText} from "../../utils/sliceText";


interface ArticleCardProps{
    title: string,
    createdAt: Date,
    content: string,
    id: string
}

const ArticleCard:FC<ArticleCardProps> = ({title, content, createdAt, id}) => {
    return (
        <Link to={`/article/${id}`} className={cls.card}>
            <Text color='solid'>{sliceText(30, title)}</Text>
            <Text as='span' size={12} fw={500}>{createdAt.toString()}</Text>
            <Text as='p' size={16} fw={500}>{sliceText(100, content)}</Text>
        </Link>
    );
};

export default ArticleCard;
