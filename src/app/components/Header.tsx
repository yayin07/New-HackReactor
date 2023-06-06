import React from "react";
import Image from "next/image";
import BG from "../assets/galvanize_logo_small-scale_full-color_dark-background.png";

const Header = () => {
  return (
    <div>
      <header className="bg-blue section-padding-right" role="banner">
        {/* <!-- Secondary navigation --> */}
        <div id="site-header-top">
          <div className="center-container">
            <nav
              id="secondary-navigation"
              className="center-wrapper-left hide-on-tablet font-inter font-color-white font-700 display-flex flex-content-nowrap flex-end backlight-wrapper"
              aria-label="Secondary Navigation"
            >
              <a>ABOUT</a>
              <a>ALUMNI</a>
              <a>EVENTS</a>
              <a>LOGINS</a>
            </nav>
          </div>
        </div>

        {/* <!-- Primary navigation --> */}
        <div id="site-header-bottom" className="bg-navy-blue top-rounded-right">
          <div className="center-container">
            <div className="center-wrapper-left display-flex flex-center-vertical">
              <Image alt="" src={BG} id="header-logo" />

              <nav
                id="primary-navigation"
                className="hide-on-tablet fill-width underslide-wrapper font-color-white font-poppins display-flex flex-content-nowrap flex-end"
                aria-label="Primary Navigation"
              >
                <a
                  className="underslide-selected"
                  href="https://www.galvanize.com/hack-reactor/"
                >
                  Hack Reactor Bootcamps
                </a>
                <a href="https://www.galvanize.com/military/">For Military</a>
                <a href="https://www.galvanize.com/corporate-training/">
                  For Companies
                </a>
              </nav>
              <div
                className="hide-on-desktop text-end fill-width"
                style={{ minWidth: "50px" }}
              >
                =
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
