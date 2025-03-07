import {useState} from 'react';
import useWindowSize from '../hooks/useWindowSize';
import ToggleDark from "./ToggleDark";
import ToggleBlur from "./ToggleBlur";
import useBlurStore from '../store/blurStore';

const SettingItems = () => {
    return (
        <div className="max-h-80 overflow-y-auto">
            <div className="flex flex-col px-3 py-4 gap-y-4">
                <div className="flex justify-between">
                    <p>Dark Mode</p> <ToggleDark/>
                </div>
                <div className="flex justify-between">  
                    <p>Backdrop Blur</p> <ToggleBlur/>
                </div> 
            </div>
        </div>
    )
}

const Settings = () => {
    const { isBlurred } = useBlurStore();
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useWindowSize();

    return ( 
        <div className="relative">
            <button className="text-black dark:text-white rounded-full transition-all duration-150 ease-in-out hover:bg-black/15 hover:dark:bg-white/25 py-1 px-3 text-xl" onClick={()=>setIsOpen(!isOpen)}><i className="fa-solid fa-gear"></i></button>

            {!isMobile ?
            <>
                <div className={`absolute right-0 transform transition-all duration-150 ${isOpen ? 'scale-y-100 z-50 opacity-100' : 'scale-y-0 -z-50 opacity-0'}`}>
                    <div className={`notification-menu ${isBlurred && 'bg-blur'}`}>
                        <div className={`notification-header ${isBlurred && 'bg-blur'}`}>
                            <h1>Settings</h1>
                        </div>
                        <SettingItems/>
                    </div>
                </div>
            </>
                : 
            <>
                <div className={`notification-menu-mobile ${isBlurred && 'bg-blur'} ${isOpen ? 'z-50 translate-x-0 scale-x-100' : 'scale-x-0 -z-50 translate-x-full'}`}>
                    <div className={`notification-header ${isBlurred && 'bg-blur'}`}>
                        <button className="opacity-75" onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-chevron-left"></i> Back</button>
                        <h1 className="">Settings</h1>
                    </div>
                    <SettingItems/>
                </div>
            </>
            }
        </div>
     );
}
 
export default Settings;