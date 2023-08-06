import logo from '../img/unsplash_S-llxYh3GzI.svg'
import sessionsPhotoLeft from '../img/unsplash_TnOyyEtrKd0.svg'
import React from 'react';
import './home.css'
const Home = () => {
    return (
        <div className='home'>
            <div className='home-art'>
                {/* <img src={logo} alt="" /> */}
                <p>Health promotion</p>
                <h2>Aquatherapy <br />
                    Ritmstyle
                </h2>
            </div>
            <div className='sessions'>
                <div className='sessions-text'>
                    <p>Sessions RitmStyle</p>
                </div>
                <div className='sessions-photo'>
                    <div className='sessions-photo-left'>
                        <img src={sessionsPhotoLeft} alt="" />
                    </div>
                    <div className='sessions-photo-right'>
                        <div className='sessions-photo-right-img1'></div>
                        <div className='sessions-photo-right-img2'></div>
                        <div className='sessions-photo-right-img3'></div>
                        <div className='sessions-photo-right-img4'></div>
                    </div>
                </div>
            </div>
            <div className='reviews'>
                <div className='reviews-text'>
                    <p>Reviews</p>
                </div>
                <div className='slider'>

                </div>
            </div>
        </div>
    );
}

export default Home;
