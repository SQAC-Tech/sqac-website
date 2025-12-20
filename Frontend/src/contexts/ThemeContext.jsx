/**
 * Theme Context - Dark/Light Mode Management System
 * 
 * === COMPREHENSIVE THEME IMPLEMENTATION ===
 * Date: December 20-21, 2025
 * 
 * OVERVIEW:
 * This context provides the complete theme management system for the SQAC website,
 * including state management, localStorage persistence, and DOM manipulation
 * for seamless dark/light mode switching across all components.
 * 
 * === THEME TOGGLE BUTTON IMPLEMENTATION ===
 * 
 * LOCATION: Navbar.jsx (lines 52-66)
 * 
 * BUTTON COMPONENT STRUCTURE:
 * - Container: Button element with gradient background
 * - Icons: SVG sun (light mode) and moon (dark mode)
 * - Interaction: Click handler calling toggleTheme()
 * - Visual feedback: Hover effects and scaling animations
 * 
 * BUTTON STYLING:
 * - Background: Gradient from-accent to-accentSecondary/20
 * - Hover: Enhanced gradient with 30% opacity
 * - Scale: hover:scale-110 for visual feedback
 * - Transition: Smooth 300ms duration
 * - Shape: Rounded full (circle) for modern look
 * 
 * ICON IMPLEMENTATION:
 * - Sun icon (light mode): Yellow SVG with sun rays
 * - Moon icon (dark mode): Gray SVG with crescent moon
 * - Size: w-5 h-5 (20px x 20px)
 * - Colors: text-yellow-400 (sun), text-gray-700 (moon)
 * 
 * ACCESSIBILITY:
 * - aria-label="Toggle theme" for screen readers
 * - Semantic button element
 * - Keyboard accessible
 * - High contrast icons
 * 
 * === THEME SYSTEM ARCHITECTURE ===
 * 
 * STATE MANAGEMENT:
 * - isDarkMode: Boolean state (true = dark, false = light)
 * - Default: Dark mode (true) for consistent initial experience
 * - Persistence: localStorage with key 'theme'
 * - Fallback: Dark mode if no saved preference
 * 
 * DOM MANIPULATION:
 * - Dark mode: Adds 'dark' class, removes 'light' class
 * - Light mode: Adds 'light' class, removes 'dark' class
 * - Target: document.documentElement (html element)
 * - CSS Integration: Works with index.css theme selectors
 * 
 * LOCALSTORAGE INTEGRATION:
 * - Key: 'theme'
 * - Values: 'dark' or 'light'
 * - Persistence: Survives browser sessions
 * - Initial load: Reads saved preference on mount
 * - Updates: Saves immediately on theme change
 * 
 * === CONTEXT API IMPLEMENTATION ===
 * 
 * CUSTOM HOOK: useTheme()
 * - Provides theme state and toggle function
 * - Error handling: Throws if used outside provider
 * - Type safety: Ensures proper context usage
 * - Convenience: Simplifies component integration
 * 
 * PROVIDER COMPONENT: ThemeProvider
 * - Wraps entire application
 * - Manages theme state centrally
 * - Handles side effects (DOM, localStorage)
 * - Provides context value to all children
 * 
 * === INTEGRATION POINTS ===
 * 
 * NAVBAR COMPONENT:
 * - Imports: useTheme hook
 * - Usage: const { isDarkMode, toggleTheme } = useTheme()
 * - Button: onClick={toggleTheme}
 * - Icons: Conditional rendering based on isDarkMode
 * 
 * CSS SYSTEM:
 * - Selectors: html.light and html.dark
 * - Overrides: Component-specific styling
 * - Transitions: Smooth theme switching
 * - Variables: CSS custom properties
 * 
 * APP COMPONENT:
 * - Wrapping: ThemeProvider around entire app
 * - Scope: Global theme availability
 * - Performance: Single state source
 * - Consistency: Unified theme experience
 * 
 * === TECHNICAL IMPLEMENTATION DETAILS ===
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * - Single state source prevents redundant re-renders
 * - useEffect only runs when theme changes
 * - localStorage operations are synchronous but fast
 * - DOM class manipulation is efficient
 * 
 * ERROR HANDLING:
 * - Context validation in useTheme hook
 * - Graceful fallback to default theme
 * - localStorage error handling (implicit)
 * - No console errors in normal operation
 * 
 * BROWSER COMPATIBILITY:
 * - localStorage: Supported in all modern browsers
 * - classList API: IE10+ support
 * - SVG icons: Universal support
 * - CSS custom properties: Modern browsers
 * 
 * MAINTENANCE CONSIDERATIONS:
 * - Centralized theme logic
 * - Easy to add new theme-dependent features
 * - Consistent API across components
 * - Clear separation of concerns
 * 
 * FUTURE ENHANCEMENTS:
 * - System preference detection (prefers-color-scheme)
 * - Additional themes (high contrast, sepia)
 * - Theme transition animations
 * - Theme-specific component variations
 */
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to dark mode
  });

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
