import { useEffect, useState } from "react";

export function ScrollDirection() {
  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      // setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");

      if (scrollY < lastScrollY && scrollDir !== "scrolling down") {
        console.log(scrollY, lastScrollY);

        console.log("curr dirr: " + scrollDir);
        setScrollDir("scrolling down");
      } else if (scrollY > lastScrollY && scrollDir !== "scrolling up") {
        console.log(scrollY, lastScrollY);
        console.log("curr dirr: " + scrollDir);
        setScrollDir("scrolling up");
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return { scrollDir };
}
