const NotificationItem = () => {
    return ( 
        <div className="notification-item">
            <div className="">
                <img src="/person1.jpg" alt="Profile" className="w-10 rounded-full mt-1"/>
            </div>
            <div className="flex flex-col">
                <p>John doe just added new update on the project.</p>
                <p className="opacity-50 text-xs">Today, 12:14 AM</p>
            </div>
        </div>
     );
}
 
export default NotificationItem;