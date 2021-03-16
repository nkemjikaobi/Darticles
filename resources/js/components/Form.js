import React, { Fragment, useState, useContext , useEffect } from 'react'
import ArticleContext from '../context/article/articleContext';
import AlertContext from '../context/alert/alertContext';
import Spinner from './Spinner';


const Form = () => {

    const articleContext = useContext(ArticleContext);
    const { addArticle, current, editArticle, clearCurrent , error} = articleContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const [article, setArticle] = useState({
        title: '',
        body: ''
    });

    useEffect(() => {
        if(current !== null) {
            setArticle(current);
        }
        else{
            setArticle({
                title: '',
                body: ''
            });
        }

    }, [articleContext, current]);


    const { title, body } = article;

    const onChange = e => setArticle({ ...article, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();

        if(title == '' || body == ''){
            setAlert('Title and Body are required', 'danger')
        }
        else if(current === null){
            addArticle(article);
            setAlert('Article Added', 'success')
        }
        else{
            editArticle(article);
            if(error == null){
                setAlert('Article Updated', 'success')
            }
            else{
                //console.log(error.response.data.statusText);
            }

        }
        clearCurrent();
    }
    // if(error !== null){
    //     console.log(error.response.status);
    //     //setAlert(error.response.statusText,'danger');
    // }

    

    return (
        <Fragment>
            <form className='mb-3' onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type='text' className='form-control' name='title' value={title}  onChange={onChange} placeholder='Title'/>
                </div>
                <div className='form-group'>
                    <input type='text' className='form-control' name='body' value={body}  onChange={onChange} placeholder='Body'/>
                </div>
                <div className='form-group'>
                    <input type='submit' className='form-control btn btn-success' name='submit' value= {current ? 'UPDATE' : 'ADD'} />
                </div>
            </form>
        </Fragment>
    )
}

export default Form
