import React from "react";
import './OurTeam.css'
import Person1 from "../../images/Frame 36.png";
import Person2 from "../../images/Frame 37.png";
import Person3 from "../../images/Frame 37 (1).png";
import { Link } from "react-router-dom";
const OurTeam = () => {
    return (
        <>
            <div className="secondhead">
                <ul className="head">
                    <Link to="sirketimiz"><li>Haqqımızda </li></Link>
                    <li className="choosen">Komandamız</li>
                    <Link to="/sirketimiz/media"><li>Mediada biz</li></Link>
                    <li>Blog</li>
                    <li>Tez-tez verilən suallar</li>
                    <li>Qalereya</li>
                </ul>
            </div>

            <div className="team">
                <div className="team-head">
                    <div className="line1"></div>
                    <p>Komandamız</p>
                </div>

                <div className="team-cards">
                    <div className="team-card">
                        <div className="team-card-img">
                            <img className="person1" src={Person1} alt="" />
                        </div>
                        <p>Samida Qəniyeva</p>
                        <span>Korporativ satış şöbəsinin rəhbəri</span>
                    </div>

                    <div className="team-card">
                        <div className="team-card-img">
                            <img className="person1" src={Person3} alt="" />
                        </div>
                        <p>Altay Nəcəfov</p>
                        <span>Hüquq şöbəsinin rəhbəri</span>
                    </div>

                    <div className="team-card">
                        <div className="team-card-img">
                            <img className="person1" src={Person2} alt="" />
                        </div>
                        <p>Jane Doe</p>
                        <span>Hüquq şöbəsinin rəhbəri</span>
                    </div>

                    <div className="team-card">
                        <div className="team-card-img">
                            <img className="person1" src={Person1} alt="" />
                        </div>
                        <p>Samida Qəniyeva</p>
                        <span>Korporativ satış şöbəsinin rəhbəri</span>
                    </div>

                    <div className="team-card">
                        <div className="team-card-img">
                            <img className="person1" src={Person3} alt="" />
                        </div>
                        <p>Altay Nəcəfov</p>
                        <span>Hüquq şöbəsinin rəhbəri</span>
                    </div>

                    <div className="team-card">
                        <div className="team-card-img">
                            <img className="person1" src={Person3} alt="" />
                        </div>
                        <p>Altay Nəcəfov</p>
                        <span>Hüquq şöbəsinin rəhbəri</span>
                    </div>

                    <div className="team-card">
                        <div className="team-card-img">
                            <img className="person1" src={Person1} alt="" />
                        </div>
                        <p>Samida Qəniyeva</p>
                        <span>Korporativ satış şöbəsinin rəhbəri</span>
                    </div>

                    <div className="team-card">
                        <div className="team-card-img">
                            <img className="person1" src={Person3} alt="" />
                        </div>
                        <p>Altay Nəcəfov</p>
                        <span>Hüquq şöbəsinin rəhbəri</span>
                    </div>

                    <div className="team-card">
                        <div className="team-card-img">
                            <img className="person1" src={Person3} alt="" />
                        </div>
                        <p>Altay Nəcəfov</p>
                        <span>Hüquq şöbəsinin rəhbəri</span>
                    </div>


                </div>
            </div>
        </>
    );
};

export default OurTeam;