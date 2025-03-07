import { useState, useEffect } from 'react';

const ToggleDark = () => {

  const [isDark, setIsDark] = useState(false);

  const setTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div onClick={() => setTheme()} className="flex rounded-full outline-1 outline-zinc-900 dark:outline-zinc-200 h-6 w-12 transition-all duration-150">
        <div className={`bg-zinc-900 dark:bg-zinc-200 rounded-full h-5 w-5 transition-all duration-150 my-auto ${!isDark ? 'translate-x-1' : 'translate-x-6'}`}></div>
    </div>
  );
};

export default ToggleDark;