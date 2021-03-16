import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Articles from './Articles';
import Form from './Form';
import Alert from './Alert';
import ArticleState from '../context/article/ArticleState';
import AlertState from '../context/alert/AlertState'

const App = () => {

    return (
        <ArticleState>
            <AlertState>
                <div>
                    <Navbar />
                    <div className='container'>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div><Alert/></div>
                                <div className="card">
                                    <div className="card-header">Articles</div>
                                </div>
                                <div className='mt-2'><Form /></div>
                                <div><Articles /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </AlertState>
        </ArticleState>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App></App>, document.getElementById('app'));
}





