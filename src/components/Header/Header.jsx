import React from "react";
import "./header.css";

import { BsFillPersonFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import Searchbar from "../../components/searchbar/Searchbar";
import { BiSolidHeartSquare } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="headContainer">
        <div className="head-check">
          <div className="headCheckLFT">
            <div className="headCheck-1">
              <BsFillPersonFill className="hedChk-Icn" />
              <p>my account</p>
            </div>
            <div className="headCheck-2">
              <BsCheckCircleFill className="hedChk-Icn" />
              <p>checkout</p>
            </div>
            <div className="headCheck-3">
              <FaShoppingCart className="hedChk-Icn" />
              <p>my cart</p>
            </div>
          </div>
          <div className="headCheckRYT">
            <select name="" id="countries">
              <option value="">GBR</option>
              <option value="">USA</option>
              <option value="">FRA</option>
              <option value="">GER</option>
              <option value="">CHN</option>
            </select>
            <select name="" id="currency">
              <option value="">£</option>
              <option value="">$</option>
              <option value="">₤</option>
              <option value="">¥</option>
            </select>
          </div>
        </div>
        <div className="headMID">
          <div className="headMID-left">
            <div className="headMID-leftICN">
              <GiClothes className="Fash" />
            </div>
            <h2>
              <span>f</span>ashion <span>w</span>ears
            </h2>
          </div>
          <div className="headMID-ryt">
            <Searchbar />
            <BiSolidHeartSquare className="headMID-icn" />
            <BsFillBagFill className="headMID-icn" />
          </div>
        </div>
        <div className="headBTTM">
          <div className="headBTTM-Left">
            <div className="hdBTTM-LftIcn">
              <GiHamburgerMenu />
            </div>
            <h2>all categories</h2>
          </div>
          <div className="headBTTM-Ryt">
            <ul className="head-navbar">
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li
                className={location.pathname === "/destination" ? "active" : ""}
              >
                <Link to="/shop">Shop</Link>
              </li>
              <li className={location.pathname === "/services" ? "active" : ""}>
                <Link to="/blog">Blog</Link>
              </li>
              <li className={location.pathname === "/contact" ? "active" : ""}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
