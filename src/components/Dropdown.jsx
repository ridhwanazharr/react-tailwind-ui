import { useState } from "react";

const Dropdown = ({label, children, className}) => {
    const [isOn, setisOn] = useState(false);

    return (
        <div className={className}>
            <a className="flex cursor-pointer dark:text-white text-black" onClick={() => setisOn(!isOn)}>
                {label} 
                <div className={`ms-1 transition-transform duration-100 ease-in-out ${isOn && "-rotate-90"} `}>
                    <i className='bi bi-caret-down'></i>
                </div>
            </a>
            {isOn && children}
        </div> 
        
     );
}
 
export default Dropdown;