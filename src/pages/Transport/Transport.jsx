import React, { useState } from 'react'
import './Transport.css'
import parent from '../../images/parent.png'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { PiPhoneLight } from "react-icons/pi";
import reklam from '../../images/reklam.png'

const Transport = () => {

    return (
        <div>
            <div className='parentdiv'><img className='parent' src={parent} alt="" /></div>
            <div className='sidebar-reklam'>
                <div className='sidebar'>
                    <div className='sidebar-titlet'>Transport</div>
                    <div className='sidebar-title'>Logistika</div>
                    <div className='sidebar-title'>Yükdaşıma</div>
                    <div className='sidebar-titlex'>Xalçayuma <IoIosArrowUp className='arrow' /></div>
                    <p className='sidebar-p'>Ev heyvanlarının və digər qoxuların aradan qaldırılması</p>
                    <p className='sidebar-p'>Korporativ xidmət</p>
                    <p className='sidebar-p'>Sintefon yorğan, yastıq və örtüklərin yuyulması</p>
                    <p className='sidebar-p'>Xüsusi ləkə çıxarma</p>
                    <p className='sidebar-p'>Ədyal, pled və örtüklərin yuyulması</p>
                    <p className='sidebar-p'>Xalçaların bərpası - Overlock</p>
                    <div className='sidebar-titlee'>Təmizlik xidməti <IoIosArrowDown className='arrow' /></div>
                    <div className='sidebar-title'>Evakuasiya</div>
                    <div className='sidebar-title'>Anbar xidməti</div>
                    <div className='sidebar-title'>İşçi qüvvəsi xidməti</div>
                    <div className='sidebar-titlee'>Usta xidməti <IoIosArrowDown className='arrow' /></div>
                    <div className='sidebar-title'>Texnoloji həllər</div>
                    <div className='sidebar-title'>HVAC</div>
                    <div className='sidebar-titlee'>Sanitariya xidməti <IoIosArrowDown className='arrow' /></div>
                    <div className='sidebar-title'>Karqo xidməti</div>
                </div>
                <div>
                    <div className='transport-sec'>
                        <div className='transport-info'>
                            <h3 className='transport-title'>Transport</h3>
                            <div className='sifaris-call'>
                                <span className='sifaris'>Sifariş ver</span>
                                <span className='call'><PiPhoneLight className='phone' /> 166</span>
                            </div>
                            <p className='turizm'>Turizm, iş və digər sahələrdə ən rahat, müasir standartlara uyğun və operativ sərnişin daşınma xidmətini 166 Transport təklif edir.</p>
                            <p className='turizm'>166 Transport xidməti hazırda ölkənin Sprinter icarəsi və turların təşkili üzrə ən qabaqcıl xidmətlərindən biridir.</p>
                            <p className='turizm'>Peşəkar sürücülərimiz tərəfindən sərnişinlərin bir ünvandan digər ünvana təhlükəsiz daşınmasını təmin edirik.</p>
                        </div>
                        <div><img src={reklam} alt="" /></div>
                    </div>
                    <div className='sprinter-info'>
                        <h4 className='sprinter'><p>Sprinterlərimizin üstünlük və özəllikləri:</p></h4>
                        <div className='info-boxss'>
                            <div className='info-box'><p className='wifi'>WI-FI sisteminin olması</p></div>
                            <div className='info-box'><p className='wifi2'>Powerbankların olması</p></div>
                            <div className='info-box'><p className='wifi'>Sürət həddinə xüsusi nəazarət (GPS)</p></div>
                            <div className='info-box'><p className='wifi'>18-20 nəfərlik olması</p></div>
                            <div className='info-box'><p className='wifi'>Yumşaq və komfortlu oturacaq</p></div>
                            <div className='info-box'><p className='wifi2'>Kondisioner və monitor</p></div>
                            <div className='info-box'><p className='wifi'>Masa və işıqlı salon</p></div>
                            <div className='info-box'><p className='wifi'>Mütəmadi təmizlənən salon</p></div>
                            <div className='info-box'><p className='wifi'>Baqaj</p></div>
                            <div className='info-box'><p className='wifi2'>Peşəkar sürücü heyəti</p></div>
                        </div>
                    </div>
                    <div className='how-answer'>
                        <h4 className='how'>Sprinterlərdən nə üçün istifadə etmək olar?</h4>
                        <ul className='answer'>
                            <li className='li'>Şəhərdaxili sərnişin daşınması </li>
                            <li className='li'>Ailəvi, dostlarla və ya iş yoldaşlarınızla birgə  istirahət üçün</li>
                            <li className='li'>Toy, yas və digər mərasimlər üçün </li>
                            <li className='li'>Ölkədaxili işgüzar səfərlər məqsədi ilə (işçi heyətinin daşınması)</li>
                            <li className='li'>Hava limanından turistlərin istənilən ünvana çatdırılması </li>
                            <li className='li'>Həftəiçi şirkət işçilərinin daşınması</li>
                            <li className='li'>Məktəblilərin və universitet tələbələrinin daşınması</li>
                            <li className='li'>Müalicə məqsədilə bölgələrimizə səyahət edən şəxslər</li>
                            <li className='li'>Ölkənin dörd bir yanına səfər təşkil edən tur agentləri</li>
                            <li className='li'>Zavod, fabrik, bank işçilərinin istirahət və ya iş məqsədilə daşınması </li>
                            <li className='li'>Özəl səfərlər üçün sürücü və nəqliyyat vasitəsinin icarəsi</li>
                        </ul>
                    </div>
                </div>
             </div>
         </div>
    )
}

export default Transport