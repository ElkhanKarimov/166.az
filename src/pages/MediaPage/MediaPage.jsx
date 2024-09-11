import React from "react";
import "./MediaPage.css";
import Photo from "../../images/Image (1).png";
import { Link } from "react-router-dom";
import sale from '../../images/sale.png'


const Media = () => {


    return (
        <>
            <div className="secondhead">
                <ul className="head">
                    <Link to="/sirketimiz/komandamiz/sirketimiz"><li>Haqqımızda </li></Link>
                    <Link to="/sirketimiz/komandamiz"><li>Komandamız</li></Link>
                    <Link to="/sirketimiz/media"><li className="choosen">Mediada biz</li></Link>
                    <li>Blog</li>
                    <li>Tez-tez verilən suallar</li>
                    <li>Qalereya</li>
                </ul>
            </div>

            <div className="media">
                <div className="media-head">
                    <div className="line1"></div>
                    <p>Mediada biz</p>
                </div>

                <div className="media-cards">
                    <div className="media-card">
                        <div className="media-card-img">
                            <img src={Photo} alt="" />
                        </div>
                        <div className="texts">
                            <div className="date">17 June 2021</div>
                            <p className="card-head">
                                Lorem ipsum dolor sit amet consectetur?
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare
                                viverra vestibulum neque...
                            </p>
                        </div>
                    </div>

                    <div className="media-card">
                        <div className="media-card-img">
                            <img src={Photo} alt="" />
                        </div>
                        <div className="texts">
                            <div className="date">17 June 2021</div>
                            <p className="card-head">
                                Lorem ipsum dolor sit amet consectetur?
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare
                                viverra vestibulum neque...
                            </p>
                        </div>
                    </div>

                    <div className="media-card">
                        <div className="media-card-img">
                            <img src={Photo} alt="" />
                        </div>
                        <div className="texts">
                            <div className="date">17 June 2021</div>
                            <p className="card-head">
                                Lorem ipsum dolor sit amet consectetur?
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare
                                viverra vestibulum neque...
                            </p>
                        </div>
                    </div>

                    <div className="media-card">
                        <div className="media-card-img">
                            <img src={Photo} alt="" />
                        </div>
                        <div className="texts">
                            <div className="date">17 June 2021</div>
                            <p className="card-head">
                                Lorem ipsum dolor sit amet consectetur?
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare
                                viverra vestibulum neque...
                            </p>
                        </div>
                    </div>

                    <div className="media-card">
                        <div className="media-card-img">
                            <img src={Photo} alt="" />
                        </div>
                        <div className="texts">
                            <div className="date">17 June 2021</div>
                            <p className="card-head">
                                Lorem ipsum dolor sit amet consectetur?
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare
                                viverra vestibulum neque...
                            </p>
                        </div>
                    </div>

                    <div className="media-card">
                        <div className="media-card-img">
                            <img src={Photo} alt="" />
                        </div>
                        <div className="texts">
                            <div className="date">17 June 2021</div>
                            <p className="card-head">
                                Lorem ipsum dolor sit amet consectetur?
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare
                                viverra vestibulum neque...
                            </p>
                        </div>
                    </div>

                    <div className="media-card">
                        <div className="media-card-img">
                            <img src={Photo} alt="" />
                        </div>
                        <div className="texts">
                            <div className="date">17 June 2021</div>
                            <p className="card-head">
                                Lorem ipsum dolor sit amet consectetur?
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare
                                viverra vestibulum neque...
                            </p>
                        </div>
                    </div>

                    <div className="media-card">
                        <div className="media-card-img">
                            <img src={Photo} alt="" />
                        </div>
                        <div className="texts">
                            <div className="date">17 June 2021</div>
                            <p className="card-head">
                                Lorem ipsum dolor sit amet consectetur?
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare
                                viverra vestibulum neque...
                            </p>
                        </div>
                    </div>

                    <div className="media-card">
                        <div className="media-card-img">
                            <img src={Photo} alt="" />
                        </div>
                        <div className="texts">
                            <div className="date">17 June 2021</div>
                            <p className="card-head">
                                Lorem ipsum dolor sit amet consectetur?
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare
                                viverra vestibulum neque...
                            </p>
                        </div>
                    </div>


                </div>
            </div>
            <div className='sale'>
                <img className='saleimg' src={sale} alt="" />
            </div>
        </>
    );
};

export default Media;