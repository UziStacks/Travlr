import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Nav = ({ handleModalToggle }) => {
  const [burgerToggle, setBurgerToggle] = useState("close");
  const [mobile, setMobile] = useState(false);
  const toggleBurger = () =>
    setBurgerToggle(burgerToggle === "close" ? "open" : "close");
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [setMobile]);

  const styles = {
    container: "absolute w-full",
    subContainer: "flex justify-between text-white mx-6 mt-5",
    logo: "title text-[46px]",
    menu: "menu-btn",
  };
  const { container, subContainer, logo, menu } = styles;

  return (
    <>
      <nav className={container}>
        <div className={subContainer}>
          <a href="/" className={logo}>
            Travlr.
          </a>
          {mobile ? (
            <div onClick={toggleBurger} className={menu}>
              <div className={burgerToggle}></div>
              <div className={burgerToggle}></div>
              <div className={burgerToggle}></div>
            </div>
          ) : (
            <button onClick={handleModalToggle}>Get started</button>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
