import React, { useEffect, useRef, useState } from "react";
import Map from "./Map";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // Ensure observer keeps observing until component unmounts
        if (entry.isIntersecting) {
          entry.target.dataset.visited = "true";
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the component is visible
    );

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.intersectionRatio > 0 &&
          entry.target.dataset.visited !== "true"
        ) {
          setIsVisible(true);
          entry.target.dataset.visited = "true";
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const classes = `transition-opacity duration-1000 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div ref={ref} className={`center-middle ${classes}`}>
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto text-center items-center">
      <div id="one" className="h-screen flex justify-center items-center">
        <RevealOnScroll>
          <h1 className="text-7xl font-bold mb-8 text-green fade-in" id="name">
            Pale Moon Brewing
          </h1>
          <img src="https://i.ibb.co/5F0zv4G/Pale-Moon-Logo.png" id="image" />
        </RevealOnScroll>
      </div>
      <div id="two" className="h-screen flex justify-center items-center">
        <RevealOnScroll>
          <img
            src="https://i.ibb.co/vv5vk90/Untitled-design-1.png"
            id="image"
          />
        </RevealOnScroll>
      </div>
      <div
        id="three"
        className="h-screen flex flex-col justify-center items-center"
      >
        <RevealOnScroll>
          <p className="text-3xl mt-10" id="about">
            Welcome to Pale Moon Brewing in Arcata, CA! <br /> <br />
            Crafting quality brews in the heart of Arcata, Pale Moon Brewing is
            your destination for small-batch excellence. From our crisp IPAs to
            our smooth stouts, each pour is a testament to our passion for the
            craft. Join us in our cozy taproom for a taste of Arcata's finest
            brews. Cheers to good times and great beer at Pale Moon Brewing!
          </p>
        </RevealOnScroll>
      </div>
      <div
        id="four"
        className="h-screen flex flex-col justify-center items-center"
      >
        <RevealOnScroll>
          <p className="text-3xl mt-10">600 F St suite 7, Arcata, CA 95521</p>
          <br />
          <Map />
          <p className="text-3xl mt-10">
            Monday: Closed
            <br />
            Tuesday: Closed
            <br />
            Wednesday: Closed
            <br />
            Thursday: 2–8 PM
            <br />
            Friday: 2–9 PM
            <br />
            Saturday: 12–9 PM
            <br />
            Sunday: 12–8 PM
          </p>
        </RevealOnScroll>
      </div>
      <div
        id="five"
        className="h-screen flex flex-col justify-center items-center"
      >
        <RevealOnScroll>
          <p className="text-3xl mt-10" id="contact">
            <div style={{ whiteSpace: "nowrap" }}>
              {/* Phone number */}
              <span style={{ display: "inline-block", marginRight: "10px" }}>
                <a
                  href="tel:+1234567890"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                  >
                    <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
                  </svg>
                </a>
              </span>
              {/* Instagram */}
              <span style={{ display: "inline-block", marginRight: "10px" }}>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                  >
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
                  </svg>
                </a>
              </span>
              {/* Facebook */}
              <span style={{ display: "inline-block", marginRight: "10px" }}>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                  </svg>
                </a>
              </span>
            </div>
          </p>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default App;
