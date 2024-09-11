import React from "react";
import "./AboutHero.css";
import hero1 from '../../images/image.png'

const AboutHero = () => {
  return (
    <>
      <div className="about-hero">
        <div className="about-hero-left">
          <div className="about-hero-left-head">
            <div className="line1"></div>
            <p>Haqqımızda</p>
          </div>

          <p className="hero-text1"> “166 Yükdaşıma və Logistika – Yükünüzü daşıyırıq”</p>
          <div className="about-hero-left-img">
            <img className="hero1" src={hero1} alt="" />
          </div>
        </div>
        <div className="about-hero-right">
          <p className="hero-text2">
            2012-ci ildə fəaliyyətinə bir neçə yük maşını ilə başlayan
            “Yüktaksisi.az MMC” brendi hazırda yükdaşıma və logistika sahəsi
            üzrə ölkənin qabaqcıl şirkətlərindən biridir. Yüklərin daşınması
            yalnız ölkədaxili sərhədlərlə məhdudlaşmır, həmçinin beynəlxalq
            arenada da həyata keçirilir.Daim müştərilərimizin xidmətində olmaq
            və operativ xidmət göstərmək məqsədilə 166 qaynar xəttimiz 7/24
            ölkənin istənilən nöqtəsindən zəngləri qəbul edir. Göstərdiyimiz
            xidmətin müştərilərimizə rahat və əlçatan olması məqsədilə xidmət
            sahələrimiz genişlənməyə davam edir. Şirkətimiz yükdaşıma sahəsi ilə
            fəaliyyətə başlasa da, hazırda müxtəlif kompleks xidmətləri
            – yükdaşıma ve logistika, evakuasiya, işçi qüvvəsi, usta xidməti,
            anbar xidməti, təmizlik xidməti və xalça yuma xidmətlərini
            müştərilərinə təqdim edib.Xidmətlərimizin daha əlçatan olması üçün
            sərfəli qiymət və hər bir bölgəyə xidmət anlayışları ilə çalışırıq.
             166 brendi altında fəaliyyət göstərən hər bir xidmətin
            keyfiyyətinin ölçülməsi bizim üçün olduqca vacibdir. Bu məqsədlə,
            mütəmadi olaraq müştərilərimizin göstərilən xidmətlər üzrə
            fikirlərini öyrənir, təklif və iradlarına əsasən xidmət keyfiyyətini
            daim təkmilləşdiririk. (ISO 9001:2015 - Keyfiyyət İdarəetmə Sistemi,
            ISO 45001:2018 - Peşə Sağlamlığı və Əməyin Təhlükəsizliyi İdarəetmə
            Sistemi və ISO 14001:2015 - Ətraf Mühitin İdarəetmə sistemi üzrə
            beynəlxalq sertifikatları)
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHero;