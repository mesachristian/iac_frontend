import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import logo from "assets/img/logo.png";
import "./animations.css";

const NAV_ITEMS_LEFT = [
  { label: "navbar.lblHome", url: "/" },
  { label: "navbar.lblProducts", url: "/products" },
  { label: "navbar.lblAbout", url: "/about" },
  { label: "navbar.lblContact", url: "/contact" },
];

const NAV_ITEMS_RIGHT = [{ label: "navbar.lblSignIn", url: "/login" }];

interface Props {
  isHome: boolean;
}

const HomeStyle = {
  navBg: "bg-white",
  leftItemsColor: "text-custom-green-400",
  btnTextColor: "text-white",
  btnBgColor: "bg-custom-green-400",
};

const NormalStyle = {
  navBg: "bg-custom-green-400",
  leftItemsColor: "text-white",
  btnTextColor: "text-custom-green-400",
  btnBgColor: "bg-white",
};

const Navbar = (props: Props) => {
  const [translate] = useTranslation();

  const location = useLocation();

  const [style, setStyle] = useState(HomeStyle);

  useEffect(() => {
    if (location.pathname === "/") {
      setStyle(HomeStyle);
    } else {
      setStyle(NormalStyle);
    }
  }, [location]);

  return (
    <div className="absolute top-0 left-0 w-full flex z-10">
      <div className="w-[23%] h-40 flex justify-center items-center pr-12 ">
        <img alt="" src={logo} className="iac-img-anim scale-125" />
      </div>

      <header className={"w-[77%] h-16 px-4 " + style.navBg}>
        <div className="relative flex justify-between items-center w-full min-h-[60px]">
          <nav>
            <ul className="flex items-center list-none m-0 p-0">
              {NAV_ITEMS_LEFT.map((item, idx) => {
                return (
                  <Link to={item.url} key={idx}>
                    <li>
                      <button
                        className={
                          "block py-3 px-5 lg:px-8 tracking-[.2px] bg-transparent font-semibold text-[15px] border-none outline-none " +
                          style.leftItemsColor
                        }
                      >
                        {translate(item.label)}
                      </button>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>

          <nav>
            <ul className="flex items-center list-none m-0 p-0">
              {NAV_ITEMS_RIGHT.map((item, idx) => {
                return (
                  <Link to={item.url} key={idx}>
                    <li>
                      <button
                        className={
                          "block py-3 px-5 rounded-3xl font-semibold text-[13px] outline-none my-0 mx-3 " +
                          style.btnBgColor +
                          " " +
                          style.btnTextColor
                        }
                        style={{
                          border:
                            item.label === "lblSignIn"
                              ? "1px solid #1363DF"
                              : "none",
                        }}
                      >
                        {translate(item.label)}
                      </button>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;