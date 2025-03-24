import { useState, useEffect } from 'react';

type DarkModeHook = {
  isDarkMode: boolean;
  toggle: () => void;
};

export const useDarkMode = (): DarkModeHook => {
  // Check for saved preference or use system preference
  const getInitialMode = (): boolean => {
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };
  
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialMode);
  
  // Update the theme based on the current state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);
  
  // Toggle between dark and light mode
  const toggle = (): void => {
    setIsDarkMode(prevMode => !prevMode);
  };
  
  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent): void => {
      if (localStorage.getItem('darkMode') === null) {
        setIsDarkMode(e.matches);
      }
    };
    
    // Add event listener for system preference change
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // For older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);
  
  return { isDarkMode, toggle };
};
