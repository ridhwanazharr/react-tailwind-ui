const NotificationItem = () => {
    return ( 
        <div className="hover:bg-gray-400 select-none dark:hover:bg-zinc-700">
            <div className="flex gap-x-3 text-sm px-2 py-2">
                <div className="">
                    <img src="/person1.jpg" alt="Profile" className="w-10 rounded-full mt-1"/>
                </div>
                <div className="flex flex-col">
                    <p>John doe just added new update on the project.</p>
                    <p className="opacity-50 text-xs">Today, 12:14 AM</p>
                </div>
            </div>
        </div>
     );
}
 
export default NotificationItem;