import { useState } from "react";

const Dropdown = ({label, children, className}) => {
    const [isOn, setisOn] = useState(false);

    return (
        <div className={className}>
            <a className="flex cursor-pointer dark:text-white text-black select-none" onClick={() => setisOn(!isOn)}>
                {label} 
                <div className={`ms-1 transition-transform duration-100 ease-in-out ${isOn && "-rotate-90"} `}>
                    <i className='bi bi-caret-down'></i>
                </div>
            </a>
            <div className={`dropdown-menu transform transition-all duration-150 ease-in-out ${isOn ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`} onBlur={() => setisOn(!isOn)}>
                {children}
            </div>
        </div> 
        
     );
}
 
export default Dropdown;