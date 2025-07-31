import { useState, useEffect } from 'react';

const useScrollPopup = (userIdentifier) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    // Check if popup should be shown
    const popupCancelled = localStorage.getItem('popupCancelled');
    const popupSubmitted = localStorage.getItem('popupSubmitted');
    
    // Don't show popup if already cancelled or submitted
    if (popupCancelled || popupSubmitted) {
      return;
    }

    let lastScrollY = window.scrollY;
    let scrollThreshold = 100; // Minimum scroll distance to count as a "scroll"
    const targetScrolls = 3; // Number of scrolls before showing popup

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      
      // Only count significant scrolls (more than threshold pixels)
      if (scrollDifference > scrollThreshold) {
        setScrollCount(prevCount => {
          const newCount = prevCount + 1;
          console.log(`Scroll count: ${newCount}/${targetScrolls}`);
          
          // Show popup after target number of scrolls
          if (newCount >= targetScrolls) {
            setIsPopupOpen(true);
            return newCount;
          }
          
          return newCount;
        });
        
        lastScrollY = currentScrollY;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return {
    isPopupOpen,
    closePopup
  };
};

export default useScrollPopup;