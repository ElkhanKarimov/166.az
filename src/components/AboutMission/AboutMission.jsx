import React from "react";
import Timer from "../../images/Vector (1).png";
import Ticket from "../../images/ion_pricetag-outline.png";
import Settings from "../../images/Group.png";
import Car from "../../images/Vector (4).png";
import "./AboutMission.css";

const AboutMission = () => {
  return (
    <>
      <div className="about-mis">
        <div className="about-mis-left">
          <div className="about-mis-left-box">
            <p>526368+</p>
            <span>Daşınmış ofis və ev</span>
          </div>
          <div className="about-mis-left-box">
            <p>2365+</p>
            <span>Təmizlik edilmiş məkan</span>
          </div>
          <div className="about-mis-left-box">
            <p>327166+</p>
            <span>Müştəri rəyləri</span>
          </div>
          <div className="about-mis-left-box">
            <p>304264+</p>
            <span>Məmnun qalan müştərilər</span>
          </div>
        </div>

        <div className="about-mis-right">
          <div className="about-mis-right-head">
            <div className="line1"></div>
            <p>Missiyamız</p>
          </div>
          <p className="mis-text">
            Missiyamız, müştərilərimizi və partnyorlarımızı dərindən anlamaq,
            onlara effektiv logistik həlləri yüksək keyfiyyətdə təqdim etmək və
            eyni zamanda əməkdaşlarımızın şəxsi inkişafı və motivasiyasını üst
            səviyyədə tutmaqdır.
          </p>

          <div className="mis-boxs">
            <div className="mis-box">
              <div className="mis-box-circle">
                <img src={Timer} alt="" />
              </div>
              <p>Sürətli xidmət</p>
            </div>

            <div className="mis-box">
              <div className="mis-box-circle">
                <img src={Ticket} alt="" />
              </div>
              <p>Sərfəli qiymət</p>
            </div>

            <div className="mis-box">
              <div className="mis-box-circle">
                <img src={Settings} alt="" />
              </div>
              <p>Kompleks həllər</p>
            </div>

            <div className="mis-box">
              <div className="mis-box-circle">
                <img src={Car} alt="" />
              </div>
              <p>Nəqliyyat infrastrukturunun inkişafı</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMission;