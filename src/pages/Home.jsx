import logo from '../img/unsplash_S-llxYh3GzI.svg'
import sessionsPhotoLeft from '../img/unsplash_TnOyyEtrKd0.svg'
import aboutPhotoLeft from '../img/unsplash_TnOyyEtrKd01.svg'
import CostPhotoLeft from '../img/unsplash_M3fhZSBFoFQ.svg'
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
            <div className='about'>
                <div className='about-text'>
                    <p>About RitmStyle</p>
                </div>
                <div className='about-container'>
                    <div className='about-container-grid'>
                        <div className='ferst'>
                            <div className='ferst-uper-text'>
                                RitmStyle массаж
                            </div>
                            <div className='ferst-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.

                                Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.
                            </div>
                        </div>
                        <div className='two'>
                            <img src={aboutPhotoLeft} alt="" />
                        </div>
                        <div className='thre'>
                            <img src={aboutPhotoLeft} alt="" />
                        </div>
                        <div className='fore'>
                            <div className='ferst-uper-text'>
                                RitmStyle массаж
                            </div>
                            <div className='ferst-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.

                                Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sessioncost'>
                <div className='cost-text'>
                    <p>Session cost</p>
                </div>
                <div className='sessionscost-container'>
                    <div className='sessionscost-left'>
                        <p>RitmStyle with immersion</p>
                        <p>Абонемент на RitmStyle</p>
                        <p>RitmStyle для пар</p>
                        <p>RitmStyle для беременных</p>
                        <p>RitmStyle +  фотосессия</p>
                    </div>
                    <div className='sessions-center'>
                        <p>1000р.</p>
                        <p>1000р.</p>
                        <p>1000р.</p>
                        <p>1000р.</p>
                        <p>1000р.</p>
                    </div>
                    <div className='sessionscost-rigt'>
                        <img src={CostPhotoLeft} alt="" />
                        <p>Подарочный сертификат</p>
                    </div>
                </div>
            </div>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148784.80927346795!2d18.52522347305248!3d54.361175167659475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd731c14d4fa6f%3A0x9bb9fbf163b7be8d!2zR2RhxYRzaw!5e0!3m2!1sen!2spl!4v1691367267415!5m2!1sen!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Home;
