import React from "react";
import "./AboutWork.css";

const AboutWork = () => {
  return (
    <>
      <div className="about-work">
        <div className="about-work-top">
          <div className="line1"></div>
          <p>Biz necə işləyirik?</p>
        </div>

        <div className="about-work-cards">
          <div className="about-work-card">
            <div className="card-empty"></div>
            <div className="about-work-card-box">
              <div className="small">1</div>
              <p>166-ya zəng etməklə sifariş verirsiniz</p>
              <span>
                Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən
                istifadə etməklə biz əlaqə saxlaya bilərik 166 və ya
              </span>
            </div>
          </div>

          <div className="about-work-card">
            <div className="about-work-card-box2 ">
              <div className="small spesific">2</div>
              <p>Operatorlarımız sifarişlərinizi qəbul edir</p>
              <span>
                Operatorumuz sizə xidmətlə bağlı məlumatları verir, ödəniş üsulu
                və şərtlərlə bağlı məlumatlandırır.
              </span>
            </div>
            <div className="card-empty2 spesifics"></div>
          </div>

          <div className="about-work-card">
            <div className="card-empty"></div>
            <div className="about-work-card-box">
              <div className="small">3</div>
              <p>Əməkdaşlarımız sifariçşi yerinə yetirir</p>
              <span>
                Əməkdaşlarımız təyin olunan ünvanda arzuladığınız xidmət üzrə
                sizin sifarişinizi yerinə yetirir
              </span>
            </div>
          </div>

          <div className="about-work-card">
            <div className="about-work-card-box2">
              <div className="small">4</div>
              <p>Sifariş tamamlanır</p>
              <span>
                Təyin olunan xidmət üzrə əməkdaşlarımız sifarişinizi tamamlayır
              </span>
            </div>
            <div className="card-empty2"></div>
          </div>
          <div className="about-work-card">
            <div className="card-empty"></div>
            <div className="about-work-card-box">
              <div className="small">5</div>
              <p>Xidmət bitdikdən sonra siz ödəniş edirsiniz</p>
              <span>
                Ödənişin rahatlığı üçün sizə həm onlayn, həm də nağd ödəniş
                imkanları təqdim edilir.
              </span>
            </div>
          </div>
          <div className="about-work-card">
            <div className="about-work-card-box2">
              <div className="small">6</div>
              <p>Göstərdiyimiz xidmətin keyfiyyəti ölçülür</p>
              <span>
                Xidmətdən məmnunluğunu ölçmək məqsədilə müştəri məmmuniyyəti
                şöbəmiz sizinlə əlaqə saxlayır.
              </span>
            </div>
            <div className="card-empty2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWork;