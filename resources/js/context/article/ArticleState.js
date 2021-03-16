import React, { useReducer } from 'react'
import axios from 'axios'
import ArticleContext from './articleContext'
import articleReducer from './articleReducer'
import{
    SET_LOADING,
    GET_ARTICLES,
    ADD_ARTICLE,
    DELETE_ARTICLE,
    EDIT_ARTICLE,
    SET_CURRENT,
    CLEAR_CURRENT,
    SET_ERROR
} from '../types'

const ArticleState = props => {
    const initialState = {
        articles: [],
        loading: false,
        current: null,
        error: null
    }

    const [ state, dispatch ] = useReducer(articleReducer, initialState);

  //Get Articles
  const getArticles = async () => {
      setLoading();
      try {
        const res = await axios.get("api/articles");

        dispatch({
            type: GET_ARTICLES,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error

        })
    }
  }

  //Add Articles
  const addArticle = async article => {

    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    setLoading();
    try {
        const res = await axios.post("api/articles", article, config);

        dispatch({
            type: ADD_ARTICLE,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error

        })
    }
  }

  const editArticle = async (article) => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    setLoading();
    try {

        const res = await axios.put(`api/articles/${article.id}`, article, config);

        dispatch({
            type: EDIT_ARTICLE,
            payload: res.data.data

        })

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error

        })
    }
  }

  //Delete Articles
  const deleteArticle = async (id) => {
    setLoading();
    try {

        const res = await axios.delete(`api/articles/${id}`);

        dispatch({
            type: DELETE_ARTICLE,
            payload: res.data.data

        })

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error

        })
    }
  }

  //Set current article
  const setCurrent =  async (article) => {
    setLoading();
    try {

        const res = await axios.get(`api/articles/${article.id}`);

        dispatch({
            type: SET_CURRENT,
            payload: res.data.data

        })

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error

        })
    }
  }

  //Clear current article
  const clearCurrent =  () => {
    dispatch({ type: CLEAR_CURRENT })
}


    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <ArticleContext.Provider
        value={{
            articles: state.articles,
            loading: state.loading,
            error: state.error,
            current: state.current,
            getArticles,
            deleteArticle,
            addArticle,
            editArticle,
            setCurrent,
            clearCurrent,
            setLoading
        }}>
            {props.children}
    </ArticleContext.Provider>
}

export default ArticleState;
