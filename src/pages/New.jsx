import React from 'react';
import { Link } from 'react-router-dom';
import './new.css'
const New = () => {
    return (
        <div className='new'>
            <div className='new-title'>
                <p>New</p>
            </div>
            <div className='new-cards'>
                <Link to="/new-page">
                    <div className='card'>
                        <p>Новый формат сеансов</p>
                    </div>
                </Link>
                <Link to="/new-page">
                    <div className='card'>
                        <p>Новый формат сеансов</p>
                    </div>
                </Link>
                <Link to="/new-page">
                    <div className='card'>
                        <p>Новый формат сеансов</p>
                    </div>
                </Link>
                <Link to="/new-page">
                    <div className='card'>
                        <p>Новый формат сеансов</p>
                    </div>
                </Link>
                <Link to="/new-page">
                    <div className='card'>
                        <p>Новый формат сеансов</p>
                    </div>
                </Link>
                <Link to="/new-page">
                    <div className='card'>
                        <p>Новый формат сеансов</p>
                    </div>
                </Link>
            </div >

        </div >
    );
}

export default New;
