import React from 'react'
import './Media.css'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import mediafirstpic from '../../images/mediafirstpic.png'
import Photo from "../../images/Image (1).png";
import { Link } from 'react-router-dom';

const Media = () => {
    return (
        <div className='media-sec'>
            <div className='media-arrow'>
                <h3 className='mediah'>Mediada biz</h3>
                <Link to="/sirketimiz/media"><a className='hamsi' href="">Hamısina bax <LiaLongArrowAltRightSolid /></a></Link>
            </div>
            <div>
                <img className='mediafirstpic' src={mediafirstpic} alt="" />
            </div>
            <div className='mediacards'>
                <div className='cardss'>
                    <div className="media-card">
                        <div className="media-card-img">
                            <img className='photo' src={Photo} alt="" />
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
                <div>
                    <div className="media-card">
                        <div className="media-card-img">
                            <img className='photo' src={Photo} alt="" />
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
                <div>
                    <div className="media-card">
                        <div className="media-card-img">
                            <img className='photo' src={Photo} alt="" />
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
        </div>
    )
}

export default Media