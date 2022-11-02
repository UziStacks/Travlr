import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Nav = ({ handleModalToggle }) => {
  const [burgerToggle, setBurgerToggle] = useState("close");
  const [mobile, setMobile] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const toggleBurger = () =>
    setBurgerToggle(burgerToggle === "close" ? "open" : "close");
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [setMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setColor, setTextColor]);

  const styles = {
    container: "fixed top-0 left-0 w-full md:max-w-[1440px] md:mx-auto z-50",
    subContainer: "flex justify-between items-center text-white mx-6",
    logo: "title text-[46px]",
    logotwo: "title text-[46px] text-black",
    menu: "menu-btn",
  };
  const { container, subContainer, logo, logotwo, menu } = styles;

  return (
    <>
      <nav className={container} style={{ backgroundColor: color }}>
        <div className={subContainer} style={{ color: textColor }}>
          <a href="/" className={mobile ? logotwo : logo}>
            Travlr.
          </a>
          {/* {mobile ? (
            <div onClick={toggleBurger} className={menu}>
              <div className={burgerToggle}></div>
              <div className={burgerToggle}></div>
              <div className={burgerToggle}></div>
            </div>
          ) : ( */}
          <button onClick={handleModalToggle}>Get started</button>
          {/* )} */}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
