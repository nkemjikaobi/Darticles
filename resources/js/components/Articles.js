import React, { Fragment, useEffect, useContext } from 'react'
import ArticleContext from '../context/article/articleContext';
import AlertContext from '../context/alert/alertContext';
import ArticleItem from './ArticleItem';
import Spinner from './Spinner';

const Articles = () => {

    const articleContext = useContext(ArticleContext);
    const { articles, getArticles, loading, error } = articleContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;
  
    useEffect(() => {
        getArticles();
        //eslint-disable-next-line
    },[]);

   if(error){
    console.log(error)
    setAlert(error.response.statusText,'danger');
}

if(loading){
    return <Spinner/>
}

//Display no articles if articles array is empty
if(!loading && articles.length === 0 ){
   return <p className='center'>No articles to show...</p>
}



else{
    return (
        <Fragment>
            <div>
                {articles.map(article =>
                    <ArticleItem  article={article} key={article.id}/>
                )}
            </div>
        </Fragment>
    )
}

}

export default Articles
