import React from "react";
import "./hero.css";
import { Link, useLocation } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";

export default function Hero() {
  const location = useLocation();

  return (
    <section className="heerro">
      <div className="newSTYLE">
        <div className="newSTYLE-up">
          <div className="nwSTYL-lft">
            <div className="nwSTYL-lftUP">
              <h3>categories</h3>
            </div>
            <div className="nwSTYL-lftDWN">
              <ul>
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/shirts">
                    {" "}
                    <FaGreaterThan className="iccn" /> <span>Shirts</span>
                  </Link>
                </li>
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/t-shirts">
                    <FaGreaterThan className="iccn" /> <span>T-shirts</span>
                  </Link>
                </li>
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/jackets">
                    {" "}
                    <FaGreaterThan className="iccn" /> <span>Jackets</span>
                  </Link>
                </li>
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/bags">
                    <FaGreaterThan className="iccn" /> <span>Bags</span>
                  </Link>
                </li>
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/wrist-watches">
                    <FaGreaterThan className="iccn" />{" "}
                    <span>Wrist-watches</span>
                  </Link>
                </li>
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/footwears">
                    <FaGreaterThan className="iccn" /> <span>Footwears</span>
                  </Link>
                </li>
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/jewelries">
                    <FaGreaterThan className="iccn" /> <span>Jewelries</span>
                  </Link>
                </li>
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/more categories">
                    {" "}
                    <AiFillPlusCircle className="iccn" />{" "}
                    <span>More categories</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nwSTYL-Ryt">
            <div className="nwSTYL-RytTXT">
              <h4>new style</h4>
              <h1>men t-shirts</h1>
              <button>shop now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
