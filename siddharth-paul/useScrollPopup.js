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
    let scrollsSinceLastPopup = 0; // Track scrolls since last popup

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      
      // Only count significant scrolls (more than threshold pixels)
      if (scrollDifference > scrollThreshold) {
        scrollsSinceLastPopup++;
        console.log(`Scrolls since last popup: ${scrollsSinceLastPopup}`);
        
        // Show popup every 2-3 scrolls (randomly between 2 and 3)
        const randomTarget = Math.floor(Math.random() * 2) + 2; // Random between 2-3
        if (scrollsSinceLastPopup >= randomTarget && !isPopupOpen) {
          setIsPopupOpen(true);
          scrollsSinceLastPopup = 0; // Reset counter for next popup
          
          setScrollCount(prevCount => prevCount + 1);
        }
        
        lastScrollY = currentScrollY;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPopupOpen]);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return {
    isPopupOpen,
    closePopup,
    scrollCount
  };
};

export default useScrollPopup;