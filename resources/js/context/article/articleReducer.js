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

const articleReducer = (state, action) => {
    switch(action.type){
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
                loading: false
            }
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [action.payload,...state.articles],
                contacts: state.articles.map(article => article.id === action.payload.id ? action.payload : article),
                loading: false
            }
        case EDIT_ARTICLE:
            return {
                ...state,
                articles: state.articles.map(article => article.id === action.payload.id ? action.payload : article),
                loading: false
            }
        case DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(article => article.id !== action.payload.id),
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
                loading: false
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default articleReducer
