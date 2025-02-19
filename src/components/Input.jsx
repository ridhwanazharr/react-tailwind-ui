import {useState} from 'react';

const Input = ({placeholder, type, icon, label, style}) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
    <div className="flex flex-col space-y-1.5">
        <label className="ms-2">{label}</label>
        <div onFocus={() => {setIsFocus(true)}} onBlur={() => setIsFocus(false)} className="flex items-center">
            <div className="relative w-full">
                <input className={`input pr-10 ${style}`} placeholder={placeholder} type={type} />
                <i className={`input-icon ${isFocus && 'active'} ${icon}`}></i>
            </div>
        </div>
    </div>
    
     );
}
 
export default Input;