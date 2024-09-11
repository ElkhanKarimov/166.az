import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Placeholder from "../../images/image (2).png";
import { TiStarFullOutline } from "react-icons/ti";
import "./Comments.css";

const Comments = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const testimonialsData = [
        {
            id: 1,
            title: "Lisa Smith",
            description:
                "Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
            image: Placeholder,
        },
        {
            id: 2,
            title: "Lisa Smith",
            description:
                "Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
            image: Placeholder,
        },
        {
            id: 3,
            title: "Lisa Smith",
            description:
                "Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
            image: Placeholder,
        },
        {
            id: 4,
            title: "Lisa Smith",
            description:
                "Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
            image: Placeholder,
        },
    ];

    return (
        <div className='comments-sec'>
            <div className='comments-info'>
                <div>
                    <h3 className='musteri'>Müştəri rəyləri</h3>
                    <p className='musterilorem'>Lorem Ipsum Dolor
                        Sit Amet Consectetur.
                        Magna Tellus Nibh
                        Lectus Congue Amet. </p>
                </div>
                <div>
                    <p className='reviews'>Total Reviews</p>
                    <p className='total'>122 K</p>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="card">
                            <div className="top">
                                <img src={testimonial.image} alt={testimonial.title} />
                                <div className="id">0{testimonial.id}</div>
                            </div>
                            <div className="star">
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                            </div>
                            <p className="descr">{testimonial.description}</p>
                            <div className="line"></div>
                            <p className="card-name">{testimonial.title}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default Comments;