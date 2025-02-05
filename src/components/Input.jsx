import {useState} from 'react';
import DatePicker from './DatePicker';

const Input = ({placeholder, type, icon, label}) => {
    const [isFocus, setIsFocus] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    return (
    <div className="flex flex-col space-y-1.5">
        <label className="ms-2">{label}</label>
        <div onFocus={() => {setIsFocus(true); setShowCalendar(true);}} onBlur={() => setIsFocus(false)} className="flex items-center">
            <div className="relative">
                <input className="input pr-10" placeholder={placeholder} type={type} />
                <i className={`input-icon ${isFocus && 'active'} ${icon}`}></i>
                {showCalendar && <DatePicker />}
            </div>
        </div>
    </div>
    
     );
}
 
export default Input;