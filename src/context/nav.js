import { createContext } from 'react';
import { useState } from 'react';

export const navOptions = {
  home: 'home',
  advisory: 'advisory',
  development: 'development',
  management: 'management',
  talkToUs: 'talkToUs',
};

export const NavContext = createContext('');

export const NavProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState(navOptions.home);

  const value = {
    activeNav,
    setActiveNav,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
