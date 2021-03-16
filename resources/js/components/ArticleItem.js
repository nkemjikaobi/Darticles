import React, { useContext } from 'react'
import ArticleContext from '../context/article/articleContext';
import PropTypes from 'prop-types'
import AlertContext from '../context/alert/alertContext';
import Spinner from './Spinner';

const ArticleItem = ({ article }) => {

    const articleContext = useContext(ArticleContext);
    const { deleteArticle , setCurrent, setLoading, loading, error} = articleContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const onDelete = () => {
        deleteArticle(article.id);
        if(!loading){
            setAlert('Article Deleted', 'danger')
        }
    }

    const onEdit = () => {
        setLoading();
        setCurrent(article);
        setLoading(false);
    }

    if(loading){
        return <Spinner/>
    }

    return (
        <div className='card card-body mb-3'>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <button className='btn btn-primary' onClick={onEdit}>EDIT</button><br></br>
            <button className='btn btn-danger' onClick={onDelete}>DELETE</button>
        </div>
    )
}

ArticleItem.propTypes = {
    article: PropTypes.object.isRequired,
}

export default ArticleItem
