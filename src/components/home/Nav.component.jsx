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
    container: "absolute w-full md:max-w-[1440px] md:mx-auto",
    subContainer: "flex justify-between text-white mx-6 mt-5",
    logo: "title text-[46px]",
    logotwo: "title text-[46px] text-black",
    menu: "menu-btn",
  };
  const { container, subContainer, logo, logotwo, menu } = styles;

  return (
    <>
      <nav className={container}>
        <div className={subContainer}>
          <a href="/" className={mobile ? logotwo : logo}>
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
