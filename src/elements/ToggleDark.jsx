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

  const icon = isDark
    ? <i className="bi bi-moon-stars"></i>
    : <i className="bi bi-sun"></i>;

  return (
    <a
      href="#"
      id="toggleDark"
      className="text-2xl text-zinc-950 dark:text-white my-auto px-3"
      onClick={setTheme}
    >
      {icon}
    </a>
  );
};

export default ToggleDark;