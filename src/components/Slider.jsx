import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CommentsSlider extends React.Component {
  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };

    return (
      <Slider {...settings} className='comments'>
        <div className="comments__comment col-6">
          <img src="https://zyan.vercel.app/images/testimonial/1.jpg" alt="" />
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <h5>Elaonaro Pena</h5>
          <span>Marketing Coordinator</span>
          <p>
            Financial planners help people to knowledge in about how to
            invest and in save their moneye the most efficient way eve plan
            ners help people tioniio know ledige in about how.
          </p>
        </div>
        <div className="comments__comment col-6">
          <img src="https://zyan.vercel.app/images/testimonial/2.jpg" alt="" />
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <h5>Elaonaro Pena</h5>
          <span>Marketing Coordinator</span>
          <p>
            Financial planners help people to knowledge in about how to
            invest and in save their moneye the most efficient way eve plan
            ners help people tioniio know ledige in about how.
          </p>
        </div>
        <div className="comments__comment col-6">
          <img src="https://zyan.vercel.app/images/testimonial/1.jpg" alt="" />
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <h5>Elaonaro Pena</h5>
          <span>Marketing Coordinator</span>
          <p>
            Financial planners help people to knowledge in about how to
            invest and in save their moneye the most efficient way eve plan
            ners help people tioniio know ledige in about how.
          </p>
        </div>
        <div className="comments__comment col-6">
          <img src="https://zyan.vercel.app/images/testimonial/1.jpg" alt="" />
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <h5>Elaonaro Pena</h5>
          <span>Marketing Coordinator</span>
          <p>
            Financial planners help people to knowledge in about how to
            invest and in save their moneye the most efficient way eve plan
            ners help people tioniio know ledige in about how.
          </p>
        </div>
      </Slider>
    );
  }
}

export default CommentsSlider;

