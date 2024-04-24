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
          <img
            src="https://i.ibb.co/35XRn1R/Untitled-design-2.png"
            id="image"
            className="text-7xl font-bold mb-8 text-green fade-in w-108 h-108"
          />
        </RevealOnScroll>
      </div>
      {/* <div id="two" className="h-screen flex justify-center items-center">
        <RevealOnScroll>
          <img src="https://i.ibb.co/RgBQKph/image1.jpg" id="image1" />
          <br />
          <img src="https://i.ibb.co/3YtHVb5/image2.jpg" id="image2" />
        </RevealOnScroll>
      </div> */}
      <div
        id="three"
        className="h-screen flex flex-col justify-center items-center"
      >
        <RevealOnScroll>
          <div className="p-6 md:p-10">
            <p className="text-3xl mt-10" id="about">
              Welcome to Pale Moon Brewing in Arcata, CA! <br /> <br />
              Crafting quality brews in the heart of Arcata, Pale Moon Brewing
              is your destination for small-batch excellence. From our crisp
              IPAs to our smooth stouts, each pour is a testament to our passion
              for the craft. Join us in our cozy taproom for a taste of Arcata's
              finest brews. Cheers to good times and great beer at Pale Moon
              Brewing!
            </p>
          </div>
        </RevealOnScroll>
      </div>
      <div
        id="four"
        className="h-screen flex flex-col justify-center items-center"
      >
        <RevealOnScroll>
          <div className="p-4 md:p-10">
            {/* <p className="text-3xl mt-10">600 F St suite 7, Arcata, CA 95521</p> */}
            <br />
            <Map />
            <p className="text-3xl mt-10">600 F St suite 7, Arcata, CA 95521</p>
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
          </div>
        </RevealOnScroll>
      </div>
      <div
        id="five"
        className="h-screen flex flex-col justify-center items-center"
      >
        <RevealOnScroll>
          <div className="p-4 md:p-10">
            <p className="text-3xl mt-10" id="contact">
              <div style={{ whiteSpace: "nowrap" }}>
                {/* Phone number */}
                <span style={{ display: "inline-block", marginRight: "10px" }}>
                  <a
                    href="mailto:palemoonbrewing@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="2em"
                      width="2em"
                    >
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
                    </svg>
                  </a>
                </span>
                {/* Instagram */}
                <span style={{ display: "inline-block", marginRight: "10px" }}>
                  <a
                    href="https://www.instagram.com/palemoonbrewing/"
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
                    href="https://www.facebook.com/palemoonbrewing/"
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
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default App;
