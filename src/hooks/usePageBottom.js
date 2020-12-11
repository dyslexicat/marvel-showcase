import { useState, useEffect } from "react";

const usePageBottom = () => {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    // check if the user has reached the bottom of the page
    function handleScroll() {
      const isBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 2;
      setBottom(isBottom);
    }

    window.addEventListener("scroll", handleScroll);

    // remove the scroll event if user moves away from the page
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return bottom;
};

export default usePageBottom;
