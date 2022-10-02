import React from "react";
import {
  AiFillApple,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  const styles = {
    container: "w-full",
    mobileContainer: "lg:hidden mx-6 mt-14 py-8 border-y-[1px] border-black",
    desktopContainer:
      "hidden lg:flex justify-between items-center mt-20 border-b-[1px] border-black",
    footerLogoContainer: "flex justify-between items-center text-black",
    footerLogo: "title text-[46px]",
    footerLinks: "text-lg py-2",
    footerLinksContainer: "font-light",
    footerLinksContainerDesktop: "flex gap-20",
    socials: "flex gap-3",
    copyright: "text-center font-light my-5",
    copyrightSpan: "title text-xl",
    gradient: "h-[22px] gradient",
  };

  const {
    container,
    mobileContainer,
    desktopContainer,
    footerLogoContainer,
    footerLogo,
    footerLinks,
    footerLinksContainer,
    footerLinksContainerDesktop,
    socials,
    copyright,
    copyrightSpan,
    gradient,
  } = styles;
  return (
    <>
      <footer className={container}>
        <div className={mobileContainer}>
          <div className={footerLogoContainer}>
            <a href="/" className={footerLogo}>
              Travlr.
            </a>
            <div className={socials}>
              <AiFillApple size={25} color="667085" />
              <AiOutlineInstagram size={25} color="667085" />
              <AiOutlineTwitter size={25} color="667085" />
              <RiFacebookCircleFill size={25} color="667085" />
            </div>
          </div>
          <ol className={footerLinksContainer}>
            <li className={footerLinks}>About</li>
            <li className={footerLinks}>Contact</li>
            <li className={footerLinks}>Planner</li>
            <li className={footerLinks}>Destinations</li>
          </ol>
        </div>
        <div className={desktopContainer}>
          <a href="/" className="title text-[46px]">
            Travlr.
          </a>
          <ol className={footerLinksContainerDesktop}>
            <li className={footerLinks}>About</li>
            <li className={footerLinks}>Contact</li>
            <li className={footerLinks}>Planner</li>
            <li className={footerLinks}>Destinations</li>
          </ol>
          <div className={socials}>
            <AiFillApple size={25} color="667085" />
            <AiOutlineInstagram size={25} color="667085" />
            <AiOutlineTwitter size={25} color="667085" />
            <RiFacebookCircleFill size={25} color="667085" />
          </div>
        </div>
        <p className={copyright}>
          Ⓒ 2022 <span className={copyrightSpan}>Travlr.</span> | All Rights
          Reserved
        </p>
        <div className={gradient}></div>
      </footer>
    </>
  );
};

export default Footer;
