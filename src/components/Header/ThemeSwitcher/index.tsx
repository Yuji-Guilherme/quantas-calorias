import { useTheme } from './hook';

import { SunMedium, Moon } from 'lucide-react';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="group" onClick={() => toggleTheme()}>
      {theme === 'light' && <SunMedium className="header_logo" />}
      {theme === 'dark' && <Moon className="header_logo w-6 h-6" />}
    </button>
  );
}

export { ThemeSwitcher };
