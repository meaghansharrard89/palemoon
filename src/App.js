import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-7xl font-bold mb-8 text-green fade-in">
        Pale Moon Brewing
      </h1>
      <RevealOnScroll>
        <p className="text-3xl h-[15em] mt-[10em]">Images</p>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="text-3xl h-[15em] mt-[10em]">About</p>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="text-3xl h-[15em] mt-[10em]">Location and Map</p>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="text-3xl h-[15em] mt-[10em]">Contact</p>
      </RevealOnScroll>
      {/* Add more RevealOnScroll components 
            for other elements */}
    </div>
  );
};

export default App;
