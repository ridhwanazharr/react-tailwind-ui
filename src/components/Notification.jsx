import {useState} from 'react';
import NotificationItem from './NotificationItem'
import useWindowSize from "../hooks/useWindowSize";
import useBlurStore from '../store/blurStore';

const Notification = ({children}) => {
    const { isBlurred } = useBlurStore();
    const isMobile = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div className="relative text-zinc-950 dark:text-white my-auto px-3">
            <div onClick={() => setIsOpen(!isOpen)} className="rounded-full transition-all duration-150 ease-in-out hover:bg-black/15 hover:dark:bg-white/25 py-1 px-3 text-xl">
                <i className="fa-regular fa-bell"></i>
            </div>
            {!isMobile ?
            <>
                <div className={`absolute right-0 transform transition-all duration-150 ${isOpen ? 'scale-y-100 z-50 opacity-100' : 'scale-y-0 -z-50 opacity-0'}`}>
                    <div className={`notification-menu ${isBlurred && 'bg-blur'}`}>
                        <div className={`notification-header ${isBlurred && 'bg-blur'}`}>
                            <h1>Notification</h1>
                            <p>Mark all as read</p>
                        </div>
                        <div className="max-h-80 overflow-y-auto">
                            <NotificationItem />
                            <NotificationItem />
                            <NotificationItem />
                            <NotificationItem />
                            <NotificationItem />
                            <NotificationItem />
                        </div>
                    </div>
                </div>
            </>
                : 
            <>
                <div className={`notification-menu-mobile ${isBlurred && 'bg-blur'} ${isOpen ? 'z-50 translate-x-0 scale-x-100' : 'scale-x-0 z-0 translate-x-full'}`}>
                    <div className={`notification-header ${isBlurred && 'bg-blur'}`}>
                        <button className="opacity-75" onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-chevron-left"></i> Back</button>
                        <h1 className="">Notification</h1>
                    </div>
                    <div className="flex flex-col overflow-scroll">
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                    </div>
                </div>
            </>
            }
            
        </div>
     );
}
 
export default Notification;