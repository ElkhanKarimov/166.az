import React from 'react'
import './Xidmetler.css'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import truck from '../../images/yukmasini.png'
import cekic from '../../images/cekic.png'
import av from '../../images/av.png'
import adamlar from '../../images/adamlar.png'
import kutu from '../../images/kutu.png'
import kub from '../../images/kub.png'
import ulduz from '../../images/ulduz.png'
import sonuyulduz from '../../images/sonuyulduz.png'

const Xidmetler = () => {
    return (
        <div className='xidmetler-sec'>
            <div className='xidmet-arrow'>
                <h3 className='xidmetler'>Xidmətlər</h3>
                <a className='hamsi' href="">Hamısina bax <LiaLongArrowAltRightSolid /></a>
            </div>
            <div className='xidmetlerpics'>
                <div className='logisticbox'>
                    <img className='truckimg' src={truck} alt="" />
                    <div className='la'>
                        <h5 className='logistic'>Logistika</h5>
                        <p className='avideo'>A videoconference was held with
                            the participation of the acting
                            chairman of the Customs Cooperation
                            Council of the World...</p>
                    </div>
                    <img className='ulduz' src={ulduz} alt="" />
                </div>
                <div className='logisticbox'>
                    <img className='truckimg' src={cekic} alt="" />
                    <div className='la'>
                        <h5 className='logistic'>Usta Xidməti</h5>
                        <p className='avideo'>A videoconference was held with
                            the participation of the acting
                            chairman of the Customs Cooperation
                            Council of the World...</p>
                    </div>
                    <img className='ulduz' src={sonuyulduz} alt="" />
                </div>
                <div className='logisticbox'>
                    <img className='truckimg' src={av} alt="" />
                    <div className='la'>
                        <h5 className='logistic'>Anbar Xidməti</h5>
                        <p className='avideo'>A videoconference was held with
                            the participation of the acting
                            chairman of the Customs Cooperation
                            Council of the World...</p>
                    </div>
                    <img className='ulduz' src={sonuyulduz} alt="" />
                </div>
                <div className='logisticbox'>
                    <img className='truckimg' src={adamlar} alt="" />
                    <div className='la'>
                        <h5 className='logistic'>İşçi Qüvvəsi Xidməti</h5>
                        <p className='avideo'>A videoconference was held with
                            the participation of the acting
                            chairman of the Customs Cooperation
                            Council of the World...</p>
                    </div>
                    <img className='ulduz' src={sonuyulduz} alt="" />
                </div>
                <div className='logisticbox'>
                    <img className='truckimg' src={kutu} alt="" />
                    <div className='la'>
                        <h5 className='logistic'>Kargo</h5>
                        <p className='avideo'>A videoconference was held with
                            the participation of the acting
                            chairman of the Customs Cooperation
                            Council of the World...</p>
                    </div>
                    <img className='ulduz' src={sonuyulduz} alt="" />
                </div>
                <div className='logisticbox'>
                    <img className='truckimg' src={kub} alt="" />
                    <div className='la'>
                        <h5 className='logistic'>Texnoloji həllər</h5>
                        <p className='avideo'>A videoconference was held with
                            the participation of the acting
                            chairman of the Customs Cooperation
                            Council of the World...</p>
                    </div>
                    <img className='ulduz' src={sonuyulduz} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Xidmetler