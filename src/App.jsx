import React from "react";
import { ReactComponent as Leftangle } from "./images/icon-angle-left.svg";
import { ReactComponent as Rightangle } from "./images/icon-angle-right.svg";
import { ReactComponent as Arrow } from "./images/icon-arrow.svg";
import { useState, useEffect } from "react";
import slide1 from "./images/desktop-image-hero-1.jpg";
import slide2 from "./images/desktop-image-hero-2.jpg";
import slide3 from "./images/desktop-image-hero-3.jpg";
import mobileSlide1 from "./images/mobile-image-hero-1.jpg";
import mobileSlide2 from "./images/mobile-image-hero-2.jpg";
import mobileSlide3 from "./images/mobile-image-hero-3.jpg";
import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";
import { ReactComponent as Close } from "./images/icon-close.svg";
const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 777);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slides = [
    {
      backgroundImageMobile: `url(${mobileSlide1})`,
      backgroundImageDesktop: `url(${slide1})`,
      title: "Discover innovative ways to decorate",
      text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      backgroundImageMobile: `url(${mobileSlide2})`,

      backgroundImageDesktop: `url(${slide2})`,
      title: "We are available all across the globe",
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major citiesthroughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      backgroundImageMobile: `url(${mobileSlide3})`,

      backgroundImageDesktop: `url(${slide3})`,
      title: "Manufactured with the best materials",
      text: `Our modern furniture store provide a high level of quality. Our company
        has invested in advanced technology to ensure that every product is made
        as perfect and as consistent as possible. With three decades of
        experience in this industry, we understand what customers want for their
        home and office.`,
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 700);
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="container">
      <main>
        <nav
          className="nav"
          style={{
            backgroundImage: isMobile
              ? slides[currentSlide].backgroundImageMobile
              : slides[currentSlide].backgroundImageDesktop,
          }}
        >
          {" "}
          {isMobile && (
            <div className="menu" onClick={toggleMenu}>
              {isMenuOpen ? <Close /> : <Hamburger />}
              <h1>room</h1>{" "}
              {isMenuOpen && <div className="overlay" onClick={toggleMenu} />}
            </div>
          )}
          <ul className={`${isMobile && isMenuOpen ? "open" : ""}`}>
            {isMobile ? (
              isMenuOpen ? (
                <li onClick={toggleMenu}>
                  <Close />
                </li>
              ) : (
                ""
              )
            ) : (
              <li>room</li>
            )}
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <article>
          <section>
            <div>
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].text}</p>
              <div className="btn">
                Shop now <Arrow />
              </div>
            </div>
          </section>
          <div className="slider">
            <div onClick={handlePrevSlide}>
              <Leftangle />
            </div>
            <div onClick={handleNextSlide}>
              <Rightangle />
            </div>
          </div>
        </article>
      </main>
      {/* <h2>We are available all across the globe</h2>
      <p>
        With stores all over the world, it's easy for you to find furniture for
        your home or place of business. Locally, we’re in most major cities
        throughout the country. Find the branch nearest you using our store
        locator. Any questions? Don't hesitate to contact us today.
      </p>
      <h2>Manufactured with the best materials</h2>
      <p>
        Our modern furniture store provide a high level of quality. Our company
        has invested in advanced technology to ensure that every product is made
        as perfect and as consistent as possible. With three decades of
        experience in this industry, we understand what customers want for their
        home and office.
      </p> */}
      <footer>
        <div></div>
        <div>
          {" "}
          <h3>About our furniture</h3>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default App;
