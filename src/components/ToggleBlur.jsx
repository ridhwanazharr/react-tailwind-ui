import { useEffect } from "react";
import useWindowSize from '../hooks/useWindowSize';
import useBlurStore from "../store/blurStore";

const ToggleBlur = () => {
  const isMobile = useWindowSize();
  const { isBlurred, toggleBlur, setBlur } = useBlurStore();

  useEffect(() => {
    setBlur(isMobile ? false : true);
  }, [isMobile, setBlur]);

  return (
    <div onClick={toggleBlur} className="flex rounded-full outline-1 outline-zinc-900 dark:outline-zinc-200 h-6 w-12 transition-all duration-150">
        <div className={`bg-zinc-900 dark:bg-zinc-200 rounded-full h-5 w-5 transition-all duration-150 my-auto ${!isBlurred ? 'translate-x-1' : 'translate-x-6'}`}></div>
    </div>
  );
};

export default ToggleBlur;
