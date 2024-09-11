import React from "react";
import './SecondHeader.css'
import { Link } from "react-router-dom";

const SecondHeader = () => {
  return (
    <div className="secondhead">
      <ul className="head">
        <li >Haqqımızda </li>
        <li className="choosen">Komandamız</li>
        <li>Mediada biz</li>
        <li>Blog</li>
        <li>Tez-tez verilən suallar</li>
        <li>Qalereya</li>
      </ul>
    </div>
  );
};

export default SecondHeader;