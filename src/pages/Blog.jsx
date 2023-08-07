import React from 'react';
import './blog.css'
import img from '../img/image.svg'
const Blog = () => {
    return (
        <div className='blog'>
            <div className='title'>
                <p>Blog</p>
            </div>
            <div className='item'>
                <div className='item-img'>
                    <img src={img} alt="" />
                </div>
                <div className='right'>
                    <div className='item-description'>
                        <h2>New session format</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.</p>
                    </div>
                    <div className='item-btn'>
                        Read article
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='item-img'>
                    <img src={img} alt="" />
                </div>
                <div className='right'>
                    <div className='item-description'>
                        <h2>New session format</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.</p>
                    </div>
                    <div className='item-btn'>
                        Read article
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
