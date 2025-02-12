import {useState} from 'react';
import NotificationItem from './NotificationItem'

const Notification = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div className="relative text-zinc-950 dark:text-white my-auto px-3">
            <div onClick={() => setIsOpen(!isOpen)} className="rounded-full transition-all duration-150 ease-in-out hover:bg-black/15 hover:dark:bg-white/25 py-1 px-3 text-xl">
                <i className="fa-regular fa-bell"></i>
            </div>
            <div className={`absolute right-0 transform transition-all duration-100 ${isOpen ? 'scale-y-100 z-50 opacity-100' : 'scale-y-0 -z-50 opacity-0'}`}>
                <div className="bg-gray-200 dark:bg-zinc-900 rounded-lg outline-1 outline-black/50 dark:outline-white/50 absolute text-base right-0 min-w-80  min-h-72 max-h-96 drop-shadow-lg py-2">
                    <div className="flex justify-between my-2 px-2">
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
            
        </div>
     );
}
 
export default Notification;