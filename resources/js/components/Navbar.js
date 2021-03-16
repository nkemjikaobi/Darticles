import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';

const Navbar = () => {
    return (
        <Fragment>
            <nav className='navbar navbar-expand-sm navbar-dark bg-info mb-2'>
                <div className='container'>
                    <a href='#' className='navbar-brand'>Darticles</a>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
if (document.getElementById('article')) {
    ReactDOM.render(<Navbar></Navbar>, document.getElementById('article'));
}
