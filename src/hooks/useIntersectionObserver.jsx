import { useEffect, useState } from "react";

const useIntersectionObserver = (reference) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleIntersect = (entries, observer) => {
        if (entries[0].isIntersecting || entries[0].intersectionRatio > 0) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
          observer.disconnect();
        }
      }
  
      const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0px 0px 100px 0px",
        threshold: 0.0,
      });
  
      if (reference) {
        observer.observe(reference.current);
      }
  
      return () => observer.disconnect();
    }, [reference]);
  
    return [isVisible];
}; 

export default useIntersectionObserver;